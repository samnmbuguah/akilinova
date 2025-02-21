#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Create a production directory
echo "Creating production directory..."
rm -rf production
mkdir production

# Copy necessary files to production directory
echo "Copying files to production directory..."
cp package.json production/
cp package-lock.json production/
cp server.js production/
cp -r .next production/.next
cp -r public production/

# Use rsync to upload files to the server
echo "Uploading to server using rsync..."
rsync -avz -e "ssh -i ~/.ssh/akilinova_rsa -p 21098" production/ akilnoqy@66.29.146.96:/home/akilnoqy/akilinova.com/

# Clean up local files
echo "Cleaning up local files..."
rm -rf production

echo "Deployment complete!"
