#!/bin/bash

echo "Enter Commit Mesage: "
read x
yarn build
git add dist -f 
git commit -m "${x}"
git subtree push --prefix dist origin gh-pages