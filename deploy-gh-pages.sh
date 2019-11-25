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
	# rescue npm modules which are not part of any commits
	mkdir .branch-backup
	mv node_modules .branch-backup/
	mv package-lock.json .branch-backup/

	# install build results in branch root and commit
	mv build/* ./
	# make wp-post.html work in gh-pages
	mkdir wohnberechtigungsschein-rechner
	ln -s * wohnberechtigungsschein-rechner/
	rm wohnberechtigungsschein-rechner/wohnberechtigungsschein-rechner

	git add *
	git commit -m "$COMMENT"

	# cleanup and restore npm and bower modules
	rm -rf ./*
	mkdir src
	mv .branch-backup/node_modules ./
	mv .branch-backup/package-lock.json ./
	rmdir .branch-backup

	git push
	git pull
)

# switch back to previus branch
git checkout "$CURRENTBRANCH"
git reset
