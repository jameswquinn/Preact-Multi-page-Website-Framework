# Preact Multi-page Website Framework with Webpack

This project is a lightweight, multi-page website framework built with Preact and preact-router. It provides a solid foundation for creating fast, efficient web applications with multiple routes, implements lazy loading for improved performance, and uses Webpack as the build tool.

## Features

- Built with Preact for efficient DOM updates and small bundle size
- Multi-page routing with preact-router
- Lazy loading of page components for improved initial load time
- Webpack as the build tool for flexible configuration and optimized production builds
- Basic responsive layout with CSS

## Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/jameswquinn/Preact-Multi-page-Website-Framework.git
   cd Preact-Multi-page-Website-Framework
   
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Build for Production

To create a production-ready build, run:

```
npm run build
```

This will generate optimized files in the `dist` directory.

To serve the production build locally, run:

```
npm run serve
```

## Project Structure

- `src/index.html`: HTML template
- `src/index.jsx`: Application entry point
- `src/app.jsx`: Main App component with routing setup and lazy loading implementation
- `src/components/`: Reusable components (e.g., Header, Loading)
- `src/pages/`: Individual page components (lazy loaded)
- `src/index.css`: Global styles
- `webpack.config.js`: Webpack configuration file

## Lazy Loading

This project uses Preact's lazy loading capabilities to improve performance. Page components are loaded dynamically when they are needed, reducing the initial bundle size and improving load times.

## Webpack Configuration

The project uses Webpack for building and bundling. The configuration includes:

- Babel for transpiling JavaScript and JSX
- CSS loading and injection
- Development server with hot reloading
- Production optimizations

You can modify the Webpack configuration in `webpack.config.js` to suit your needs.

## Customization

1. Add new pages by creating components in the `src/pages/` directory and adding them to the lazy-loaded routes in `src/app.jsx`.
2. Modify the header navigation in `src/components/Header.jsx`.
3. Update global styles in `src/index.css`.
4. Customize the loading indicator in `src/components/Loading.jsx`.
5. Adjust the Webpack configuration in `webpack.config.js` for advanced customization of the build process.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
