import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import GPTService, { MarketAnalysisRequest } from './services/gptService';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize GPT Service
const gptService = GPTService.getInstance();

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Market Analysis Agent API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Market Analysis endpoints
app.post('/api/market-analysis', async (req, res) => {
  try {
    const {
      moleculeName,
      internalCode,
      drugClass,
      modality,
      mechanismOfAction,
      developmentPhase,
      targetLaunchYear,
      routeOfAdministration,
      clinicalTrials,
      additionalNotes,
      selectedIndications,
      selectedRegions
    } = req.body;

    // Validate required fields
    if (!moleculeName || !drugClass || !mechanismOfAction) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: moleculeName, drugClass, and mechanismOfAction are required'
      });
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'OpenAI API key not configured'
      });
    }

    const analysisId = `MA-${Date.now()}`;
    
    // Create market analysis request
    const marketAnalysisRequest: MarketAnalysisRequest = {
      moleculeName,
      internalCode: internalCode || '',
      drugClass,
      modality: modality || '',
      mechanismOfAction,
      developmentPhase: developmentPhase || '',
      targetLaunchYear: targetLaunchYear || '',
      routeOfAdministration: routeOfAdministration || '',
      clinicalTrials: clinicalTrials || '',
      additionalNotes: additionalNotes || '',
      selectedIndications: selectedIndications || [],
      selectedRegions: selectedRegions || []
    };

    // Generate market analysis using GPT
    const analysisResult = await gptService.generateMarketAnalysis(marketAnalysisRequest);

    const marketAnalysis = {
      id: analysisId,
      ...marketAnalysisRequest,
      analysis: analysisResult,
      status: 'completed',
      createdAt: new Date().toISOString(),
      completedAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: 'Market analysis completed successfully',
      data: marketAnalysis
    });

  } catch (error) {
    console.error('Error processing market analysis:', error);
    
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to process market analysis request'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'An unexpected error occurred'
      });
    }
  }
});

// Get market analysis status (for compatibility)
app.get('/api/market-analysis/:id', (req, res) => {
  const { id } = req.params;
  
  res.json({
    success: true,
    data: {
      id,
      status: 'completed',
      progress: 100,
      lastUpdated: new Date().toISOString()
    }
  });
});

// Get available indications
app.get('/api/indications', (req, res) => {
  const indications = [
    'NSCLC', 'Breast Cancer', 'Colorectal Cancer', 'Melanoma', 'Prostate Cancer',
    'Ovarian Cancer', 'Pancreatic Cancer', 'Glioblastoma', 'Leukemia', 'Lymphoma',
    'Multiple Myeloma', 'Other Solid Tumors'
  ];
  
  res.json({
    success: true,
    data: indications
  });
});

// Get available regions
app.get('/api/regions', (req, res) => {
  const regions = [
    'United States', 'European Union', 'Japan', 'China', 'Canada',
    'Australia', 'South Korea', 'Brazil', 'Rest of World'
  ];
  
  res.json({
    success: true,
    data: regions
  });
});

// Get development phases
app.get('/api/development-phases', (req, res) => {
  const phases = [
    'Preclinical', 'Phase 1', 'Phase 2', 'Phase 3', 'NDA Submitted', 'Approved'
  ];
  
  res.json({
    success: true,
    data: phases
  });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Start server - TEMPORARILY DISABLED
// app.listen(PORT, () => {
//   console.log(`🚀 Market Analysis Agent API running on port ${PORT}`);
//   console.log(`📡 Health check: http://localhost:${PORT}/health`);
//   console.log(`🌐 API base: http://localhost:${PORT}/api`);
//   
//   if (!process.env.OPENAI_API_KEY) {
//     console.warn('⚠️  Warning: OPENAI_API_KEY not set. GPT functionality will not work.');
//   }
// });

console.log('🚫 Backend temporarily disabled for maintenance');
console.log('📝 To re-enable, uncomment the app.listen section in backend/src/index.ts'); 