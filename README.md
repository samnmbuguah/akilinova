# Akilinova - AI-Powered Security Solutions

A modern, responsive website for Akilinova, showcasing AI-powered security solutions and surveillance systems. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design with red gradient theme
- ⚡ Server-side rendering with Next.js 14
- 🔄 Smooth animations with Framer Motion
- 📱 Mobile-first approach with responsive navigation
- 🎯 SEO optimized with metadata
- 🌐 Blog system with MDX support
- 🔒 Privacy Policy and Terms of Service pages
- 📊 Case studies showcase
- 🏢 Industry-specific solution pages
- 📝 Contact form with validation

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [MDX](https://mdxjs.com/) - Blog content
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/akilinova.git
   ```

2. Install dependencies:
   ```bash
   cd akilinova
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
```bash
npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
akilinova/
├── public/          # Static assets
│   ├── images/     # Image assets
│   └── videos/     # Video assets
├── src/
│   ├── app/        # Next.js 14 app directory
│   │   ├── api/    # API routes
│   │   └── */      # Page routes
│   ├── components/ # React components
│   └── lib/        # Utility functions
├── posts/          # Blog post MDX files
└── scripts/        # Utility scripts
```

## Deployment

### Production Build

1. Create a production build:
   ```bash
   npm run build:prod
   ```
   This will create a `production.tar.gz` file containing all necessary files.

2. Upload to cPanel:
   - Upload `production.tar.gz` to your server
   - Extract the archive
   - Set Node.js version to 20.x
   - Configure application:
     - Entry point: `server.js`
     - Application URL: your domain
     - Application root: `/home/username/path/to/app`
     - Environment: Production

### Memory Optimization

The build process is optimized for environments with limited memory:
```json
"build": "NODE_OPTIONS='--max_old_space_size=460' next build"
```

## Development Guidelines

### Styling
- Use Tailwind CSS for styling
- Follow the red gradient theme (`from-red-600 to-red-700`)
- Maintain consistent spacing and border radius

### Components
- Keep components modular and reusable
- Use TypeScript interfaces for props
- Implement proper loading states
- Add motion effects for better UX

### Performance
- Optimize images using Next.js Image component
- Implement proper caching strategies
- Use dynamic imports when necessary
- Minimize bundle size

## Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [akilinova.com](https://akilinova.com)
- Email: info@akilinova.com
- Phone: +254705094881 / +254719638128
- Address: State House Road Junction, Luther Plaza, 4th Floor, Room 7, Nairobi, Kenya

## Acknowledgments

- Design inspiration from modern SaaS websites
- Icons from [Heroicons](https://heroicons.com)
- Stock images and videos from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com)
