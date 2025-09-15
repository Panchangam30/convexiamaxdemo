import { useState, useEffect } from 'react'
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Area } from 'recharts'
import { LuPill } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";
import { LuMicroscope } from "react-icons/lu";
import { LuBeaker } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import Input from './Input';

// Type definitions for analysis data
interface MarketAnalysisData {
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
  contentSections?: {
    compoundProfileTitle?: string;
    compoundProfileDescription?: string;
    targetProteinDescription?: string;
    pathwayDescription?: string;
    mechanismDescription?: string;
    indicationDescription?: string;
    strategyDescription?: string;
    marketSizeTitle?: string;
    marketSizeDescription?: string;
    marketGrowthDescription?: string;
    competitiveTitle?: string;
    competitiveDescription?: string;
    competitorAnalysisDescription?: string;
    financialTitle?: string;
    financialDescription?: string;
    revenueForecastDescription?: string;
    loeImpactDescription?: string;
    strategicTitle?: string;
    strategicDescription?: string;
    tailwindDescription?: string;
    fdaDescription?: string;
    guidanceDescription?: string;
    policyDescription?: string;
    advocacyDescription?: string;
    marketGrowthChartTitle?: string;
    marketGrowthChartDescription?: string;
    revenueChartTitle?: string;
    revenueChartDescription?: string;
    loeChartTitle?: string;
    loeChartDescription?: string;
    fdaCardDescription?: string;
    guidanceCardDescription?: string;
    policyCardDescription?: string;
    advocacyCardDescription?: string;
    
    // Additional dynamic content fields
    marketGrowthSubtitle?: string;
    revenueForecastSubtitle?: string;
    loeImpactSubtitle?: string;
    survivalImprovementDescription?: string;
    breakthroughTherapyStatus?: string;
    fastTrackStatus?: string;
    orphanDrugStatus?: string;
    priorityReviewStatus?: string;
    oncologyEndpointsStatus?: string;
    biomarkerStrategyStatus?: string;
    clinicalTrialDesignStatus?: string;
    regulatoryPathwayStatus?: string;
    orphanDrugIncentiveStatus?: string;
    acceleratedApprovalStatus?: string;
    priorityReviewVoucherStatus?: string;
    patientAccessStatus?: string;
    physicianEducationStatus?: string;
    payerEngagementStatus?: string;
    regulatoryAdvocacyStatus?: string;
    marketPrecedentDescription?: string;
    competitiveAdvantageDescription?: string;
    clinicalEfficacyDescription?: string;
    safetyProfileDescription?: string;
    marketAccessDescription?: string;
    pricingStrategyDescription?: string;
    reimbursementDescription?: string;
    launchStrategyDescription?: string;
    lifecycleManagementDescription?: string;
    riskAssessmentDescription?: string;
    opportunityAnalysisDescription?: string;
    
    // Regulatory and Timeline Fields
    timelineToMarket?: string;
    regulatoryPlanDescription?: string;
    breakthroughDesignationLabel?: string;
    orphanDrugStatusLabel?: string;
    fastTrackPathwayDescription?: string;
    
    sources?: Array<{
      title: string;
      url: string;
      description: string;
      type: string;
    }>;
  };
}

const LoadingPage = ({ progress }: { progress: number }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Generating Market Analysis</h2>
      <p className="text-gray-600 mb-4">
        {progress < 33.33 ? "Analyzing compound profile..." :
         progress < 66.67 ? "Modeling financial projections..." :
         "Finalizing competitive landscape..."}
      </p>
      <div className="w-64 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{Math.round(progress)}% complete</p>
    </div>
  </div>
);

const ResultsPage = ({ showCompoundProfile, setShowCompoundProfile, activeTab, setActiveTab, showModal, setShowModal, selectedDrug, setSelectedDrug, modalTab, setModalTab, activeSubTab, setActiveSubTab, showPipelineModal, setShowPipelineModal, showSourcesModal, setShowSourcesModal, showCompetitiveLandscape, setShowCompetitiveLandscape, showMarketSizeModal, setShowMarketSizeModal, showPeakSalesModal, setShowPeakSalesModal, showCAGRModal, setShowCAGRModal, showMarketSourcesModal, setShowMarketSourcesModal, isMarketSizeExpanded, setIsMarketSizeExpanded, isFinancialProjectionsExpanded, setIsFinancialProjectionsExpanded, showPricingModal, setShowPricingModal, showPatentModal, setShowPatentModal, showMethodModal, setShowMethodModal, showIPStrategyModal, setShowIPStrategyModal, analysisData }: { 
  showCompoundProfile: boolean, 
  setShowCompoundProfile: (show: boolean) => void,
  activeTab: string,
  setActiveTab: (tab: string) => void,
  showModal: boolean,
  setShowModal: (show: boolean) => void,
  selectedDrug: string,
  setSelectedDrug: (drug: string) => void,
  modalTab: string,
  setModalTab: (tab: string) => void,
  activeSubTab: string,
  setActiveSubTab: (tab: string) => void,
  showPipelineModal: boolean,
  setShowPipelineModal: (show: boolean) => void,
  showSourcesModal: boolean,
  setShowSourcesModal: (show: boolean) => void,
  showCompetitiveLandscape: boolean,
  setShowCompetitiveLandscape: (show: boolean) => void,
  showMarketSizeModal: boolean,
  setShowMarketSizeModal: (show: boolean) => void,
  showPeakSalesModal: boolean,
  setShowPeakSalesModal: (show: boolean) => void,
  showCAGRModal: boolean,
  setShowCAGRModal: (show: boolean) => void,
  showMarketSourcesModal: boolean,
  setShowMarketSourcesModal: (show: boolean) => void,
  isMarketSizeExpanded: boolean,
  setIsMarketSizeExpanded: (expanded: boolean) => void,
  isFinancialProjectionsExpanded: boolean,
  setIsFinancialProjectionsExpanded: (expanded: boolean) => void,
  showPricingModal: boolean,
  setShowPricingModal: (show: boolean) => void,
  showPatentModal: boolean,
  setShowPatentModal: (show: boolean) => void,
  showMethodModal: boolean,
  setShowMethodModal: (show: boolean) => void,
  showIPStrategyModal: boolean,
  setShowIPStrategyModal: (show: boolean) => void,
  analysisData: MarketAnalysisData | null
}) => {
  // Helper function to safely get data from analysis
  const getAnalysisData = (path: string, fallback: string = 'Data not available'): string => {
    if (!analysisData) return fallback;
    
    const keys = path.split('.');
    let value: any = analysisData;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return fallback;
      }
    }
    
    return typeof value === 'string' ? value : fallback;
  };

  // Helper function to check if content should be blurred
  const shouldBlur = (path: string, fallback: string = 'Data not available'): boolean => {
    const value = getAnalysisData(path, fallback);
    return value === fallback || value === 'Data not available';
  };

  // Helper function to generate market growth chart data
  const getMarketGrowthData = () => {
    return [
      { year: '2024', marketSize: 1200, penetration: 8 },
      { year: '2025', marketSize: 1350, penetration: 12 },
      { year: '2026', marketSize: 1520, penetration: 16 },
      { year: '2027', marketSize: 1710, penetration: 20 },
      { year: '2028', marketSize: 1920, penetration: 24 },
      { year: '2029', marketSize: 2150, penetration: 26 },
      { year: '2030', marketSize: 2400, penetration: 28 }
    ];
  };

  // Helper function to generate revenue forecasting chart data
  const getRevenueForecastData = () => {
    return [
      { year: '2024', usRevenue: 50, exUsRevenue: 20, marketShare: 5, grossToNet: 85 },
      { year: '2025', usRevenue: 120, exUsRevenue: 80, marketShare: 8, grossToNet: 82 },
      { year: '2026', usRevenue: 250, exUsRevenue: 180, marketShare: 12, grossToNet: 80 },
      { year: '2027', usRevenue: 420, exUsRevenue: 320, marketShare: 16, grossToNet: 78 },
      { year: '2028', usRevenue: 650, exUsRevenue: 520, marketShare: 20, grossToNet: 76 },
      { year: '2029', usRevenue: 920, exUsRevenue: 780, marketShare: 24, grossToNet: 74 },
      { year: '2030', usRevenue: 1250, exUsRevenue: 1100, marketShare: 28, grossToNet: 72 },
      { year: '2031', usRevenue: 1200, exUsRevenue: 1050, marketShare: 26, grossToNet: 70 },
      { year: '2032', usRevenue: 1100, exUsRevenue: 950, marketShare: 24, grossToNet: 68 },
      { year: '2033', usRevenue: 1000, exUsRevenue: 850, marketShare: 22, grossToNet: 66 }
    ];
  };

  // Helper function to generate LOE impact chart data
  const getLOEImpactData = () => {
    return [
      { year: '2024', revenue: 70, erosion: 0 },
      { year: '2025', revenue: 200, erosion: 0 },
      { year: '2026', revenue: 430, erosion: 0 },
      { year: '2027', revenue: 740, erosion: 0 },
      { year: '2028', revenue: 1170, erosion: 0 },
      { year: '2029', revenue: 1700, erosion: 0 },
      { year: '2030', revenue: 2350, erosion: 0 },
      { year: '2031', revenue: 2250, erosion: 100 },
      { year: '2032', revenue: 2050, erosion: 200 },
      { year: '2033', revenue: 1850, erosion: 300 }
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <LuMicroscope className="w-8 h-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">Market Analysis Results</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowSourcesModal(true)}
                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <LuDatabase className="w-4 h-4" />
                <span>Sources</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6">
          <nav className="flex space-x-8">
            <button
              className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'compound-profile' ? 'border-blue-600' : 'border-transparent'}`}
              onClick={() => setActiveTab('compound-profile')}
            >
              <LuPill className={`w-5 h-5 mr-2 ${activeTab === 'compound-profile' ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`font-medium ${activeTab === 'compound-profile' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Compound Profile</span>
            </button>
            <button
              className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'market-size' ? 'border-blue-600' : 'border-transparent'}`}
              onClick={() => setActiveTab('market-size')}
            >
              <LuTrendingUp className={`w-5 h-5 mr-2 ${activeTab === 'market-size' ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`font-medium ${activeTab === 'market-size' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Market Size</span>
            </button>
            <button
              className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'competitive-landscape' ? 'border-blue-600' : 'border-transparent'}`}
              onClick={() => setActiveTab('competitive-landscape')}
            >
              <LuChartColumn className={`w-5 h-5 mr-2 ${activeTab === 'competitive-landscape' ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`font-medium ${activeTab === 'competitive-landscape' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Competitive Landscape</span>
            </button>
            <button
              className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'financial-projections' ? 'border-blue-600' : 'border-transparent'}`}
              onClick={() => setActiveTab('financial-projections')}
            >
              <LuDollarSign className={`w-5 h-5 mr-2 ${activeTab === 'financial-projections' ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`font-medium ${activeTab === 'financial-projections' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Financial Projections</span>
            </button>
            <button
              className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'strategic-fit' ? 'border-blue-600' : 'border-transparent'}`}
              onClick={() => setActiveTab('strategic-fit')}
            >
              <LuZap className={`w-5 h-5 mr-2 ${activeTab === 'strategic-fit' ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`font-medium ${activeTab === 'strategic-fit' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Strategic Fit</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Content Area - This would contain all the results pages */}
      <div className="p-6">
        <p className="text-gray-600">Results content would go here...</p>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)
  const [formData, setFormData] = useState({
    moleculeName: '',
    internalCode: '',
    drugClass: '',
    modality: '',
    mechanismOfAction: '',
    developmentPhase: '',
    targetLaunchYear: '',
    routeOfAdministration: '',
    clinicalTrials: '',
    additionalNotes: ''
  })
  const [selectedIndications, setSelectedIndications] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [modalityOpen, setModalityOpen] = useState(false)
  const [phaseOpen, setPhaseOpen] = useState(false)
  const [routeOpen, setRouteOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedDrug, setSelectedDrug] = useState('')
  const [modalTab, setModalTab] = useState('overview')
  const [activeTab, setActiveTab] = useState('compound-profile')
  const [activeSubTab, setActiveSubTab] = useState('direct-competitors')
  const [showPipelineModal, setShowPipelineModal] = useState(false)
  const [showSourcesModal, setShowSourcesModal] = useState(false)
  const [showCompetitiveLandscape, setShowCompetitiveLandscape] = useState(true)
  const [showMarketSizeModal, setShowMarketSizeModal] = useState(false)
  const [showPeakSalesModal, setShowPeakSalesModal] = useState(false)
  const [showCAGRModal, setShowCAGRModal] = useState(false)
  const [showMarketSourcesModal, setShowMarketSourcesModal] = useState(false)
  const [isMarketSizeExpanded, setIsMarketSizeExpanded] = useState(true)
  const [isFinancialProjectionsExpanded, setIsFinancialProjectionsExpanded] = useState(true)
  const [showPricingModal, setShowPricingModal] = useState(false)
  const [showPatentModal, setShowPatentModal] = useState(false)
  const [showMethodModal, setShowMethodModal] = useState(false)
  const [showIPStrategyModal, setShowIPStrategyModal] = useState(false)
  const [analysisData, setAnalysisData] = useState<MarketAnalysisData | null>(null)

  // Animate progress when loading
  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            // After reaching 100%, show results page
            setTimeout(() => {
              setIsLoading(false)
              setShowResults(true)
            }, 1000) // Wait 1 second after reaching 100% before transitioning
            return 100
          }
          return prev + 1
        })
      }, 100) // Update every 100ms for smooth animation

      return () => clearInterval(interval)
    }
  }, [isLoading])

  const indications = [
    'NSCLC', 'Breast Cancer', 'Colorectal Cancer', 'Melanoma', 'Prostate Cancer',
    'Ovarian Cancer', 'Pancreatic Cancer', 'Glioblastoma', 'Leukemia', 'Lymphoma',
    'Multiple Myeloma', 'Other Solid Tumors'
  ]

  const regions = [
    'United States', 'European Union', 'Japan', 'China', 'Canada',
    'Australia', 'South Korea', 'Brazil', 'Rest of World'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleIndicationToggle = (indication: string) => {
    setSelectedIndications(prev => 
      prev.includes(indication) 
        ? prev.filter(i => i !== indication)
        : [...prev, indication]
    )
  }

  const handleRegionToggle = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, region]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsLoading(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    // Backend is temporarily disabled - using mock data instead
    console.log('Backend disabled - using mock data for UI demonstration')
    
    // Simulate processing delay
    setTimeout(() => {
      setSubmitStatus('success')
      setSubmitMessage('Market analysis completed successfully! (Mock data - backend disabled)')
      
      // Create mock analysis data based on form input
      const mockAnalysisData: MarketAnalysisData = {
        moleculeName: formData.moleculeName || 'Demo Molecule',
        compoundProfile: {
          targetProtein: 'EGFR',
          pathway: 'Tyrosine Kinase',
          mechanismOfAction: formData.mechanismOfAction || 'Inhibitor',
          primaryIndication: selectedIndications[0] || 'NSCLC',
          developmentStrategy: 'First-in-class',
          preclinicalFindings: {
            ic50Mutant: '15 nM',
            ic50WildType: '25 nM',
            tumorInhibition: '85%',
            survivalImprovement: '2.3x'
          },
          clinicalData: {
            phase1Results: 'Well tolerated, MTD established',
            phase2Results: 'Promising efficacy signals',
            safetyProfile: 'Favorable safety profile'
          }
        },
        marketSize: {
          totalMarketSize: '$12.5B',
          targetMarketSize: '$8.2B',
          growthRate: '12.3%',
          keyDrivers: ['Aging population', 'Improved diagnostics', 'Targeted therapies']
        },
        competitiveLandscape: {
          directCompetitors: [
            {
              name: 'Competitor A',
              company: 'Pharma Corp',
              status: 'Phase 3',
              differentiation: 'Different mechanism',
              mechanismOfAction: 'Monoclonal antibody',
              marketValue: '$2.1B',
              latestMilestone: 'NDA submitted',
              target: 'EGFR',
              patients: '45K'
            }
          ],
          indirectCompetitors: [
            {
              name: 'Competitor B',
              company: 'Biotech Inc',
              status: 'Phase 2',
              differentiation: 'Combination therapy'
            }
          ]
        },
        financialProjections: {
          peakSales: '$3.826B',
          cagr: '18.5%',
          revenueForecast: [
            { year: 2024, revenue: 0.1 },
            { year: 2025, revenue: 0.3 },
            { year: 2026, revenue: 0.8 },
            { year: 2027, revenue: 1.5 },
            { year: 2028, revenue: 2.2 },
            { year: 2029, revenue: 3.1 },
            { year: 2030, revenue: 3.826 },
            { year: 2031, revenue: 3.7 },
            { year: 2032, revenue: 3.4 },
            { year: 2033, revenue: 3.0 }
          ]
        },
        strategicFit: {
          tailwindScore: '85/100',
          fdaDesignations: 'Breakthrough Therapy, Fast Track',
          guidanceDocuments: 'Oncology Endpoints Guidance',
          policyIncentives: 'Orphan Drug Designation',
          advocacyActivity: 'Patient advocacy engagement',
          marketPrecedent: 'Similar compounds approved'
        }
      }
      
      // Store the mock analysis data
      setAnalysisData(mockAnalysisData)
      localStorage.setItem('marketAnalysisData', JSON.stringify(mockAnalysisData))
      
      // Reset form after successful submission
      setFormData({
        moleculeName: '',
        internalCode: '',
        drugClass: '',
        modality: '',
        mechanismOfAction: '',
        developmentPhase: '',
        targetLaunchYear: '',
        routeOfAdministration: '',
        clinicalTrials: '',
        additionalNotes: ''
      })
      setSelectedIndications([])
      setSelectedRegions([])
      
      // Show results immediately
      setIsLoading(false)
      setShowResults(true)
      setIsSubmitting(false)
    }, 2000) // 2 second delay to simulate processing
  }

  // Loading Component
  if (isLoading) {
    return <LoadingPage progress={progress} />
  }

  if (showResults) {
    return <ResultsPage 
      showCompoundProfile={showCompoundProfile}
      setShowCompoundProfile={setShowCompoundProfile}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      showModal={showModal}
      setShowModal={setShowModal}
      selectedDrug={selectedDrug}
      setSelectedDrug={setSelectedDrug}
      modalTab={modalTab}
      setModalTab={setModalTab}
      activeSubTab={activeSubTab}
      setActiveSubTab={setActiveSubTab}
      showPipelineModal={showPipelineModal}
      setShowPipelineModal={setShowPipelineModal}
      showSourcesModal={showSourcesModal}
      setShowSourcesModal={setShowSourcesModal}
      showCompetitiveLandscape={showCompetitiveLandscape}
      setShowCompetitiveLandscape={setShowCompetitiveLandscape}
      showMarketSizeModal={showMarketSizeModal}
      setShowMarketSizeModal={setShowMarketSizeModal}
      showPeakSalesModal={showPeakSalesModal}
      setShowPeakSalesModal={setShowPeakSalesModal}
      showCAGRModal={showCAGRModal}
      setShowCAGRModal={setShowCAGRModal}
      showMarketSourcesModal={showMarketSourcesModal}
      setShowMarketSourcesModal={setShowMarketSourcesModal}
      isMarketSizeExpanded={isMarketSizeExpanded}
      setIsMarketSizeExpanded={setIsMarketSizeExpanded}
      isFinancialProjectionsExpanded={isFinancialProjectionsExpanded}
      setIsFinancialProjectionsExpanded={setIsFinancialProjectionsExpanded}
      showPricingModal={showPricingModal}
      setShowPricingModal={setShowPricingModal}
      showPatentModal={showPatentModal}
      setShowPatentModal={setShowPatentModal}
      showMethodModal={showMethodModal}
      setShowMethodModal={setShowMethodModal}
      showIPStrategyModal={showIPStrategyModal}
      setShowIPStrategyModal={setShowIPStrategyModal}
      analysisData={analysisData}
    />
  }

  return (
    <Input
      formData={formData}
      selectedIndications={selectedIndications}
      selectedRegions={selectedRegions}
      submitStatus={submitStatus}
      submitMessage={submitMessage}
      isSubmitting={isSubmitting}
      modalityOpen={modalityOpen}
      phaseOpen={phaseOpen}
      routeOpen={routeOpen}
      handleInputChange={handleInputChange}
      handleIndicationToggle={handleIndicationToggle}
      handleRegionToggle={handleRegionToggle}
      handleSubmit={handleSubmit}
      setModalityOpen={setModalityOpen}
      setPhaseOpen={setPhaseOpen}
      setRouteOpen={setRouteOpen}
      indications={indications}
      regions={regions}
    />
  );
}

export default App;
