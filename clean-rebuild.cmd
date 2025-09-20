@echo off
echo Cleaning Next.js build cache and node_modules...

:: Remove Next.js build cache
if exist .next (
  echo Removing .next folder...
  rmdir /s /q .next
)

:: Remove Node.js modules
if exist node_modules (
  echo Removing node_modules folder...
  rmdir /s /q node_modules
)

:: Remove package-lock.json if it exists
if exist package-lock.json (
  echo Removing package-lock.json...
  del package-lock.json
)

:: Reinstall dependencies
echo Installing dependencies...
npm install

:: Build the project
echo Building the project...
npm run build

echo Done!
