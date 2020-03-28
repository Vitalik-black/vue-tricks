#!/usr/bin/env sh

repo="vue-tricks"
dir="dist"
autor="Bizhev"

# STOP error
set -e

yarn build
cd $dir

# echo 'www.example.com' > CNAME
git init
git add .
git commit -m 'deploy'
# git push -f git@github.com:$autor/$autor.github.io.git master
git push -f git@github.com:$autor/$repo.git master:gh-pages

cd ..
rm -rf $dir
