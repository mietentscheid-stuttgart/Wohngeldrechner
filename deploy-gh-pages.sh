#!/usr/bin/env bash

COMMENT="$1"
if [ "$COMMENT" == "" ]
then
	echo "usage: $0 <commit-comment>" 1>&2
	exit 1
fi

# switch into gh-pages branch
CURRENTBRANCH="$( git branch --show-current )"
git checkout gh-pages && (
	# rescue npm and bower modules which are not part of any commits
	mkdir .branch-backup
	mkdir .branch-backup/src
	mv node_modules .branch-backup/
	mv package-lock.json .branch-backup/
	mv src/bower_components .branch-backup/src/

	# install build results in branch root and commit
	mv build/* ./
	git add *
	git commit -m "$COMMENT"

	# cleanup and restore npm and bower modules
	rm -rf ./*
	mkdir src
	mv .branch-backup/node_modules ./
	mv .branch-backup/package-lock.json ./
	mv .branch-backup/src/bower_components ./src/
	rmdir .branch-backup/src
	rmdir .branch-backup

	git push
	git pull
)

# switch back to previus branch
git checkout "$CURRENTBRANCH"
git reset
