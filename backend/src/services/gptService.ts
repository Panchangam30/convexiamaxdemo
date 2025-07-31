import OpenAI from 'openai';

// Initialize OpenAI client lazily
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

export interface MarketAnalysisRequest {
  moleculeName: string;
  internalCode: string;
  drugClass: string;
  modality: string;
  mechanismOfAction: string;
  developmentPhase: string;
  targetLaunchYear: string;
  routeOfAdministration: string;
  clinicalTrials: string;
  additionalNotes: string;
  selectedIndications: string[];
  selectedRegions: string[];
}

export interface MarketAnalysisResponse {
  compoundProfile: {
    mechanismOfAction: string;
    preclinicalFindings: {
      ic50Mutant: string;
      ic50WildType: string;
      tumorInhibition: string;
    };
    clinicalData: {
      phase1Results: string;
      phase2Results: string;
      safetyProfile: string;
    };
  };
  marketSize: {
    totalMarketSize: string;
    targetMarketSize: string;
    growthRate: string;
    keyDrivers: string[];
  };
  competitiveLandscape: {
    directCompetitors: Array<{
      name: string;
      company: string;
      status: string;
      differentiation: string;
    }>;
    indirectCompetitors: Array<{
      name: string;
      company: string;
      status: string;
      differentiation: string;
    }>;
  };
  financialProjections: {
    peakSales: string;
    cagr: string;
    revenueForecast: Array<{
      year: number;
      revenue: number;
    }>;
  };
  strategicFit: {
    tailwindScore: number;
    fdaDesignations: number;
    guidanceDocuments: number;
    policyIncentives: number;
    advocacyActivity: number;
    marketPrecedent: number;
  };
}

export class GPTService {
  private static instance: GPTService;

  private constructor() {}

  public static getInstance(): GPTService {
    if (!GPTService.instance) {
      GPTService.instance = new GPTService();
    }
    return GPTService.instance;
  }

  async generateMarketAnalysis(request: MarketAnalysisRequest): Promise<MarketAnalysisResponse> {
    try {
      const prompt = this.buildAnalysisPrompt(request);
      
      const completion = await getOpenAIClient().chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: `You are an expert pharmaceutical market analyst with deep knowledge of drug development, regulatory affairs, and market dynamics. 
            Analyze the provided drug information and generate comprehensive market analysis data in JSON format.
            Be realistic and data-driven in your analysis.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: parseInt(process.env.MAX_TOKENS || '4000'),
        temperature: parseFloat(process.env.TEMPERATURE || '0.7'),
        response_format: { type: "json_object" }
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new Error('No response from GPT');
      }

      return JSON.parse(response) as MarketAnalysisResponse;
    } catch (error) {
      console.error('Error generating market analysis:', error);
      throw new Error('Failed to generate market analysis');
    }
  }

  private buildAnalysisPrompt(request: MarketAnalysisRequest): string {
    return `
    Please analyze the following pharmaceutical compound and generate comprehensive market analysis data in JSON format:

    COMPOUND INFORMATION:
    - Molecule Name: ${request.moleculeName}
    - Internal Code: ${request.internalCode}
    - Drug Class: ${request.drugClass}
    - Modality: ${request.modality}
    - Mechanism of Action: ${request.mechanismOfAction}
    - Development Phase: ${request.developmentPhase}
    - Target Launch Year: ${request.targetLaunchYear}
    - Route of Administration: ${request.routeOfAdministration}
    - Clinical Trials: ${request.clinicalTrials}
    - Additional Notes: ${request.additionalNotes}
    - Target Indications: ${request.selectedIndications.join(', ')}
    - Target Regions: ${request.selectedRegions.join(', ')}

    Please provide a detailed analysis in the following JSON structure:

    {
      "compoundProfile": {
        "mechanismOfAction": "Detailed description of how the drug works",
        "preclinicalFindings": {
          "ic50Mutant": "IC50 value for mutant target (e.g., '2.5 nM')",
          "ic50WildType": "IC50 value for wild-type target (e.g., '180 nM')",
          "tumorInhibition": "Tumor inhibition percentage (e.g., '85%')"
        },
        "clinicalData": {
          "phase1Results": "Summary of Phase 1 clinical results",
          "phase2Results": "Summary of Phase 2 clinical results",
          "safetyProfile": "Key safety findings and tolerability"
        }
      },
      "marketSize": {
        "totalMarketSize": "Total market size in USD (e.g., '$12.5B')",
        "targetMarketSize": "Target market size in USD (e.g., '$8.2B')",
        "growthRate": "Annual growth rate (e.g., '12.5%')",
        "keyDrivers": ["Driver 1", "Driver 2", "Driver 3"]
      },
      "competitiveLandscape": {
        "directCompetitors": [
          {
            "name": "Competitor drug name",
            "company": "Company name",
            "status": "Development status",
            "differentiation": "How our drug differs"
          }
        ],
        "indirectCompetitors": [
          {
            "name": "Competitor drug name",
            "company": "Company name",
            "status": "Development status",
            "differentiation": "How our drug differs"
          }
        ]
      },
      "financialProjections": {
        "peakSales": "Peak sales projection in USD (e.g., '$2.8B')",
        "cagr": "Compound annual growth rate (e.g., '15.2%')",
        "revenueForecast": [
          {"year": 2024, "revenue": 0},
          {"year": 2025, "revenue": 150000000},
          {"year": 2026, "revenue": 450000000},
          {"year": 2027, "revenue": 850000000},
          {"year": 2028, "revenue": 1200000000},
          {"year": 2029, "revenue": 1600000000},
          {"year": 2030, "revenue": 2000000000},
          {"year": 2031, "revenue": 2400000000},
          {"year": 2032, "revenue": 2600000000},
          {"year": 2033, "revenue": 2800000000}
        ]
      },
      "strategicFit": {
        "tailwindScore": 67,
        "fdaDesignations": 18,
        "guidanceDocuments": 15,
        "policyIncentives": 12,
        "advocacyActivity": 14,
        "marketPrecedent": 8
      }
    }

    Please ensure all data is realistic and based on typical pharmaceutical industry standards for the given drug class and indications.
    `;
  }
}

export default GPTService; 