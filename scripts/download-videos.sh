#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public/videos

# Download hero video
curl -o public/videos/hero-video.mp4 "https://videos.pexels.com/video-files/3141208/3141208-uhd_3840_2160_25fps.mp4"

# Download solution video
curl -o public/videos/solution-video.mp4 "https://videos.pexels.com/video-files/2890236/2890236-hd_1920_1080_30fps.mp4"

echo "Videos downloaded successfully!" 