# Turno App - Frontend

This is the frontend application for the Turno Management system, built with Qwik.

## Technologies

- **Qwik** - Modern web framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool
- **Vitest** - Testing framework

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components
│   ├── turnos/         # Turno-specific components
│   └── ui/             # Generic UI components
├── lib/                # Utility libraries
│   ├── api/           # API client
│   ├── services/      # Business logic services
│   ├── utils/         # Utility functions
│   └── validators/    # Data validation
├── routes/            # Qwik City routes
└── global.css         # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run fmt` - Format code with Prettier

## Create your Static Web App on Azure

1. Follow [this](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) guide to create a Static Web App. This guide will also detail how to generate a github action or Azure Pipeline (see "Quickstarts" section)

2. If you're using github actions, make sure to add skip_api_build with true value.

```yml
app_location: "/"
api_location: "azure-functions"
output_location: "dist"
skip_api_build: true # <--- add this line
###### End of Repository/Build Configurations ######
```

## Express Server

This app has a minimal [Express server](https://expressjs.com/) implementation. After running a full build, you can preview the build using the command:

```
npm run serve
```

Then visit [http://localhost:8080/](http://localhost:8080/)
