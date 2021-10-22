rm -rf dist &&
yarn build &&

git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ZZZoucy/fireworks-ui.git &&
git push -f -u origin main &&
cd ..
