#!/usr/bin/env bash

COMMENT="$1"
if [ "$COMMENT" == "" ]
then
	echo "usage: $0 <commit-comment>" 1>&2
	exit 1
fi

# switch into gh-pages branch
CURRENTBRANCH="$( git rev-parse --abbrev-ref HEAD )"
git checkout gh-pages && (
	# rescue npm modules and build which are not part of any commits
	rm -rf .branch-backup
	mkdir .branch-backup
	mv node_modules .branch-backup/
	mv package-lock.json .branch-backup/
	mv build .branch-backup/

	# cleanup old page data
	rm -rf ./*

	# install build results in branch root and commit
	mv .branch-backup/build/* ./
	# make wp-post.html work in gh-pages
	mkdir wohnberechtigungsschein-rechner
	pushd wohnberechtigungsschein-rechner
	ln -s ../* ./
	rm wohnberechtigungsschein-rechner
	popd

	git add *
	git commit -m "$COMMENT"

	# cleanup and restore npm and bower modules
	rm -rf ./*
	mv .branch-backup/node_modules ./
	mv .branch-backup/package-lock.json ./
	rmdir .branch-backup/build
	rmdir .branch-backup

	git push
	git pull
)

# switch back to previus branch
git checkout "$CURRENTBRANCH"
git reset
