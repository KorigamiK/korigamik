#!/bin/bash

echo "Enter Commit Mesage: "
read -r x
pnpm build
git add dist -f
git commit -m "${x}"
git subtree push --prefix dist origin pages
