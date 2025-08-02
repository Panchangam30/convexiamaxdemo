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
  moleculeName: string;
  compoundProfile: {
    targetProtein: string;
    pathway: string;
    mechanismOfAction: string;
    primaryIndication: string;
    developmentStrategy: string;
    preclinicalFindings: {
      ic50Mutant: string;
      ic50WildType: string;
      tumorInhibition: string;
      survivalImprovement: string;
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
      mechanismOfAction: string;
      marketValue: string;
      latestMilestone: string;
      target: string;
      patients: string;
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
    tailwindScore: string;
    fdaDesignations: string;
    guidanceDocuments: string;
    policyIncentives: string;
    advocacyActivity: string;
    marketPrecedent: string;
  };
  // New comprehensive content sections
  contentSections: {
    // Compound Profile Section
    compoundProfileTitle: string;
    compoundProfileDescription: string;
    targetProteinDescription: string;
    pathwayDescription: string;
    mechanismDescription: string;
    indicationDescription: string;
    strategyDescription: string;
    
    // Market Size Section
    marketSizeTitle: string;
    marketSizeDescription: string;
    marketGrowthDescription: string;
    
    // Competitive Landscape Section
    competitiveTitle: string;
    competitiveDescription: string;
    competitorAnalysisDescription: string;
    
    // Financial Projections Section
    financialTitle: string;
    financialDescription: string;
    revenueForecastDescription: string;
    loeImpactDescription: string;
    
    // Strategic Fit Section
    strategicTitle: string;
    strategicDescription: string;
    tailwindDescription: string;
    fdaDescription: string;
    guidanceDescription: string;
    policyDescription: string;
    advocacyDescription: string;
    
    // Chart Descriptions
    marketGrowthChartTitle: string;
    marketGrowthChartDescription: string;
    revenueChartTitle: string;
    revenueChartDescription: string;
    loeChartTitle: string;
    loeChartDescription: string;
    
    // Card Descriptions
    fdaCardDescription: string;
    guidanceCardDescription: string;
    policyCardDescription: string;
    advocacyCardDescription: string;
    
    // Additional dynamic content fields
    marketGrowthSubtitle: string;
    revenueForecastSubtitle: string;
    loeImpactSubtitle: string;
    survivalImprovementDescription: string;
    breakthroughTherapyStatus: string;
    fastTrackStatus: string;
    orphanDrugStatus: string;
    priorityReviewStatus: string;
    oncologyEndpointsStatus: string;
    biomarkerStrategyStatus: string;
    clinicalTrialDesignStatus: string;
    regulatoryPathwayStatus: string;
    orphanDrugIncentiveStatus: string;
    acceleratedApprovalStatus: string;
    priorityReviewVoucherStatus: string;
    patientAccessStatus: string;
    physicianEducationStatus: string;
    payerEngagementStatus: string;
    regulatoryAdvocacyStatus: string;
    marketPrecedentDescription: string;
    competitiveAdvantageDescription: string;
    clinicalEfficacyDescription: string;
    safetyProfileDescription: string;
    marketAccessDescription: string;
    pricingStrategyDescription: string;
    reimbursementDescription: string;
    launchStrategyDescription: string;
    lifecycleManagementDescription: string;
    riskAssessmentDescription: string;
    opportunityAnalysisDescription: string;
    
    // Regulatory and Timeline Fields
    timelineToMarket: string;
    regulatoryPlanDescription: string;
    breakthroughDesignationLabel: string;
    orphanDrugStatusLabel: string;
    fastTrackPathwayDescription: string;
    
    // Sources and References
    sources: Array<{
      title: string;
      url: string;
      description: string;
      type: string;
    }>;
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
        model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
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
    You are an expert pharmaceutical market analyst. Generate SHORT, CONCISE responses like the hardcoded examples. Only the mechanism description should be detailed - everything else should be brief and simple.

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

    CRITICAL REQUIREMENTS - KEEP RESPONSES SHORT:
    1. Generate SHORT, CONCISE content - like the hardcoded examples
    2. Only the mechanism description should be detailed (2-3 sentences)
    3. All other fields should be 1-2 sentences maximum
    4. Replace ALL "REAL" placeholders with actual, specific content
    5. Generate actual FDA designations, regulatory pathways, and approval status
    6. Create real competitor names and companies
    7. Provide actual market size numbers and percentages
    8. Generate real clinical trial data and safety profiles
    9. Create actual sources with real titles and URLs
    10. Replace all "Dynamic" and "Comprehensive" titles with specific titles
    11. Generate actual timeline estimates and regulatory pathways
    12. Provide real financial projections with specific dollar amounts
    13. Create actual market precedents and competitive advantages
    14. Generate real approval status and development phases
    15. For tumorInhibition and survivalImprovement: Provide ONLY the number (e.g., "87" not "87%")
    16. For FDA designation scores: Provide ONLY the number (e.g., "22" not "22/25")

    RESPONSE STYLE - KEEP IT SIMPLE:
    - Target Protein: Short protein name and brief description
    - Pathway: Simple pathway name
    - Mechanism: Detailed description (2-3 sentences only)
    - Indication: Brief disease indication
    - Strategy: Simple development strategy
    - Preclinical: Brief data points
    - Clinical: Brief results
    - Market Size: Simple numbers and percentages
    - Competition: Brief competitor names and status
    - Financial: Simple projections
    - Regulatory: Brief designations
    - Sources: Real titles and URLs

    Please provide a comprehensive analysis with SHORT, CONCISE content:

    {
      "moleculeName": "${request.moleculeName}",
      "compoundProfile": {
        "targetProtein": "REAL protein target for ${request.moleculeName} (keep it short)",
        "pathway": "REAL signaling pathway for ${request.moleculeName} (keep it short)",
        "mechanismOfAction": "REAL detailed mechanism of ${request.moleculeName} (2-3 sentences only)",
        "primaryIndication": "REAL disease indication for ${request.moleculeName} (provide multiple indications separated by commas, e.g., 'NSCLC, Breast Cancer, Melanoma')",
        "developmentStrategy": "REAL development strategy for ${request.moleculeName} (keep it short)",
        "preclinicalFindings": {
          "ic50Mutant": "REAL IC50 value for ${request.moleculeName} (provide nM value like '5nM' for small molecules, 'Not applicable' for antibodies)",
          "ic50WildType": "REAL IC50 value for ${request.moleculeName} (provide nM value like '50nM' for small molecules, 'Not applicable' for antibodies)",
          "tumorInhibition": "REAL tumor inhibition percentage for ${request.moleculeName} (provide ONLY the number, e.g., '87' for 87%)",
          "survivalImprovement": "REAL survival improvement percentage for ${request.moleculeName} (provide ONLY the number, e.g., '65' for 65%)"
        },
        "clinicalData": {
          "phase1Results": "REAL Phase 1 results for ${request.moleculeName} (keep it short)",
          "phase2Results": "REAL Phase 2 results for ${request.moleculeName} (keep it short)",
          "safetyProfile": "REAL safety profile for ${request.moleculeName} (keep it short)"
        }
      },
      "marketSize": {
        "totalMarketSize": "REAL market size for ${request.selectedIndications.join(', ')} (keep it short)",
        "targetMarketSize": "REAL target market size for ${request.moleculeName} (keep it short)",
        "growthRate": "REAL market growth rate for ${request.selectedIndications.join(', ')} (keep it short)",
        "keyDrivers": [
          "REAL market driver 1 for ${request.selectedIndications.join(', ')} (keep it short)",
          "REAL market driver 2 for ${request.selectedIndications.join(', ')} (keep it short)",
          "REAL market driver 3 for ${request.selectedIndications.join(', ')} (keep it short)"
        ]
      },
      "competitiveLandscape": {
              "directCompetitors": [
        {
          "name": "REAL competitor drug name in ${request.selectedIndications.join(', ')}",
          "company": "REAL pharmaceutical company name",
          "status": "REAL development status like 'Approved', 'Development', 'Regional', 'Phase III', 'Preclinical' (keep it short)",
          "differentiation": "REAL differentiation for ${request.moleculeName} (keep it short)",
          "mechanismOfAction": "REAL mechanism of action for competitor (keep it short)",
          "marketValue": "REAL market value like '$5.4B' or 'TBD' (keep it short)",
          "latestMilestone": "REAL milestone like 'Approved 2015' or 'Phase III' (keep it short)",
          "target": "REAL target for competitor (keep it short)",
          "patients": "REAL patient population like '45K' or 'TBD' (keep it short)"
        },
        {
          "name": "REAL competitor drug name 2 in ${request.selectedIndications.join(', ')}",
          "company": "REAL pharmaceutical company name 2",
          "status": "REAL development status like 'Development', 'Phase III', 'Regional', 'Approved China' (keep it short)",
          "differentiation": "REAL differentiation 2 for ${request.moleculeName} (keep it short)",
          "mechanismOfAction": "REAL mechanism of action for competitor 2 (keep it short)",
          "marketValue": "REAL market value 2 like '$1.2B' or 'TBD' (keep it short)",
          "latestMilestone": "REAL milestone 2 like 'Phase III' or 'Approved China' (keep it short)",
          "target": "REAL target for competitor 2 (keep it short)",
          "patients": "REAL patient population 2 like '12K' or 'TBD' (keep it short)"
        },
        {
          "name": "REAL competitor drug name 3 in ${request.selectedIndications.join(', ')}",
          "company": "REAL pharmaceutical company name 3",
          "status": "REAL development status like 'Regional', 'Approved China', 'Phase II', 'Development' (keep it short)",
          "differentiation": "REAL differentiation 3 for ${request.moleculeName} (keep it short)",
          "mechanismOfAction": "REAL mechanism of action for competitor 3 (keep it short)",
          "marketValue": "REAL market value 3 like '$800M' or 'TBD' (keep it short)",
          "latestMilestone": "REAL milestone 3 like 'Approved China' or 'Phase II' (keep it short)",
          "target": "REAL target for competitor 3 (keep it short)",
          "patients": "REAL patient population 3 like '8K' or 'TBD' (keep it short)"

      ],
      "indirectCompetitors": [
          {
            "name": "REAL indirect competitor name",
            "company": "REAL company name",
            "status": "REAL development status (keep it short)",
            "differentiation": "REAL differentiation for ${request.moleculeName} (keep it short)"
          }
        ]
      },
      "financialProjections": {
        "peakSales": "REAL peak sales projection for ${request.moleculeName} (keep it short)",
        "cagr": "REAL CAGR for ${request.moleculeName} (keep it short)",
        "revenueForecast": [
          {"year": 2024, "revenue": 0},
          {"year": 2025, "revenue": 200000000},
          {"year": 2026, "revenue": 600000000},
          {"year": 2027, "revenue": 1200000000},
          {"year": 2028, "revenue": 1800000000},
          {"year": 2029, "revenue": 2400000000},
          {"year": 2030, "revenue": 3000000000},
          {"year": 2031, "revenue": 3200000000},
          {"year": 2032, "revenue": 3400000000},
          {"year": 2033, "revenue": 3600000000}
        ]
      },
      "strategicFit": {
        "tailwindScore": "REAL strategic fit score for ${request.moleculeName} (keep it short)",
        "fdaDesignations": "REAL FDA designation score for ${request.moleculeName} (provide actual number between 10-25)",
        "guidanceDocuments": "REAL guidance document score for ${request.moleculeName} (provide actual number between 10-25)",
        "policyIncentives": "REAL policy incentive score for ${request.moleculeName} (provide actual number between 10-25)",
        "advocacyActivity": "REAL advocacy activity score for ${request.moleculeName} (provide actual number between 10-25)",
        "marketPrecedent": "REAL market precedent score for ${request.moleculeName} (provide actual number between 5-15)"
      },
      "contentSections": {
        "compoundProfileTitle": "REAL compound profile title for ${request.moleculeName} (keep it short)",
        "compoundProfileDescription": "REAL analysis of ${request.moleculeName} (keep it short)",
        "targetProteinDescription": "REAL description of target protein for ${request.moleculeName} (keep it short)",
        "pathwayDescription": "REAL pathway analysis for ${request.moleculeName} (keep it short)",
        "mechanismDescription": "REAL detailed mechanism of action for ${request.moleculeName} (2-3 sentences only)",
        "indicationDescription": "REAL indication analysis for ${request.moleculeName} (keep it short)",
        "strategyDescription": "REAL development strategy for ${request.moleculeName} (keep it short)",
        
        "marketSizeTitle": "REAL market size title for ${request.moleculeName} (keep it short)",
        "marketSizeDescription": "REAL market size analysis for ${request.moleculeName} (keep it short)",
        "marketGrowthDescription": "REAL market growth analysis for ${request.moleculeName} (keep it short)",
        
        "competitiveTitle": "REAL competitive landscape title for ${request.moleculeName} (keep it short)",
        "competitiveDescription": "REAL competitive analysis for ${request.moleculeName} (keep it short)",
        "competitorAnalysisDescription": "REAL competitor analysis for ${request.moleculeName} (keep it short)",
        
        "financialTitle": "REAL financial projections title for ${request.moleculeName} (keep it short)",
        "financialDescription": "REAL financial analysis for ${request.moleculeName} (keep it short)",
        "revenueForecastDescription": "REAL revenue forecast analysis for ${request.moleculeName} (keep it short)",
        "loeImpactDescription": "REAL loss of exclusivity impact analysis for ${request.moleculeName} (keep it short)",
        
        "strategicTitle": "REAL strategic fit title for ${request.moleculeName} (keep it short)",
        "strategicDescription": "REAL strategic fit analysis for ${request.moleculeName} (keep it short)",
        "tailwindDescription": "REAL tailwind score analysis for ${request.moleculeName} (keep it short)",
        "fdaDescription": "REAL FDA regulatory pathway analysis for ${request.moleculeName} (keep it short)",
        "guidanceDescription": "REAL guidance document analysis for ${request.moleculeName} (keep it short)",
        "policyDescription": "REAL policy incentive analysis for ${request.moleculeName} (keep it short)",
        "advocacyDescription": "REAL advocacy activity analysis for ${request.moleculeName} (keep it short)",
        
        "marketGrowthChartTitle": "REAL market growth chart title for ${request.moleculeName} (keep it short)",
        "marketGrowthChartDescription": "REAL chart description for ${request.moleculeName} (keep it short)",
        "revenueChartTitle": "REAL revenue forecast chart title for ${request.moleculeName} (keep it short)",
        "revenueChartDescription": "REAL revenue chart analysis for ${request.moleculeName} (keep it short)",
        "loeChartTitle": "REAL loss of exclusivity impact chart title for ${request.moleculeName} (keep it short)",
        "loeChartDescription": "REAL LOE impact analysis for ${request.moleculeName} (keep it short)",
        
        "fdaCardDescription": "REAL FDA designation card description for ${request.moleculeName} (keep it short)",
        "guidanceCardDescription": "REAL guidance document card description for ${request.moleculeName} (keep it short)",
        "policyCardDescription": "REAL policy incentive card description for ${request.moleculeName} (keep it short)",
        "advocacyCardDescription": "REAL advocacy activity card description for ${request.moleculeName} (keep it short)",
        
        "marketGrowthSubtitle": "REAL market growth subtitle for ${request.moleculeName} (keep it short)",
        "revenueForecastSubtitle": "REAL revenue forecast subtitle for ${request.moleculeName} (keep it short)",
        "loeImpactSubtitle": "REAL patent expiry impact subtitle for ${request.moleculeName} (keep it short)",
        "survivalImprovementDescription": "REAL description of survival improvement data for ${request.moleculeName} (keep it short)",
        "breakthroughTherapyStatus": "REAL breakthrough therapy designation status for ${request.moleculeName} (keep it short)",
        "fastTrackStatus": "REAL fast track designation status for ${request.moleculeName} (keep it short)",
        "orphanDrugStatus": "REAL orphan drug designation status for ${request.moleculeName} (keep it short)",
        "priorityReviewStatus": "REAL priority review designation status for ${request.moleculeName} (keep it short)",
        "oncologyEndpointsStatus": "REAL oncology endpoints guidance status for ${request.moleculeName} (keep it short)",
        "biomarkerStrategyStatus": "REAL biomarker strategy guidance status for ${request.moleculeName} (keep it short)",
        "clinicalTrialDesignStatus": "REAL clinical trial design guidance status for ${request.moleculeName} (keep it short)",
        "regulatoryPathwayStatus": "REAL regulatory pathway guidance status for ${request.moleculeName} (keep it short)",
        "orphanDrugIncentiveStatus": "REAL orphan drug incentives status for ${request.moleculeName} (keep it short)",
        "acceleratedApprovalStatus": "REAL accelerated approval incentives status for ${request.moleculeName} (keep it short)",
        "priorityReviewVoucherStatus": "REAL priority review voucher incentives status for ${request.moleculeName} (keep it short)",
        "patientAccessStatus": "REAL patient access advocacy status for ${request.moleculeName} (keep it short)",
        "physicianEducationStatus": "REAL physician education advocacy status for ${request.moleculeName} (keep it short)",
        "payerEngagementStatus": "REAL payer engagement advocacy status for ${request.moleculeName} (keep it short)",
        "regulatoryAdvocacyStatus": "REAL regulatory advocacy status for ${request.moleculeName} (keep it short)",
        "marketPrecedentDescription": "REAL description of market precedents for ${request.moleculeName} (keep it short)",
        "competitiveAdvantageDescription": "REAL description of competitive advantages for ${request.moleculeName} (keep it short)",
        "clinicalEfficacyDescription": "REAL description of clinical efficacy for ${request.moleculeName} (keep it short)",
        "safetyProfileDescription": "REAL description of safety profile for ${request.moleculeName} (keep it short)",
        "marketAccessDescription": "REAL description of market access strategy for ${request.moleculeName} (keep it short)",
        "pricingStrategyDescription": "REAL description of pricing strategy for ${request.moleculeName} (keep it short)",
        "reimbursementDescription": "REAL description of reimbursement strategy for ${request.moleculeName} (keep it short)",
        "launchStrategyDescription": "REAL description of launch strategy for ${request.moleculeName} (keep it short)",
        "lifecycleManagementDescription": "REAL description of lifecycle management for ${request.moleculeName} (keep it short)",
        "riskAssessmentDescription": "REAL description of risk assessment for ${request.moleculeName} (keep it short)",
        "opportunityAnalysisDescription": "REAL description of opportunity analysis for ${request.moleculeName} (keep it short)",
        
        "timelineToMarket": "REAL timeline to market for ${request.moleculeName} (provide ONLY the number with 'yrs', e.g., '3yrs' or '22yrs')",
        "regulatoryPlanDescription": "REAL regulatory plan description for ${request.moleculeName} (keep it short)",
        "breakthroughDesignationLabel": "REAL breakthrough designation label for ${request.moleculeName} (provide short label like 'Breakthrough Designation' or 'Fast Track')",
        "orphanDrugStatusLabel": "REAL orphan drug status label for ${request.moleculeName} (provide short label like 'Orphan Drug Status' or 'Priority Review')",
        "fastTrackPathwayDescription": "REAL fast-track pathway description for ${request.moleculeName} (keep it short)",
        
        "sources": [
          {
            "title": "REAL clinical trial publication title for ${request.moleculeName}",
            "url": "REAL URL like https://pubmed.ncbi.nlm.nih.gov/12345678/",
            "description": "REAL description of clinical trial results for ${request.moleculeName} (keep it short)",
            "type": "Clinical Trial"
          },
          {
            "title": "REAL market research report title for ${request.selectedIndications.join(', ')}",
            "url": "REAL URL like https://www.marketresearch.com/report/123456",
            "description": "REAL description of market size and growth projections (keep it short)",
            "type": "Market Research"
          },
          {
            "title": "REAL regulatory guidance document title for ${request.moleculeName}",
            "url": "REAL URL like https://www.fda.gov/drugs/guidance-compliance-regulatory-information/123456",
            "description": "REAL description of FDA guidance and regulatory pathway (keep it short)",
            "type": "Regulatory"
          },
          {
            "title": "REAL competitive intelligence report title for ${request.moleculeName}",
            "url": "REAL URL like https://www.competitiveintelligence.com/report/123456",
            "description": "REAL description of competitive landscape analysis (keep it short)",
            "type": "Competitive Intelligence"
          }
        ]
      }
    }
    
    FINAL REQUIREMENTS - KEEP IT SHORT:
    1. Replace ALL "REAL" placeholders with actual, specific content
    2. Keep responses SHORT and CONCISE like the hardcoded examples
    3. Only the mechanism description should be detailed (2-3 sentences)
    4. All other fields should be 1-2 sentences maximum
    5. Generate actual FDA designations, regulatory pathways, and approval status
    6. Create real competitor names and companies
    7. Provide actual market size numbers and percentages
    8. Generate real clinical trial data and safety profiles
    9. Create actual sources with real titles and URLs
    10. Replace all "Dynamic" and "Comprehensive" titles with specific titles
    11. Generate actual timeline estimates and regulatory pathways
    12. Provide real financial projections with specific dollar amounts
    13. Create actual market precedents and competitive advantages
    14. Generate real approval status and development phases
    15. CRITICAL: For tumorInhibition and survivalImprovement fields, provide ONLY the number (e.g., "87" not "87%")
    16. CRITICAL: For FDA designation scores, provide ONLY the number (e.g., "22" not "22/25")
    17. CRITICAL: Provide 4-5 REAL direct competitors with detailed information for each
    18. CRITICAL: Use DIFFERENT status types for competitors: 'Approved', 'Development', 'Regional', 'Phase III', 'Phase II', 'Phase I', 'Preclinical' - DO NOT use the same status for all competitors
    `;
  }
}

export default GPTService; 