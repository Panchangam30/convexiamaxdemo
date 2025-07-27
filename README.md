# Full-Stack Application

A modern full-stack application built with React, TypeScript, Tailwind CSS (frontend) and Node.js, Express, TypeScript (backend).

## Project Structure

```
convexiamaxdemo/
├── frontend/          # React + TypeScript + Tailwind CSS
├── backend/           # Node.js + Express + TypeScript
└── README.md
```

## Frontend (React + TypeScript + Tailwind CSS)

### Features

- ⚛️ React 19 with TypeScript
- 🎨 Tailwind CSS for styling
- ⚡ Vite for fast development
- 🔧 ESLint for code quality

### Setup & Development

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Backend (Node.js + Express + TypeScript)

### Features

- 🚀 Node.js with Express
- 📝 TypeScript for type safety
- 🔄 CORS enabled for frontend communication
- 📊 Health check endpoints
- 🛡️ Error handling middleware

### Setup & Development

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file (copy from `.env.example`):

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. The server will be running on `http://localhost:3001`

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server

### API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/hello` - Hello endpoint
- `GET /api/counter` - Get current counter value
- `POST /api/counter/increment` - Increment counter
- `POST /api/counter/reset` - Reset counter to 0

## Development Workflow

1. Start both servers:

   ```bash
   # Terminal 1 - Frontend
   cd frontend && pnpm dev

   # Terminal 2 - Backend
   cd backend && pnpm dev
   ```

2. Frontend will be available at `http://localhost:5173`
3. Backend API will be available at `http://localhost:3001`

## Technologies Used

### Frontend

- React 19
- TypeScript
- Tailwind CSS
- Vite
- ESLint

### Backend

- Node.js
- Express
- TypeScript
- CORS
- dotenv

## Contributing

1. Make sure both frontend and backend are running
2. Make your changes
3. Test the functionality
4. Commit your changes

## License

ISC
