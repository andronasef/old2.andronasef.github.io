# Andrew Nasef Portfolio Website

A modern, multilingual portfolio website built with Astro, React, and Tailwind CSS. This website showcases projects, services, and provides a contact form for potential clients.

## 🌟 Features

- **Multilingual Support**: Available in English and Arabic using `astro-i18n-aut`
- **Modern Tech Stack**: Built with Astro 3.x, React 18, and Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Includes sitemap generation and SEO metadata
- **MDX Support**: Write content in Markdown with React components
- **Contact Form**: Integrated Google Forms for easy client communication
- **Portfolio Showcase**: Dynamic project listing and detail pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andronasef/old2.andronasef.github.io.git
cd old2.andronasef.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── assets/         # Images, icons, and other media
│   └── favicon.svg     # Site favicon
├── src/
│   ├── components/     # React and Astro components
│   │   ├── common/     # Shared components
│   │   └── pages/      # Page-specific components
│   ├── content/        # Content collections
│   ├── i18n/          # Internationalization files
│   │   ├── ar.json    # Arabic translations
│   │   └── en.json    # English translations
│   ├── layouts/       # Page layouts
│   ├── pages/         # Astro pages (routes)
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── astro.config.ts    # Astro configuration
└── tailwind.config.cjs # Tailwind CSS configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

This site is configured for deployment on GitHub Pages with a custom domain (annatools.me).

### Automatic Deployment

The site automatically deploys to GitHub Pages when:
- Code is pushed to the `main` branch
- Code is pushed to any `releases/**` branch
- Manually triggered via GitHub Actions workflow

### Manual Deployment

You can manually trigger a deployment from the GitHub Actions tab.

## 🎨 Customization

### Updating Content

1. **Homepage Content**: Edit translations in `src/i18n/en.json` and `src/i18n/ar.json`
2. **Projects**: Add/edit projects in the `src/content/` directory
3. **Styling**: Modify Tailwind configuration in `tailwind.config.cjs`
4. **Site Metadata**: Update `astro.config.ts` for site-wide settings

### Changing the Domain

If you need to change the deployment domain:
1. Update the `CNAME` file with your domain
2. Update `site` in `astro.config.ts`
3. Update the sitemap base URL in `astro.config.ts`

## 🔧 Technologies Used

- [Astro](https://astro.build/) - Static site generator
- [React](https://reactjs.org/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [astro-i18n-aut](https://github.com/jlarmstrongiv/astro-i18n-aut) - Internationalization

## 📝 License

This project is the personal portfolio of Andrew Nasef. Please respect intellectual property rights.

## 👤 Author

**Andrew Nasef**
- GitHub: [@andronasef](https://github.com/andronasef)
- Website: [annatools.me](https://annatools.me)

## 🤝 Contributing

This is a personal portfolio site. If you find any bugs or have suggestions, feel free to open an issue.

## 📞 Contact

For inquiries, please use the contact form on the website or reach out through the social media links provided.
