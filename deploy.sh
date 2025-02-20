#!/bin/bash

# Go to the project directory
cd /home/samuel/akilinova

# Pull the latest changes
git pull origin main

# Install dependencies
npm install

# Build the application
npm run build

# Restart the PM2 process
pm2 restart akilinova 