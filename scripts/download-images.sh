#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download security and surveillance related images
curl -o public/ai-security-dashboard.jpg "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
curl -o public/security-monitoring.jpg "https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?q=80&w=2070&auto=format&fit=crop"
curl -o public/ai-analysis.jpg "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop"
curl -o public/security-team.jpg "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2070&auto=format&fit=crop"
curl -o public/data-visualization.jpg "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"

# Download testimonial images
curl -o public/testimonial1.jpg "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop"
curl -o public/testimonial2.jpg "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=500&auto=format&fit=crop"
curl -o public/testimonial3.jpg "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"

# Download case study images
curl -o public/enterprise-security.jpg "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
curl -o public/retail-security.jpg "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=2070&auto=format&fit=crop"
curl -o public/smart-city.jpg "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"

# Download blog post images
curl -o public/ai-surveillance-blog.jpg "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
curl -o public/threat-detection-blog.jpg "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
curl -o public/future-security-blog.jpg "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"

echo "Images downloaded successfully!" 