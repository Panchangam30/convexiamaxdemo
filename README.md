# Market Analysis Agent

A comprehensive pharmaceutical market analysis application powered by GPT-4, providing detailed insights into drug development, market dynamics, and strategic planning.

## Features

- **GPT-Powered Analysis**: Real-time market analysis using OpenAI's GPT-4
- **Comprehensive Reports**: Detailed compound profiles, market sizing, competitive landscape, and financial projections
- **Strategic Planning**: Action plans and success factors for drug development
- **Interactive UI**: Modern, responsive interface with real-time data visualization
- **Multi-tab Results**: Organized results across Compound Profile, Market Size, Competitive Landscape, Financial Projections, and Strategic Fit

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS + Vite
- **Backend**: Node.js + Express + TypeScript
- **AI**: OpenAI GPT-4 API
- **Package Manager**: pnpm

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- OpenAI API key

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd convexiamaxdemo
```

### 2. Install Dependencies

```bash
# Install workspace dependencies
pnpm install

# Install frontend dependencies
cd frontend
pnpm install

# Install backend dependencies
cd ../backend
pnpm install
```

### 3. Environment Configuration

#### Backend Environment Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create a `.env` file:

```bash
cp env.example .env
```

3. Edit the `.env` file and add your OpenAI API key:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# OpenAI Configuration
OPENAI_API_KEY=your_actual_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

# Optional: Customize GPT behavior
MAX_TOKENS=4000
TEMPERATURE=0.7

# CORS Configuration (optional)
CORS_ORIGIN=http://localhost:5173
```

**Important**: Replace `your_actual_openai_api_key_here` with your real OpenAI API key.

### 4. Start the Application

#### Start the Backend Server

```bash
cd backend
pnpm dev
```

The backend will start on `http://localhost:3001`

#### Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
pnpm dev
```

The frontend will start on `http://localhost:5173`

### 5. Verify Installation

1. **Backend Health Check**: Visit `http://localhost:3001/health`
2. **Frontend**: Visit `http://localhost:5173`

## Usage

### 1. Submit Market Analysis

1. Fill out the drug information form with:

   - Molecule name
   - Drug class
   - Mechanism of action
   - Development phase
   - Target indications
   - Target regions
   - Additional details

2. Click "Submit Analysis" to generate a comprehensive market analysis

### 2. View Results

The analysis results are organized into several tabs:

- **Compound Profile**: Mechanism of action, preclinical findings, clinical data
- **Market Size**: Market sizing, growth rates, key drivers
- **Competitive Landscape**: Direct and indirect competitors
- **Financial Projections**: Revenue forecasts, peak sales, CAGR
- **Strategic Fit**: Regulatory tailwinds, FDA designations, policy incentives

### 3. Interactive Features

- **View Details**: Click on any "View Details" link for more information
- **Sources**: Access data sources for transparency
- **Modals**: Detailed views for specific data points
- **Responsive Design**: Works on desktop and mobile devices

## API Endpoints

### Market Analysis

- `POST /api/market-analysis` - Submit market analysis request
- `GET /api/market-analysis/:id` - Get analysis status

### Reference Data

- `GET /api/indications` - Get available indications
- `GET /api/regions` - Get available regions
- `GET /api/development-phases` - Get development phases

### Health Check

- `GET /health` - Server health status

## Configuration Options

### GPT Configuration

You can customize the GPT behavior in the `.env` file:

```env
OPENAI_MODEL=gpt-4-turbo-preview  # Model to use
MAX_TOKENS=4000                   # Maximum tokens per request
TEMPERATURE=0.7                   # Creativity level (0-1)
```

### Server Configuration

```env
PORT=3001                         # Backend server port
NODE_ENV=development              # Environment mode
CORS_ORIGIN=http://localhost:5173 # Frontend URL for CORS
```

## Development

### Project Structure

```
convexiamaxdemo/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── App.tsx          # Main application component
│   │   ├── main.tsx         # Application entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # Express backend
│   ├── src/
│   │   ├── index.ts         # Main server file
│   │   └── services/
│   │       └── gptService.ts # GPT integration service
│   ├── package.json
│   └── env.example          # Environment template
└── package.json             # Workspace configuration
```

### Available Scripts

#### Frontend

```bash
cd frontend
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

#### Backend

```bash
cd backend
pnpm dev          # Start development server with nodemon
pnpm build        # Build TypeScript
pnpm start        # Start production server
```

## Troubleshooting

### Common Issues

1. **OpenAI API Key Error**

   - Ensure your API key is correctly set in the `.env` file
   - Verify the API key has sufficient credits
   - Check that the key has access to GPT-4 models

2. **CORS Errors**

   - Ensure the frontend is running on the correct port (5173)
   - Check the CORS_ORIGIN setting in the backend `.env` file

3. **Port Conflicts**

   - Backend default port: 3001
   - Frontend default port: 5173
   - Change ports in respective configuration files if needed

4. **Network Errors**
   - Ensure both frontend and backend are running
   - Check firewall settings
   - Verify localhost connectivity

### Debug Mode

To enable debug logging, set in backend `.env`:

```env
NODE_ENV=development
DEBUG=true
```

## Security Notes

- Never commit your `.env` file to version control
- Keep your OpenAI API key secure
- Consider implementing rate limiting for production use
- Add authentication for production deployments

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:

1. Check the troubleshooting section
2. Review the API documentation
3. Open an issue on GitHub
