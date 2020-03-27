#!/usr/bin/env sh
branch="development" # main branch
npm run lint --fix
current_branch=$(git branch --show-current);

# STOP error
set -e

git commit -a -m "$1"
git push origin "$current_branch"
git checkout $branch
git pull origin $branch
git merge "$current_branch"
git push -u origin $branch
