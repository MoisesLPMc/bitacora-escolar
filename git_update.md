Remove-Item -Recurse -Force .git
git add . --force
git branch -M main
git commit -m "Initial commit"
git remote add origin https://github.com/MoisesLPMc/bitacora-escolar.git
git push -u origin main --force
