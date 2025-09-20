@echo off
echo Cleaning Next.js build cache and rebuilding...

:: Remove Next.js build cache
if exist .next (
  echo Removing .next folder...
  rmdir /s /q .next
)

:: Build the project
echo Building the project...
call npm run build

echo Done! Now run "npm run start" to start the production server.
