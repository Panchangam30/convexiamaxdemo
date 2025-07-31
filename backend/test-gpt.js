// Simple test script for GPT service
require('dotenv').config();

async function testGPT() {
  try {
    // Check if API key is set
    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY not found in environment variables');
      console.log('Please set your OpenAI API key in the .env file');
      return;
    }

    console.log('✅ OpenAI API key found');
    console.log('🔧 Testing GPT service...');

    // Import the GPT service
    const { GPTService } = require('./dist/services/gptService.js');
    
    const gptService = GPTService.getInstance();
    
    // Test data
    const testRequest = {
      moleculeName: "Test Drug",
      internalCode: "TD-001",
      drugClass: "Small Molecule",
      modality: "Oral",
      mechanismOfAction: "Inhibits specific enzyme pathway",
      developmentPhase: "Phase 2",
      targetLaunchYear: "2026",
      routeOfAdministration: "Oral",
      clinicalTrials: "Phase 2 ongoing",
      additionalNotes: "Test compound for validation",
      selectedIndications: ["NSCLC"],
      selectedRegions: ["United States"]
    };

    console.log('📊 Generating test market analysis...');
    const result = await gptService.generateMarketAnalysis(testRequest);
    
    console.log('✅ GPT service test successful!');
    console.log('📋 Analysis preview:');
    console.log('- Compound Profile:', result.compoundProfile ? '✅' : '❌');
    console.log('- Market Size:', result.marketSize ? '✅' : '❌');
    console.log('- Competitive Landscape:', result.competitiveLandscape ? '✅' : '❌');
    console.log('- Financial Projections:', result.financialProjections ? '✅' : '❌');
    console.log('- Strategic Fit:', result.strategicFit ? '✅' : '❌');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.message.includes('API key')) {
      console.log('💡 Make sure your OpenAI API key is valid and has sufficient credits');
    }
  }
}

testGPT(); 