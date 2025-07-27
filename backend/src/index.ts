import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.post('/api/market-analysis', (req, res) => {
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

    // All fields are optional - no validation required

    // Simulate market analysis processing
    const analysisId = `MA-${Date.now()}`;
    
    const marketAnalysis = {
      id: analysisId,
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
      selectedRegions,
      status: 'processing',
      createdAt: new Date().toISOString(),
      estimatedCompletion: new Date(Date.now() + 5 * 60 * 1000).toISOString() // 5 minutes from now
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Queue for processing
    // 3. Trigger market analysis algorithms
    // 4. Send notifications

    res.status(201).json({
      success: true,
      message: 'Market analysis request submitted successfully',
      data: marketAnalysis
    });

  } catch (error) {
    console.error('Error processing market analysis:', error);
    res.status(500).json({
      error: 'Failed to process market analysis request',
      success: false
    });
  }
});

// Get market analysis status
app.get('/api/market-analysis/:id', (req, res) => {
  const { id } = req.params;
  
  // Simulate checking analysis status
  const status = Math.random() > 0.5 ? 'completed' : 'processing';
  
  res.json({
    success: true,
    data: {
      id,
      status,
      progress: status === 'completed' ? 100 : Math.floor(Math.random() * 90) + 10,
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Market Analysis Agent API running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🌐 API base: http://localhost:${PORT}/api`);
}); 