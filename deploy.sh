rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
it remote add origin git@github.com:ZZZoucy/Fireworks-UI.git &&
git push -f -u origin main &&
cd ..
echo https://zzzoucy.github.io/Fireworks-UI-website/