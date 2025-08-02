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
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-lg">
      {/* Top Icon */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full spinning-border">
          {progress < 16.67 ? (
            <LuDatabase className="w-8 h-8 text-blue-600 icon-glow" />
          ) : progress < 33.33 ? (
            <LuChartColumn className="w-8 h-8 text-blue-600 icon-glow" />
          ) : progress < 50 ? (
            <LuTarget className="w-8 h-8 text-blue-600 icon-glow" />
          ) : progress < 66.67 ? (
            <LuTrendingUp className="w-8 h-8 text-blue-600 icon-glow" />
          ) : progress < 83.33 ? (
            <LuZap className="w-8 h-8 text-blue-600 icon-glow" />
          ) : (
            <LuMicroscope className="w-8 h-8 text-blue-600 icon-glow" />
          )}
        </div>
      </div>

      {/* Main Title */}
      <h2 className="mb-2 text-2xl font-bold text-center text-gray-900">
        Generating Analysis
      </h2>

      {/* Subtitle */}
      <p className="mb-6 text-center text-gray-600">
        Processing market intelligence and competitive data
      </p>

      {/* Current Step */}
      <p className="mb-4 text-sm text-center text-black">
        {progress < 16.67 ? "Gathering competitive intelligence..." : 
         progress < 33.33 ? "Analyzing market dynamics..." : 
         progress < 50 ? "Assessing regulatory pathways..." :
         progress < 66.67 ? "Modeling financial projections..." :
         progress < 83.33 ? "Calculating strategic fit scores..." :
         "Finalizing Analysis..."}
      </p>

      {/* Progress Bar */}
      <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
        <div className="h-2 transition-all duration-100 bg-black rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Percentage */}
      <p className="mb-6 text-xs text-center text-gray-500">
        {progress}% complete
      </p>

      {/* Step Indicators */}
      <div className="flex justify-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${progress >= 0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${progress >= 16.67 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${progress >= 33.33 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${progress >= 50 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${progress >= 66.67 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${progress >= 83.33 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  </div>
);

const ResultsPage = ({ showCompoundProfile, setShowCompoundProfile, activeTab, setActiveTab, showModal, setShowModal, selectedDrug, setSelectedDrug, modalTab, setModalTab, activeSubTab, setActiveSubTab, showPipelineModal, setShowPipelineModal, showSourcesModal, setShowSourcesModal, showCompetitiveLandscape, setShowCompetitiveLandscape, showMarketSizeModal, setShowMarketSizeModal, showPeakSalesModal, setShowPeakSalesModal, showCAGRModal, setShowCAGRModal, showMarketSourcesModal, setShowMarketSourcesModal, isMarketSizeExpanded, setIsMarketSizeExpanded, showPricingModal, setShowPricingModal, showPatentModal, setShowPatentModal, showMethodModal, setShowMethodModal, showIPStrategyModal, setShowIPStrategyModal, analysisData }: { 
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
    let value: unknown = analysisData;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return fallback;
      }
    }
    return String(value) || fallback;
  };

  // Helper function to check if data should be blurred
  const shouldBlur = (path: string, fallback: string = 'Data not available'): boolean => {
    if (!analysisData) return true;
    const keys = path.split('.');
    let value: unknown = analysisData;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return true; // Blur if path doesn't exist
      }
    }
    // Only blur if we have no value or if it's exactly the fallback
    return !value || String(value).trim() === '' || String(value) === fallback;
  };

  // Helper function to generate market growth chart data
  const getMarketGrowthData = () => {
    if (!analysisData?.financialProjections?.revenueForecast) {
      return [
        { year: '2024', marketSize: 1500, penetration: 12 },
        { year: '2025', marketSize: 1700, penetration: 15 },
        { year: '2026', marketSize: 2000, penetration: 18 },
        { year: '2027', marketSize: 2200, penetration: 21 },
        { year: '2028', marketSize: 2350, penetration: 24 },
        { year: '2029', marketSize: 2700, penetration: 27 },
        { year: '2030', marketSize: 2850, penetration: 27 }
      ];
    }

    const revenueData = analysisData.financialProjections.revenueForecast;
    const peakRevenue = Math.max(...revenueData.map(d => d.revenue));
    const marketSizeMultiplier = 3.5; // Market size is typically 3-4x peak revenue

    return revenueData.map((item) => ({
      year: item.year.toString(),
      marketSize: Math.round((item.revenue / peakRevenue) * 3000 * marketSizeMultiplier),
      penetration: Math.round((item.revenue / peakRevenue) * 30)
    }));
  };

  // Helper function to generate revenue forecasting chart data
  const getRevenueForecastData = () => {
    if (!analysisData?.financialProjections?.revenueForecast) {
      return [
        { year: '2024', usRevenue: 0, exUsRevenue: 0, marketShare: 0, grossToNet: 0 },
        { year: '2025', usRevenue: 0, exUsRevenue: 0, marketShare: 0, grossToNet: 0 },
        { year: '2026', usRevenue: 0, exUsRevenue: 0, marketShare: 0, grossToNet: 0 },
        { year: '2027', usRevenue: 500, exUsRevenue: 100, marketShare: 5, grossToNet: 20 },
        { year: '2028', usRevenue: 1800, exUsRevenue: 600, marketShare: 10, grossToNet: 30 },
        { year: '2029', usRevenue: 2700, exUsRevenue: 1200, marketShare: 15, grossToNet: 35 },
        { year: '2030', usRevenue: 2900, exUsRevenue: 1500, marketShare: 17, grossToNet: 38 },
        { year: '2031', usRevenue: 2700, exUsRevenue: 1400, marketShare: 16, grossToNet: 39 },
        { year: '2032', usRevenue: 2500, exUsRevenue: 1200, marketShare: 16, grossToNet: 40 },
        { year: '2033', usRevenue: 1800, exUsRevenue: 900, marketShare: 14, grossToNet: 40 }
      ];
    }

    const revenueData = analysisData.financialProjections.revenueForecast;
    const peakRevenue = Math.max(...revenueData.map(d => d.revenue));

    return revenueData.map((item, index) => {
      const usRevenue = Math.round(item.revenue * 0.65); // 65% US revenue
      const exUsRevenue = Math.round(item.revenue * 0.35); // 35% ex-US revenue
      const marketShare = Math.round((item.revenue / peakRevenue) * 20);
      const grossToNet = Math.round(20 + (index * 2)); // Increasing over time

      return {
        year: item.year.toString(),
        usRevenue,
        exUsRevenue,
        marketShare,
        grossToNet
      };
    });
  };

  // Helper function to generate LOE impact chart data
  const getLOEImpactData = () => {
    if (!analysisData?.financialProjections?.revenueForecast) {
      return [
        { year: '2030', revenue: 4500, loeImpact: 0 },
        { year: '2031', revenue: 4100, loeImpact: 200 },
        { year: '2032', revenue: 3700, loeImpact: 500 },
        { year: '2033', revenue: 3200, loeImpact: 800 },
        { year: '2034', revenue: 2500, loeImpact: 1200 },
        { year: '2035', revenue: 2000, loeImpact: 1500 }
      ];
    }

    const revenueData = analysisData.financialProjections.revenueForecast;
    const peakRevenue = Math.max(...revenueData.map(d => d.revenue));
    const peakYear = revenueData.find(d => d.revenue === peakRevenue)?.year || 2030;

    // Generate LOE impact data starting from peak year
    const loeData = [];
    for (let i = 0; i < 6; i++) {
      const year = peakYear + i;
      const baseRevenue = peakRevenue * Math.pow(0.9, i); // Gradual decline
      const loeImpact = peakRevenue * 0.1 * (i + 1); // Increasing LOE impact
      const finalRevenue = Math.max(baseRevenue - loeImpact, 0);

      loeData.push({
        year: year.toString(),
        revenue: Math.round(finalRevenue),
        loeImpact: Math.round(loeImpact)
      });
    }

    return loeData;
  };

  return (
  <div className="min-h-screen bg-gray-50">
    {/* Top Header */}
    <div className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-8">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">Market Analysis Agent</h1>
            <p className="text-base text-gray-600">Simulating Commercial Viability for Drug Asset Evaluation</p>
          </div>
          <div className="pl-8 border-l border-gray-300">
            <p className={`text-sm font-bold text-gray-600 ${shouldBlur('moleculeName', 'Unnamed Molecule') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('moleculeName', 'Unnamed Molecule')}
            </p>
            <p className="text-sm text-gray-600">Phase:</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
            Edit Molecule Info
          </button>
          <button className="flex items-center px-4 py-2 text-sm transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CSV
          </button>
          <button className="flex items-center px-4 py-2 text-sm transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Excel
          </button>
          <button className="flex items-center px-4 py-2 text-sm transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF
          </button>
        </div>
      </div>
    </div>

    {/* Navigation Tabs */}
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 mx-auto max-w-7xl">
        <nav className="flex justify-start space-x-8 overflow-x-auto border-b border-gray-200">
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'compound-profile' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('compound-profile')}
          >
            <LuTarget className="w-5 h-5 mr-2 text-blue-600" />
            <span className={`font-medium ${activeTab === 'compound-profile' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Compound Profile</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'competitive-landscape' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('competitive-landscape')}
          >
            <LuChartColumn className="w-5 h-5 mr-2 text-gray-500" />
            <span className={`font-medium ${activeTab === 'competitive-landscape' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Competitive Landscape</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'market-size' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('market-size')}
          >
            <LuTrendingUp className="w-5 h-5 mr-2 text-gray-500" />
            <span className={`font-medium ${activeTab === 'market-size' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Market Size</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'pricing-access' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('pricing-access')}
          >
            <LuDollarSign className="w-5 h-5 mr-2 text-gray-500" />
            <span className={`font-medium ${activeTab === 'pricing-access' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Pricing & Access</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${(activeTab as string) === 'incentives-regulation' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('incentives-regulation')}
          >
            <LuShield className="w-5 h-5 mr-2 text-gray-500" />
            <span className={`font-medium ${(activeTab as string) === 'incentives-regulation' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Incentives & Regulation</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${(activeTab as string) === 'ip-position' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('ip-position')}
          >
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className={`font-medium ${(activeTab as string) === 'ip-position' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>IP Position</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'financial-projections' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('financial-projections')}
          >
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className={`font-medium ${activeTab === 'financial-projections' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Financial Projections</span>
          </div>
          <div 
            className={`flex items-center py-4 border-b-2 whitespace-nowrap cursor-pointer ${activeTab === 'strategic-fit' ? 'border-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('strategic-fit')}
          >
            <LuZap className="w-5 h-5 mr-2 text-gray-500" />
            <span className={`font-medium ${activeTab === 'strategic-fit' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Strategic Fit</span>
          </div>
        </nav>
      </div>
    </div>

    {/* Main Content */}
    {activeTab === 'compound-profile' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl font-bold text-gray-900 ${shouldBlur('contentSections.compoundProfileTitle', 'Compound Profile') ? 'blur-sm opacity-50' : ''}`}>
            {getAnalysisData('contentSections.compoundProfileTitle', 'Compound Profile')}
          </h2>
          <button 
            onClick={() => setShowCompoundProfile(!showCompoundProfile)}
            className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50 hover:text-blue-600"
          >
            {showCompoundProfile ? (
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>

        {showCompoundProfile && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Card 1: Mechanism of Action */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Mechanism of Action</h3>
              <div className="space-y-4">
                                  <div>
                    <p className="mb-2 text-sm font-bold text-gray-600">Target Protein</p>
                    <p className={`text-sm font-bold text-gray-900 ${shouldBlur('compoundProfile.targetProtein', 'EGFR L858R/T790M') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('compoundProfile.targetProtein', 'EGFR L858R/T790M')}
                    </p>
                    <p className={`text-xs text-gray-600 mt-1 ${shouldBlur('contentSections.targetProteinDescription', 'EGFR and its mutations play a pivotal role in NSCLC pathology.') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('contentSections.targetProteinDescription', 'EGFR and its mutations play a pivotal role in NSCLC pathology.')}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold text-gray-600">Pathway</p>
                    <p className={`text-sm font-bold text-gray-900 ${shouldBlur('compoundProfile.pathway', 'EGFR/PI3K/AKT') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('compoundProfile.pathway', 'EGFR/PI3K/AKT')}
                    </p>
                    <p className={`text-xs text-gray-600 mt-1 ${shouldBlur('contentSections.pathwayDescription', 'Osimertinib\'s interference with the EGFR signaling pathway underscores the drug\'s potent anti-tumor activity.') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('contentSections.pathwayDescription', 'Osimertinib\'s interference with the EGFR signaling pathway underscores the drug\'s potent anti-tumor activity.')}
                    </p>
                  </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Description</p>
                  <p className={`text-sm text-gray-900 ${shouldBlur('contentSections.mechanismDescription', 'Third-generation EGFR tyrosine kinase inhibitor designed to selectively target T790M resistance mutations while sparing wild-type EGFR, reducing skin and GI toxicity.') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.mechanismDescription', 'Third-generation EGFR tyrosine kinase inhibitor designed to selectively target T790M resistance mutations while sparing wild-type EGFR, reducing skin and GI toxicity.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Key Preclinical Findings */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Key Preclinical Findings</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-bold text-gray-600">IC50 (Mutant)</p>
                    <p className={`text-lg font-bold text-green-600 ${shouldBlur('compoundProfile.preclinicalFindings.ic50Mutant', '2.5 nM') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('compoundProfile.preclinicalFindings.ic50Mutant', '2.5 nM')}
            </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-600">IC50 (Wild-type)</p>
                    <p className={`text-lg font-bold text-gray-900 ${shouldBlur('compoundProfile.preclinicalFindings.ic50WildType', '180 nM') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('compoundProfile.preclinicalFindings.ic50WildType', '180 nM')}
            </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-sm font-bold text-gray-600">Tumor Inhibition (in vivo)</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-4 bg-gray-200 rounded-full">
                      <div className={`h-4 bg-black rounded-full transition-all duration-300 ${shouldBlur('compoundProfile.preclinicalFindings.tumorInhibition', '87%') ? 'blur-sm opacity-50' : ''}`} 
                           style={{ width: `${getAnalysisData('compoundProfile.preclinicalFindings.tumorInhibition', '87')}%` }}></div>
                    </div>
                    <span className={`text-sm font-bold text-gray-900 ${shouldBlur('compoundProfile.preclinicalFindings.tumorInhibition', '87%') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('compoundProfile.preclinicalFindings.tumorInhibition', '87')}%
            </span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-sm font-bold text-gray-600">Survival Improvement</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-4 bg-gray-200 rounded-full">
                      <div className={`h-4 bg-black rounded-full transition-all duration-300 ${shouldBlur('compoundProfile.preclinicalFindings.survivalImprovement', '65%') ? 'blur-sm opacity-50' : ''}`} 
                           style={{ width: `${getAnalysisData('compoundProfile.preclinicalFindings.survivalImprovement', '65')}%` }}></div>
                    </div>
                    <span className={`text-sm font-bold text-gray-900 ${shouldBlur('compoundProfile.preclinicalFindings.survivalImprovement', '65%') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('compoundProfile.preclinicalFindings.survivalImprovement', '65')}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Development Strategy */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Development Strategy</h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Primary Indication</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {getAnalysisData('compoundProfile.primaryIndication', 'NSCLC w/ T790M mutation')
                      .split(',')
                      .map((indication: string, index: number) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 text-xs font-bold text-gray-700 bg-gray-100 rounded-full ${shouldBlur('compoundProfile.primaryIndication', 'NSCLC w/ T790M mutation') ? 'blur-sm opacity-50' : ''}`}
                        >
                          {indication.trim()}
                        </span>
                      ))}
                  </div>
                                      <p className={`pb-4 text-sm text-gray-500 border-b border-gray-200 ${shouldBlur('compoundProfile.developmentStrategy', 'Targeting second-line treatment after first-generation EGFR TKI failure') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('compoundProfile.developmentStrategy', 'Targeting second-line treatment after first-generation EGFR TKI failure')}
                    </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Regulatory Plan</p>
                  <div className="flex mb-2 space-x-2">
                    <span className={`px-2 py-1 text-xs text-gray-700 bg-transparent border border-gray-300 rounded-full ${shouldBlur('contentSections.breakthroughDesignationLabel', 'Breakthrough Designation') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('contentSections.breakthroughDesignationLabel', 'Breakthrough Designation')}
                    </span>
                    <span className={`px-2 py-1 text-xs text-gray-700 bg-transparent border border-gray-300 rounded-full ${shouldBlur('contentSections.orphanDrugStatusLabel', 'Orphan Drug Status') ? 'blur-sm opacity-50' : ''}`}>
                      {getAnalysisData('contentSections.orphanDrugStatusLabel', 'Orphan Drug Status')}
                    </span>
                  </div>
                  <p className={`text-sm text-gray-600 ${shouldBlur('contentSections.fastTrackPathwayDescription', 'Fast-track pathway with potential for accelerated approval based on ORR endpoint') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.fastTrackPathwayDescription', 'Fast-track pathway with potential for accelerated approval based on ORR endpoint')}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Timeline to Market</p>
                  <p className={`text-lg font-bold text-blue-600 ${shouldBlur('contentSections.timelineToMarket', '3.5 years') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.timelineToMarket', '3.5 years')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )}

    {activeTab === 'competitive-landscape' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Competitive Landscape</h2>
          <button 
            onClick={() => setShowCompetitiveLandscape(!showCompetitiveLandscape)}
            className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50 hover:text-blue-600"
          >
            {showCompetitiveLandscape ? (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
        
        {showCompetitiveLandscape && (
          <>
            {/* Sub-navigation */}
            <div className="flex items-center mb-6">
          <div className="flex-1 p-1 mr-2 bg-gray-100 rounded-md">
            <div className="flex">
              <button 
                onClick={() => setActiveSubTab('direct-competitors')}
                className={`flex-1 px-4 py-2 mr-1 text-sm font-medium rounded-md ${
                  activeSubTab === 'direct-competitors' 
                    ? 'text-gray-900 bg-white border border-gray-300 shadow-sm' 
                    : 'text-gray-600 bg-transparent'
                }`}
              >
                Direct Competitors
              </button>
              <button 
                onClick={() => setActiveSubTab('deal-activity')}
                className={`flex-1 px-4 py-2 mx-1 text-sm font-medium rounded-md ${
                  activeSubTab === 'deal-activity' 
                    ? 'text-gray-900 bg-white border border-gray-300 shadow-sm' 
                    : 'text-gray-600 bg-transparent'
                }`}
              >
                Deal Activity
              </button>
              <button 
                onClick={() => setActiveSubTab('pipeline-analysis')}
                className={`flex-1 px-4 py-2 ml-1 text-sm font-medium rounded-md ${
                  activeSubTab === 'pipeline-analysis' 
                    ? 'text-gray-900 bg-white border border-gray-300 shadow-sm' 
                    : 'text-gray-600 bg-transparent'
                }`}
              >
                Pipeline Analysis
              </button>
            </div>
          </div>
          <button 
            onClick={() => setShowSourcesModal(true)}
            className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-700 bg-transparent border border-black rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
          >
            <LuDatabase className="w-4 h-4" />
            <span>Sources (4)</span>
          </button>
        </div>

        {/* Content based on active sub-tab */}
        {activeSubTab === 'direct-competitors' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {analysisData?.competitiveLandscape?.directCompetitors?.map((competitor, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.name`, 'Competitor Name') ? 'blur-sm opacity-50' : ''}`}>
                      {competitor.name || 'Competitor Name'}
                    </h3>
                    <p className={`text-sm text-gray-600 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.company`, 'Company Name') ? 'blur-sm opacity-50' : ''}`}>
                      {competitor.company || 'Company Name'}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.status`, 'Status') ? 'blur-sm opacity-50' : ''} ${
                    (competitor.status || '').toLowerCase().includes('approved') 
                      ? 'text-white bg-black' 
                      : (competitor.status || '').toLowerCase().includes('development') 
                        ? 'text-black border border-black bg-transparent'
                        : (competitor.status || '').toLowerCase().includes('regional') 
                          ? 'text-black bg-gray-200'
                          : 'text-black border border-black bg-transparent'
                  }`}>
                    {competitor.status || 'Status'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">MoA:</span>
                      <div className={`text-sm font-medium text-gray-900 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.mechanismOfAction`, 'Mechanism') ? 'blur-sm opacity-50' : ''}`}>
                        {competitor.mechanismOfAction || 'Mechanism'}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Market Value:</span>
                      <div className={`text-sm font-bold text-green-600 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.marketValue`, 'Market Value') ? 'blur-sm opacity-50' : ''}`}>
                        {competitor.marketValue || 'Market Value'}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Latest Milestone:</span>
                      <div className={`text-sm font-medium text-gray-900 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.latestMilestone`, 'Milestone') ? 'blur-sm opacity-50' : ''}`}>
                        {competitor.latestMilestone || 'Milestone'}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Target:</span>
                      <div className={`text-sm font-medium text-gray-900 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.target`, 'Target') ? 'blur-sm opacity-50' : ''}`}>
                        {competitor.target || 'Target'}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Patients:</span>
                      <div className={`text-sm font-medium text-gray-900 ${shouldBlur(`competitiveLandscape.directCompetitors.${index}.patients`, 'Patients') ? 'blur-sm opacity-50' : ''}`}>
                        {competitor.patients || 'Patients'}
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSelectedDrug(competitor.name || 'Competitor')
                    setShowModal(true)
                  }}
                  className="w-full px-4 py-2 text-sm text-black transition-colors duration-200 bg-transparent border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  View Detailed Analysis
                </button>
              </div>
            ))}
          </div>
        )}

        {activeSubTab === 'deal-activity' && (
          <div className="space-y-4">
            {/* Roche Deal */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Roche</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$1.8B</div>
                      <div className="text-sm text-gray-600">Q2 2024</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div>
                      <span className="text-sm text-gray-600">Drug/Indication:</span>
                      <div className="text-sm font-medium text-gray-900">TGF-β inhibitor • NSCLC combination</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Stage at Acquisition:</span>
                      <div className="text-sm font-medium text-gray-900">Phase II</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Strategic Rationale:</span>
                      <div className="text-sm font-medium text-gray-900">Combo potential with PD-L1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Merck Deal */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Merck</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$2.1B</div>
                      <div className="text-sm text-gray-600">Q1 2024</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div>
                      <span className="text-sm text-gray-600">Drug/Indication:</span>
                      <div className="text-sm font-medium text-gray-900">KRAS G12C inhibitor • NSCLC</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Stage at Acquisition:</span>
                      <div className="text-sm font-medium text-gray-900">Phase III</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Strategic Rationale:</span>
                      <div className="text-sm font-medium text-gray-900">Resistance mechanism coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bristol Myers Deal */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Bristol Myers</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$950M</div>
                      <div className="text-sm text-gray-600">Q4 2023</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div>
                      <span className="text-sm text-gray-600">Drug/Indication:</span>
                      <div className="text-sm font-medium text-gray-900">EGFR degrader • EGFR+ tumors</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Stage at Acquisition:</span>
                      <div className="text-sm font-medium text-gray-900">Phase II</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Strategic Rationale:</span>
                      <div className="text-sm font-medium text-gray-900">Next-gen EGFR targeting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pfizer Deal */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Pfizer</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$1.3B</div>
                      <div className="text-sm text-gray-600">Q3 2023</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div>
                      <span className="text-sm text-gray-600">Drug/Indication:</span>
                      <div className="text-sm font-medium text-gray-900">CDK4/6 inhibitor • NSCLC combination</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Stage at Acquisition:</span>
                      <div className="text-sm font-medium text-gray-900">Phase II</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Strategic Rationale:</span>
                      <div className="text-sm font-medium text-gray-900">Cell cycle targeting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Commentary */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Market Commentary</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Recent M&A activity suggests strong appetite for EGFR-targeting assets, with premium valuations for differentiated mechanisms. Combination potential and resistance coverage driving strategic interest. Average deal multiples: 8-12x peak sales for Phase II+ assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'pipeline-analysis' && (
          <div className="space-y-6">
            {/* Pipeline Crowding Analysis */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Pipeline Crowding Analysis</h3>
                
                {/* NSCLC Pipeline Density */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">NSCLC Pipeline Density</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-600">35%</span>
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <button 
                        onClick={() => setShowPipelineModal(true)}
                        className="text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-2 mb-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-black rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Moderate crowding - manageable competition</p>
                </div>

                {/* Strategic Fit Rank */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Strategic Fit Rank</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">78%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 mb-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-black rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600">High alignment with buyer portfolios</p>
                </div>
              </div>

              {/* White Space Opportunities */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">White Space Opportunities</h3>
                
                {/* IP Coverage */}
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-medium text-gray-700">IP Coverage</h4>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 text-sm text-gray-900 bg-gray-100 rounded-full">Composition</span>
                    <span className="px-3 py-1 text-sm text-gray-900 bg-transparent border border-black rounded-full">FTO Clear</span>
                  </div>
                </div>

                {/* Data Gaps */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">Data Gaps</h4>
                  <p className="text-sm text-gray-600">Limited PubMed coverage, sparse clinical trial data in ChEMBL.</p>
                </div>
              </div>
            </div>

            {/* Competitive Threats */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Competitive Threats</h3>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Emerging Modalities */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">Emerging Modalities</h4>
                  <div className="text-sm text-gray-500">
                    {/* Content placeholder */}
                  </div>
                </div>

                {/* Biosimilar Timeline */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">Biosimilar Timeline</h4>
                  <div className="text-sm text-gray-500">
                    {/* Content placeholder */}
                  </div>
                </div>

                {/* Regulatory Headwinds */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">Regulatory Headwinds</h4>
                  <div className="text-sm text-gray-500">
                    {/* Content placeholder */}
                  </div>
                </div>
              </div>
            </div>

            {/* Extended Pipeline Details */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Extended Pipeline Details</h3>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* PRECLINICAL CANDIDATES */}
                  <div>
                    <h4 className="mb-3 text-sm font-bold text-gray-700 uppercase">PRECLINICAL CANDIDATES</h4>
                    <div className="text-sm text-gray-300 blur-sm">
                      <div className="mb-2">• EGFR-TKI combination candidates</div>
                      <div className="mb-2">• Novel resistance mechanisms</div>
                      <div className="mb-2">• Next-generation inhibitors</div>
                    </div>
                  </div>

                  {/* GEOGRAPHIC EXPANSION */}
                  <div>
                    <h4 className="mb-3 text-sm font-bold text-gray-700 uppercase">GEOGRAPHIC EXPANSION</h4>
                    <div className="text-sm text-gray-300 blur-sm">
                      <p>Primary focus on <span className="text-blue-600">US and EU markets</span> with planned expansion into Asia-Pacific regions including Japan, China, and South Korea for Phase III development.</p>
                    </div>
                  </div>

                  {/* COMBINATION TRIALS */}
                  <div>
                    <h4 className="mb-3 text-sm font-bold text-gray-700 uppercase">COMBINATION TRIALS</h4>
                    <div className="text-sm text-gray-300 blur-sm">
                      <div className="mb-2">• EGFR + PD-L1 combination</div>
                      <div className="mb-2">• EGFR + chemotherapy backbone</div>
                      <div className="mb-2">• EGFR + anti-angiogenic agents</div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* CLINICAL PROGRAMS */}
                  <div>
                    <h4 className="mb-3 text-sm font-bold text-gray-700 uppercase">CLINICAL PROGRAMS</h4>
                    <div className="text-sm text-gray-300 blur-sm">
                      <div className="mb-2">• Phase I: Safety and PK studies</div>
                      <div className="mb-2">• Phase II: Efficacy in T790M+ NSCLC</div>
                      <div className="mb-2">• Phase III: Pivotal registration trials</div>
                    </div>
                  </div>

                  {/* MECHANISM OF ACTION MAPPING */}
                  <div>
                    <h4 className="mb-3 text-sm font-bold text-gray-700 uppercase">MECHANISM OF ACTION MAPPING</h4>
                    <div className="text-sm text-gray-300 blur-sm">
                      <p>Comprehensive analysis of EGFR signaling pathways, resistance mechanisms, and cross-talk with other receptor tyrosine kinases including HER2, HER3, and MET amplification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
          </>
        )}
      </div>
    )}

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/70 to-black/70" onClick={() => setShowModal(false)}>
                  <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <LuTarget className="w-6 h-6 text-black" />
                <h2 className="text-xl font-bold text-gray-900">{selectedDrug} - Competitive Intelligence</h2>
              </div>
              <p className="text-sm text-gray-600">
                Comprehensive analysis of {(() => {
                  const competitor = analysisData?.competitiveLandscape?.directCompetitors?.find(c => c.name === selectedDrug);
                  return competitor?.company || 'Company';
                })()}'s {selectedDrug}.
              </p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="text-gray-400 transition-colors duration-200 hover:text-red-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Navigation */}
          <div className="px-6 py-4">
            <div className="p-1 bg-gray-100 rounded-md">
              <div className="flex justify-between">
                <button 
                  onClick={() => setModalTab('overview')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md mr-1 ${
                    modalTab === 'overview' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'bg-transparent text-gray-600'
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setModalTab('trial-data')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md mx-1 ${
                    modalTab === 'trial-data' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'bg-transparent text-gray-600'
                  }`}
                >
                  Trial Data
                </button>
                <button 
                  onClick={() => setModalTab('differentiators')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md mx-1 ${
                    modalTab === 'differentiators' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'bg-transparent text-gray-600'
                  }`}
                >
                  Differentiators
                </button>
                <button 
                  onClick={() => setModalTab('deal-terms')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md ml-1 ${
                    modalTab === 'deal-terms' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'bg-transparent text-gray-600'
                  }`}
                >
                  Deal Terms
                </button>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {modalTab === 'overview' && (
              <div>
                <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Market Position */}
              <div className="p-4 border border-gray-300 rounded-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Market Position</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Market Value:</span>
                    <div className="text-sm font-bold text-green-600">
                      {(() => {
                        const competitor = analysisData?.competitiveLandscape?.directCompetitors?.find(c => c.name === selectedDrug);
                        return competitor?.marketValue || 'TBD';
                      })()}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Patient Base:</span>
                    <div className="text-sm font-medium text-gray-900">
                      {(() => {
                        const competitor = analysisData?.competitiveLandscape?.directCompetitors?.find(c => c.name === selectedDrug);
                        return competitor?.patients || 'TBD';
                      })()}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Status:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {(() => {
                          const competitor = analysisData?.competitiveLandscape?.directCompetitors?.find(c => c.name === selectedDrug);
                          return competitor?.status || 'development';
                        })()}
                      </span>
                      {selectedDrug === 'Lazertinib' && (
                        <span className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full">development</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mechanism */}
              <div className="p-4 border border-gray-300 rounded-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Mechanism</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">MoA:</span>
                    <div className="text-sm font-medium text-gray-900">
                      {(() => {
                        const competitor = analysisData?.competitiveLandscape?.directCompetitors?.find(c => c.name === selectedDrug);
                        return competitor?.mechanismOfAction || 'Mechanism of Action';
                      })()}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Target:</span>
                    <div className="text-sm font-medium text-gray-900">
                      {(() => {
                        const competitor = analysisData?.competitiveLandscape?.directCompetitors?.find(c => c.name === selectedDrug);
                        return competitor?.target || 'Target';
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="mb-6 border-b border-gray-300"></div>

            {/* Data Sources */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Data Sources</h3>
              <div className="flex flex-wrap gap-4">
                {analysisData?.contentSections?.sources?.slice(0, 3).map((source, index) => (
                  <button 
                    key={index}
                    onClick={() => window.open(source.url, '_blank')}
                    className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                  >
                    <span>{source.title}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                )) || (
                  <>
                    <button 
                      onClick={() => window.open('https://www.biocentury.com/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                    >
                      <span>BioCentury Intelligence</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                    >
                      <span>ClinicalTrials.gov</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
              </div>
            )}

            {modalTab === 'trial-data' && (
              <div>
                {/* Clinical Trial Information */}
                <div className="p-4 mb-8 border border-gray-300 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <LuFileText className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Clinical Trial Information</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Phase:</span>
                        <div className="text-sm font-medium text-gray-900">
                          Phase III (FLAURA)
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Enrollment:</span>
                        <div className="text-sm font-medium text-gray-900">
                          556 patients
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Primary Endpoint:</span>
                        <div className="text-sm font-medium text-gray-900">
                          Progression-free survival
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Trial ID:</span>
                        <div className="text-sm font-medium text-gray-900">
                          NCT02296125
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Status:</span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full">
                            Completed
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Est. Completion:</span>
                        <div className="text-sm font-medium text-gray-900">
                          Completed 2017
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="mb-6 border-b border-gray-300"></div>

                {/* Data Sources */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Data Sources</h3>
                  <div className="flex flex-wrap gap-4">
                    {analysisData?.contentSections?.sources?.slice(0, 3).map((source, index) => (
                      <button 
                        key={index}
                        onClick={() => window.open(source.url, '_blank')}
                        className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                      >
                        <span>{source.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    )) || (
                      <>
                        <button 
                          onClick={() => window.open('https://www.biocentury.com/', '_blank')}
                          className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                        >
                          <span>BioCentury Intelligence</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                          className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                        >
                          <span>ClinicalTrials.gov</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {modalTab === 'differentiators' && (
              <div>
                {/* Key Differentiators */}
                <div className="p-4 mb-8 border border-gray-300 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <LuTrendingUp className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Key Differentiators</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-900">First-in-class 3rd generation EGFR TKI with T790M selectivity</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-900">Superior CNS penetration vs. earlier generation TKIs</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-900">Improved tolerability profile with reduced skin/GI toxicity</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-900">Established first-line indication in EGFR+ NSCLC</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-900">Strong real-world evidence supporting efficacy</div>
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="mb-6 border-b border-gray-300"></div>

                {/* Data Sources */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Data Sources</h3>
                  <div className="flex flex-wrap gap-4">
                    {analysisData?.contentSections?.sources?.slice(0, 3).map((source, index) => (
                      <button 
                        key={index}
                        onClick={() => window.open(source.url, '_blank')}
                        className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                      >
                        <span>{source.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    )) || (
                      <>
                        <button 
                          onClick={() => window.open('https://www.biocentury.com/', '_blank')}
                          className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                        >
                          <span>BioCentury Intelligence</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                          className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                        >
                          <span>ClinicalTrials.gov</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {modalTab === 'deal-terms' && (
              <div>
                {/* Licensing & Acquisition Terms */}
                <div className="p-4 mb-8 border border-gray-300 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <LuDollarSign className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Licensing & Acquisition Terms</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Total Deal Value:</span>
                        <div className="text-sm font-bold text-green-600">Not applicable (internal development)</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Upfront Payment:</span>
                        <div className="text-sm font-medium text-gray-900">N/A</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Royalty Structure:</span>
                        <div className="text-sm font-medium text-gray-900">N/A</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Deal Date:</span>
                        <div className="text-sm font-medium text-gray-900">Internal AstraZeneca program</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Milestones:</span>
                        <div className="text-sm font-medium text-gray-900">N/A</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="mb-6 border-b border-gray-300"></div>

                {/* Data Sources */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Data Sources</h3>
                  <div className="flex flex-wrap gap-4">
                    {analysisData?.contentSections?.sources?.slice(0, 3).map((source, index) => (
                      <button 
                        key={index}
                        onClick={() => window.open(source.url, '_blank')}
                        className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                      >
                        <span>{source.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    )) || (
                      <>
                        <button 
                          onClick={() => window.open('https://www.biocentury.com/', '_blank')}
                          className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                        >
                          <span>BioCentury Intelligence</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                          className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors duration-200 bg-transparent border border-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 rounded-2xl"
                        >
                          <span>ClinicalTrials.gov</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}

    {/* Sources Modal */}
    {showSourcesModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50" onClick={() => setShowSourcesModal(false)}>
        <div className="h-full overflow-y-auto bg-white shadow-xl w-96" onClick={(e) => e.stopPropagation()}>
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Data Sources</h2>
              <p className="text-sm text-gray-600">Sources used for Competitive Landscape analysis</p>
            </div>
            <button 
              onClick={() => setShowSourcesModal(false)}
              className="text-gray-400 transition-colors duration-200 hover:text-red-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-4">
            {/* Clarivate Cortellis */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <LuDatabase className="w-6 h-6 mt-1 text-gray-600" />
                <div className="flex-1">
                  <div className="flex items-center mb-2 space-x-2">
                    <h3 className="font-semibold text-gray-900">Clarivate Cortellis</h3>
                    <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">Database</span>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">Competitive intelligence and pipeline tracking</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Updated: Dec 2024</span>
                    <button 
                      onClick={() => window.open('https://www.clarivate.com/cortellis/', '_blank')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ClinicalTrials.gov */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <LuFileText className="w-6 h-6 mt-1 text-gray-600" />
                <div className="flex-1">
                  <div className="flex items-center mb-2 space-x-2">
                    <h3 className="font-semibold text-gray-900">ClinicalTrials.gov</h3>
                    <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">Regulatory</span>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">Clinical trial registry and status updates</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Updated: Dec 2024</span>
                    <button 
                      onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BioCentury Intelligence */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <LuDatabase className="w-6 h-6 mt-1 text-gray-600" />
                <div className="flex-1">
                  <div className="flex items-center mb-2 space-x-2">
                    <h3 className="font-semibold text-gray-900">BioCentury Intelligence</h3>
                    <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">Database</span>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">Deal tracking and competitive analysis</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Updated: Dec 2024</span>
                    <button 
                      onClick={() => window.open('https://www.biocentury.com/', '_blank')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PubMed Literature Review */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <LuFileText className="w-6 h-6 mt-1 text-gray-600" />
                <div className="flex-1">
                  <div className="flex items-center mb-2 space-x-2">
                    <h3 className="font-semibold text-gray-900">PubMed Literature Review</h3>
                    <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">Literature</span>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">Scientific literature and clinical data</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Updated: Dec 2024</span>
                    <button 
                      onClick={() => window.open('https://pubmed.ncbi.nlm.nih.gov/', '_blank')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {activeTab === 'market-size' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Market Size & Growth</h2>
                            <button 
            onClick={() => setIsMarketSizeExpanded(!isMarketSizeExpanded)}
            className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50 hover:text-blue-600"
          >
                    <svg className={`w-6 h-6 text-gray-600 transition-transform ${isMarketSizeExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Top Section */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-bold text-gray-900">Market Size Index</h3>
                <svg className="w-4 h-4 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <button 
                  onClick={() => setShowMarketSizeModal(true)}
                  className="ml-2 text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
                >
                  View Details
                </button>
              </div>
              <p className="text-sm text-gray-600">Overall market attractiveness score</p>
            </div>
            <div className="text-right">
              <div className={`mb-1 text-3xl font-bold text-green-600 ${shouldBlur('marketSize.totalMarketSize', '78%') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('marketSize.totalMarketSize', '78%')}
            </div>
              <div className="mb-3 text-sm font-medium text-gray-900">High Potential</div>
                                    <button 
                        onClick={() => setShowMarketSourcesModal(true)}
                        className="flex items-center px-3 py-2 text-sm font-medium text-black transition-colors duration-200 border border-black rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                      >
                        <LuDatabase className="w-4 h-4 mr-2" />
                        Sources (4)
                      </button>
            </div>
          </div>

          {/* Bottom Section - Four Key Metrics */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {/* Peak Sales Estimate */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className={`text-2xl font-bold text-blue-600 ${shouldBlur('financialProjections.peakSales', '$2.51B') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('financialProjections.peakSales', '$2.51B')}
            </div>
                <svg className="w-4 h-4 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <button 
                  onClick={() => setShowPeakSalesModal(true)}
                  className="ml-2 text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
                >
                  View Details
                </button>
              </div>
              <div className="text-sm font-medium text-gray-900">Peak Sales Estimate</div>
            </div>

            {/* CAGR (Specific Value) */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className={`text-2xl font-bold text-green-600 ${shouldBlur('financialProjections.cagr', '8.2%') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('financialProjections.cagr', '8.2%')}
            </div>
                <svg className="w-4 h-4 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <button 
                  onClick={() => setShowCAGRModal(true)}
                  className="ml-2 text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
                >
                  View Details
                </button>
              </div>
              <div className="text-sm font-medium text-gray-900">CAGR</div>
            </div>

            {/* CAGR (Range) */}
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-purple-600">8-12%</div>
              <div className="text-sm font-medium text-gray-900">CAGR</div>
            </div>

            {/* Peak Share */}
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-orange-600">27%</div>
              <div className="text-sm font-medium text-gray-900">Peak Share</div>
            </div>
          </div>
        </div>

        {/* Market Growth Projection and Key Market Assumptions */}
        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
          {/* Left Panel: Market Growth Projection */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
                              <div className={`text-2xl font-semibold leading-none tracking-tight ${shouldBlur('contentSections.marketGrowthChartTitle', 'Market Growth Projection') ? 'blur-sm opacity-50' : ''}`}>
                  {getAnalysisData('contentSections.marketGrowthChartTitle', 'Market Growth Projection')}
                </div>
                              <div className={`text-sm text-muted-foreground ${shouldBlur('contentSections.marketGrowthSubtitle', 'Market size and penetration trends 2024-2030') ? 'blur-sm opacity-50' : ''}`}>
                  {getAnalysisData('contentSections.marketGrowthSubtitle', 'Market size and penetration trends 2024-2030')}
                </div>
            </div>
            <div className="p-6 pt-0">
              <div 
                data-chart="chart-market-growth" 
                className="flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none h-[300px]"
              >
                <style>
                  {`
                    [data-chart=chart-market-growth] {
                      --color-marketSize: #e76e50;
                      --color-cagr: #10b981;
                      --color-penetration: #1f2937;
                    }
                    
                    .dark [data-chart=chart-market-growth] {
                      --color-marketSize: #e76e50;
                      --color-cagr: #10b981;
                      --color-penetration: #1f2937;
                    }
                  `}
                </style>
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                  <ComposedChart
                    data={getMarketGrowthData()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid 
                      horizontal={true}
                      vertical={false}
                      stroke="#ccc"
                      strokeWidth={1}
                    />
                    <CartesianGrid 
                      horizontal={false}
                      vertical={true}
                      strokeDasharray="3 3"
                      stroke="#ccc"
                      strokeWidth={1}
                    />
                    <XAxis 
                      dataKey="year" 
                      stroke="#666"
                      tick={{ fill: '#666', fontSize: 12 }}
                    />
                    <YAxis 
                      yAxisId="left"
                      stroke="#666"
                      tick={{ fill: '#666', fontSize: 12 }}
                      domain={[0, 3000]}
                      ticks={[0, 750, 1500, 2250, 3000]}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      stroke="#666"
                      tick={{ fill: '#666', fontSize: 12 }}
                      domain={[0, 28]}
                      ticks={[0, 7, 14, 21, 28]}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                                                         <div className="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs shadow-xl">
                              <div className="font-medium">{label}</div>
                              <div className="grid gap-1.5">
                                <div className="flex w-full flex-wrap gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground items-center">
                                  <div className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] h-2.5 w-2.5" style={{'--color-bg': 'var(--color-marketSize)', '--color-border': 'var(--color-marketSize)'} as React.CSSProperties}></div>
                                  <div className="flex items-center justify-between flex-1 leading-none">
                                    <div className="grid gap-1.5">
                                      <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm bg-[#e76e50]"></div>
                                        <span className="text-muted-foreground">Market Size ($M)</span>
                                      </div>
                                    </div>
                                    <span className="font-mono font-medium tabular-nums text-foreground">{payload[0]?.value}</span>
                                  </div>
                                </div>
                                <div className="flex w-full flex-wrap gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground items-center">
                                  <div className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] h-2.5 w-2.5" style={{'--color-bg': 'var(--color-penetration)', '--color-border': 'var(--color-penetration)'} as React.CSSProperties}></div>
                                  <div className="flex items-center justify-between flex-1 leading-none">
                                    <div className="grid gap-1.5">
                                      <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm bg-[#1f2937]"></div>
                                        <span className="text-muted-foreground">Penetration (%)</span>
                                      </div>
                                    </div>
                                    <span className="font-mono font-medium tabular-nums text-foreground">{payload[1]?.value}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      yAxisId="left"
                      dataKey="marketSize" 
                      fill="var(--color-marketSize)"
                      radius={0}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="penetration" 
                      stroke="var(--color-penetration)" 
                      strokeWidth={2}
                      fill="none"
                      dot={{ 
                        fill: '#fff', 
                        stroke: 'var(--color-penetration)', 
                        strokeWidth: 2, 
                        r: 3 
                      }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Panel: Key Market Assumptions */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Key Market Assumptions</h3>
            
            <div className="space-y-4">
              {/* Pricing (Annual) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Pricing (Annual)</span>
                  <span className="text-sm font-bold text-gray-900">$100K/patient</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-black rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>

              {/* Peak Penetration */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Peak Penetration</span>
                  <span className="text-sm font-bold text-gray-900">27%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-black rounded-full" style={{width: '27%'}}></div>
                </div>
              </div>

              {/* Unmet Need Index */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Unmet Need Index</span>
                  <span className="text-sm font-bold text-gray-900">8.5/10</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-black rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              {/* Patient Population */}
              <div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-700">Patient Population</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">US</span>
                    <span className="text-sm font-bold text-gray-900">12,500 patients</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">EU5</span>
                    <span className="text-sm font-bold text-gray-900">8,200 patients</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Other</span>
                    <span className="text-sm font-bold text-gray-900">5,300 patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Growth Drivers */}
        <div className="mt-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="mb-6 text-lg font-bold text-gray-900">Market Growth Drivers</h3>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Positive Drivers */}
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">Positive Drivers</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Increasing EGFR testing rates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Earlier diagnosis and treatment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Expanding treatment guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Improved patient outcomes</span>
                  </li>
                </ul>
              </div>

              {/* Risk Factors */}
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">Risk Factors</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Competitive pressure on pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Biosimilar entry timeline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Regulatory approval delays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Market access challenges</span>
                  </li>
                </ul>
              </div>

              {/* Key Uncertainties */}
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">Key Uncertainties</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Combination therapy adoption</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Emerging resistance patterns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Healthcare policy changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Novel modality disruption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Market Size Index Modal */}
    {showMarketSizeModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowMarketSizeModal(false)}>
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Modal Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-bold text-gray-900">Market Size Index</h2>
                  <span className="px-2 py-0.5 text-sm font-medium text-black bg-transparent border border-black rounded-full">78%</span>
                </div>
                <button 
                  onClick={() => setShowMarketSizeModal(false)}
                  className="text-gray-400 transition-colors duration-200 hover:text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Detailed breakdown of assumptions, methodology, and sources
              </p>
            </div>

            {/* Key Assumptions */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Key Assumptions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Peak market penetration of 27% based on comparable TKI launches
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Annual pricing of $100K aligned with current SOC
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Patient population growth of 3-5% annually
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Treatment duration of 18 months median
                </li>
              </ul>
            </div>

            {/* Calculation Method */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Calculation Method</h3>
              <div className="p-4 rounded-lg bg-gray-50">
                <p className="font-mono text-sm text-gray-700">
                  Index = (Peak Sales Potential × Market Access × Competitive Position) / 100
                </p>
              </div>
            </div>

            {/* AI-Generated Estimate */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">AI-Generated Estimate</h3>
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <p className="text-sm text-blue-700">
                  Generated using fuzzy matching against 15 comparable EGFR TKI launches, weighted by indication overlap and competitive landscape similarity
                </p>
              </div>
            </div>

            {/* Data Sources */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Data Sources</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://www.evaluate.com/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <span className="flex-1 text-left text-gray-700">EvaluatePharma</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://www.iqvia.com/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <span className="flex-1 text-left text-gray-700">IQVIA Market Research</span>
                </button>
                <button className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Manual Input</span>
                  <span className="flex-1 text-left text-gray-700">Internal Analysis</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Peak Sales Estimate Modal */}
    {showPeakSalesModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowPeakSalesModal(false)}>
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Modal Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-bold text-gray-900">Peak Sales Estimate</h2>
                  <span className="px-2 py-0.5 text-sm font-medium text-black bg-transparent border border-black rounded-full">2.51 B USD</span>
                </div>
                <button 
                  onClick={() => setShowPeakSalesModal(false)}
                  className="text-gray-400 transition-colors duration-200 hover:text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Detailed breakdown of assumptions, methodology, and sources
              </p>
            </div>

            {/* Key Assumptions */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Key Assumptions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Peak market share of 27% in year 4-5
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Blended global pricing of $156K annually
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Patient population of 26K at peak
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Treatment persistence rate of 85%
                </li>
              </ul>
            </div>

            {/* Calculation Method */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Calculation Method</h3>
              <div className="p-4 rounded-lg bg-gray-50">
                <p className="font-mono text-sm text-gray-700">
                  Peak Sales = Patient Population × Market Share × Annual Price × Persistence Rate
                </p>
              </div>
            </div>

            {/* Data Sources */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Data Sources</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://www.evaluate.com/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <span className="flex-1 text-left text-gray-700">EvaluatePharma</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://www.iqvia.com/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <span className="flex-1 text-left text-gray-700">IQVIA Market Research</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* CAGR Modal */}
    {showCAGRModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowCAGRModal(false)}>
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Modal Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-bold text-gray-900">CAGR</h2>
                  <span className="px-2 py-0.5 text-sm font-medium text-black bg-transparent border border-black rounded-full">8.2%</span>
                </div>
                <button 
                  onClick={() => setShowCAGRModal(false)}
                  className="text-gray-400 transition-colors duration-200 hover:text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Detailed breakdown of assumptions, methodology, and sources
              </p>
            </div>

            {/* Key Assumptions */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Key Assumptions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  CAGR of 8.2% from 2024 to 2029
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Based on historical TKI market growth
                </li>
              </ul>
            </div>

            {/* Calculation Method */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Calculation Method</h3>
              <div className="p-4 rounded-lg bg-gray-50">
                <p className="font-mono text-sm text-gray-700">
                  CAGR = (End Value / Start Value)^(1 / Number of Years) - 1
                </p>
              </div>
            </div>

            {/* Data Sources */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Data Sources</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://www.evaluate.com/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <span className="flex-1 text-left text-gray-700">EvaluatePharma</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://www.iqvia.com/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="px-2 py-1 mr-3 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <span className="flex-1 text-left text-gray-700">IQVIA Market Research</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Market Sources Sidebar Modal */}
    {showMarketSourcesModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50" onClick={() => setShowMarketSourcesModal(false)}>
        <div className="h-full overflow-y-auto bg-white shadow-xl w-96" onClick={(e) => e.stopPropagation()}>
          {/* Modal Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-900">Data Sources</h2>
                <button 
                  onClick={() => setShowMarketSourcesModal(false)}
                  className="text-gray-400 transition-colors duration-200 hover:text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Sources used for Market Size & Growth analysis.
              </p>
            </div>

            {/* Data Sources List */}
            <div className="space-y-4">
              {/* EvaluatePharma */}
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                  <button 
                    onClick={() => window.open('https://www.evaluate.com/', '_blank')}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Source
                  </button>
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">EvaluatePharma</h3>
                <p className="mb-2 text-sm text-gray-600">Market sizing and competitive intelligence</p>
                <p className="text-xs text-gray-500">Updated: Dec 2024</p>
              </div>

              {/* IQVIA Market Research */}
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Database</span>
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">IQVIA Market Research</h3>
                <p className="mb-2 text-sm text-gray-600">Patient population and treatment patterns</p>
                <p className="text-xs text-gray-500">Updated: Nov 2024</p>
              </div>

              {/* Internal Analysis */}
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Manual Input</span>
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">Internal Analysis</h3>
                <p className="mb-2 text-sm text-gray-600">Company-specific market assumptions and pricing strategy</p>
                <p className="text-xs text-gray-500">Updated: Current</p>
              </div>

              {/* AI Market Model */}
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">AI Generated</span>
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">AI Market Model</h3>
                <p className="mb-2 text-sm text-gray-600">Machine learning-based market projections using comparable asset analysis</p>
                <p className="text-xs text-gray-500">Updated: Current</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Pipeline Crowding Analysis Modal */}
    {showPipelineModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowPipelineModal(false)}>
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Modal Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-bold text-gray-900">Pipeline Crowding Analysis</h2>
                  <span className="px-2 py-0.5 text-sm font-medium text-black bg-transparent border border-black rounded-full">35%</span>
                </div>
                <button 
                  onClick={() => setShowPipelineModal(false)}
                  className="text-gray-400 transition-colors duration-200 hover:text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Detailed breakdown of assumptions, methodology, and sources
              </p>
            </div>

            {/* Key Assumptions */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Key Assumptions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  Based on 47 active NSCLC programs in Phase I-III
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  Weighted by target overlap and MoA similarity
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  Includes both small molecule and biologic approaches
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  Excludes early discovery programs
                </li>
              </ul>
            </div>

            {/* Calculation Method */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Calculation Method</h3>
              <div className="p-4 rounded-lg bg-gray-50">
                <p className="font-mono text-sm text-gray-700">
                  Crowding = (Overlapping Programs / Total Addressable Programs) x Competitive Weight
                </p>
              </div>
            </div>

            {/* AI-Generated Estimate */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">AI-Generated Estimate</h3>
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <p className="text-sm text-blue-700">
                  Calculated using NLP analysis of 200+ pipeline programs, scored for target and indication overlap
                </p>
              </div>
            </div>

            {/* Data Sources */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Data Sources</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://www.clarivate.com/cortellis/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="flex-1 text-left text-gray-700">Database Clarivate Cortellis</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors duration-200 bg-transparent border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  <span className="flex-1 text-left text-gray-700">Regulatory ClinicalTrials.gov</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {activeTab === 'incentives-regulation' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Incentives & Regulatory Opportunities</h2>
        </div>

        {/* Box 1: CNPV/PRV Eligibility Score */}
        <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Main Score Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">CNPV/PRV Eligibility Score</h3>
              <p className="text-sm text-gray-600">Regulatory incentive qualification assessment</p>
            </div>
            <div className="text-right">
              <div className="mb-2 text-4xl font-bold text-blue-600">47%</div>
              <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Moderate Potential</span>
            </div>
          </div>

          {/* Four Metrics Section */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {/* Rare Disease Eligibility */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">85%</div>
              <div className="text-sm font-medium text-gray-900">Rare Disease Eligibility</div>
            </div>

            {/* PRV Eligibility */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">45%</div>
              <div className="text-sm font-medium text-gray-900">PRV Eligibility</div>
            </div>

            {/* National Priority */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">High</div>
              <div className="text-sm font-medium text-gray-900">National Priority</div>
            </div>

            {/* Review Timeline */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">10-12 mo</div>
              <div className="text-sm font-medium text-gray-900">Review Timeline</div>
            </div>
          </div>
        </div>

        {/* Two-column layout for Regulatory Incentives and Timeline */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Box 2: Regulatory Incentives */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Regulatory Incentives</h3>
            <p className="mb-6 text-sm text-gray-600">Available designations and their impact.</p>
            
            <div className="space-y-4">
              {/* Orphan Drug Designation */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Orphan Drug Designation</h4>
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">Eligible</span>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="text-sm font-medium text-gray-900">$3M PDUFA fee waiver</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Exclusivity:</span>
                    <span className="text-sm font-medium text-gray-900">7 years</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-gray-600">Probability:</span>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 h-2 mr-3 bg-gray-200 rounded-full">
                        <div className="h-2 bg-black rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">85%</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Details
                </button>
              </div>

              {/* Priority Review Voucher */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Priority Review Voucher</h4>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Potential</span>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="text-sm font-medium text-gray-900">$100-350M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Exclusivity:</span>
                    <span className="text-sm font-medium text-gray-900">N/A</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-gray-600">Probability:</span>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 h-2 mr-3 bg-gray-200 rounded-full">
                        <div className="h-2 bg-black rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">45%</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Details
                </button>
              </div>

              {/* Breakthrough Designation */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Breakthrough Designation</h4>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Likely</span>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="text-sm font-medium text-gray-900">Expedited review</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Exclusivity:</span>
                    <span className="text-sm font-medium text-gray-900">N/A</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-gray-600">Probability:</span>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 h-2 mr-3 bg-gray-200 rounded-full">
                        <div className="h-2 bg-black rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">65%</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Box 3: Regulatory Timeline */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Regulatory Timeline</h3>
            <p className="mb-6 text-sm text-gray-600">Key milestones and approval pathway.</p>
            
            <div className="space-y-4">
              {/* Timeline Items */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">IND Filing</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Phase I Initiation</div>
                  <div className="text-sm text-gray-600">Q1 2024</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Phase II Initiation</div>
                  <div className="text-sm text-gray-600">Q3 2024</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Breakthrough Designation</div>
                  <div className="text-sm text-gray-600">Q4 2024</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Phase III Initiation</div>
                  <div className="text-sm text-gray-600">Q2 2025</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">NDA Filing</div>
                  <div className="text-sm text-gray-600">Q4 2026</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">FDA Approval</div>
                  <div className="text-sm text-gray-600">Q2 2027</div>
                </div>
              </div>
            </div>
            
            <button className="flex items-center mt-6 text-sm text-blue-600 hover:text-blue-800">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Details
            </button>
          </div>
        </div>

        {/* Spacing between sections */}
        <div className="h-8"></div>

        {/* Policy & Legislative Incentives Section */}
        <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-bold text-gray-900">Policy & Legislative Incentives</h3>
          <p className="mb-6 text-sm text-gray-600">Recent policy changes and their impact on development</p>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* OBBBA 2024 Provisions */}
            <div>
              <h4 className="mb-3 font-bold text-gray-900">OBBBA 2024 Provisions</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">ODD expansion for rare cancer subtypes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">IRA pricing exclusion (7 years)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Enhanced tax credits for pediatric trials</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Accelerated PDUFA fee waivers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Extended market exclusivity periods</span>
                </li>
              </ul>
            </div>

            {/* FDA Modernization */}
            <div>
              <h4 className="mb-3 font-bold text-gray-900">FDA Modernization</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Real-world evidence acceptance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Biomarker-driven approvals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Patient-reported outcomes emphasis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Decentralized trial support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">AI/ML guidance implementation</span>
                </li>
              </ul>
            </div>

            {/* International Harmonization */}
            <div>
              <h4 className="mb-3 font-bold text-gray-900">International Harmonization</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">EMA parallel scientific advice</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">PMDA consultation alignment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Health Canada priority review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Global regulatory strategy coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Mutual recognition agreements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Levers & Impact Section */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="mb-6 text-lg font-bold text-gray-900">Financial Levers & Impact</h3>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* PRV Sale Value */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">$100-350M</div>
              <div className="mb-1 text-sm font-medium text-gray-900">PRV Sale Value</div>
              <div className="text-xs text-gray-600">Based on recent market transactions</div>
            </div>

            {/* Licensing Premium */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">~30%</div>
              <div className="mb-1 text-sm font-medium text-gray-900">Licensing Premium</div>
              <div className="text-xs text-gray-600">Revenue uplift from regulatory advantages</div>
            </div>

            {/* Market Exclusivity */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">7 years</div>
              <div className="mb-1 text-sm font-medium text-gray-900">Market Exclusivity</div>
              <div className="text-xs text-gray-600">Extended protection period</div>
            </div>
          </div>
        </div>
      </div>
    )}

    {activeTab === 'ip-position' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Patent & Exclusivity</h2>
        </div>

        {/* Patent & Exclusivity Summary Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Patent & Exclusivity Summary</h3>
              <p className="text-sm text-gray-600">Intellectual property protection landscape</p>
            </div>
            {/* Years to Expiration - Top Right */}
            <div className="text-right">
              <div className="mb-2 text-3xl font-bold text-orange-600">4</div>
              <div className="text-sm font-medium text-gray-900">Years to Expiration</div>
            </div>
          </div>
          
          {/* Bottom Row - 3 metrics */}
          <div className="grid grid-cols-3 gap-8">
            {/* Exclusivity Years */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm font-medium text-gray-900">Exclusivity Years</div>
            </div>

            {/* Generic Entry Risk */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">45%</div>
              <div className="text-sm font-medium text-gray-900">Generic Entry Risk</div>
            </div>

            {/* Core IP Position */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">Strong</div>
              <div className="text-sm font-medium text-gray-900">Core IP Position</div>
            </div>
          </div>
        </div>

        {/* Two-column layout for Patent Portfolio Analysis and Timeline */}
        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
          {/* Left Section: Patent Portfolio Analysis */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Patent Portfolio Analysis</h3>
            <p className="mb-6 text-sm text-gray-600">Detailed breakdown of IP protection</p>
            
            <div className="space-y-4">
              {/* Composition of Matter Card */}
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Composition of Matter</h4>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Strong</span>
                    <span className="text-sm font-medium text-gray-900">2029</span>
                  </div>
                </div>
                <p className="mb-3 text-sm text-gray-600">Core compound structure and key analogs</p>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Challenge Risk</span>
                    <span className="text-sm font-medium text-gray-900">15%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-black rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <button 
                    onClick={() => setShowPatentModal(!showPatentModal)}
                    className="flex items-center justify-between w-full text-sm text-gray-900 hover:text-blue-600"
                  >
                    <span className="font-medium">Composition of Matter Patent Analysis</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs">2029</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${showPatentModal ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </div>
                
                {/* Expandable Patent Analysis Content */}
                {showPatentModal && (
                  <div className="p-4 mt-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="space-y-4">
                      {/* Key Assumptions */}
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">Key Assumptions:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Core compound patents filed 2022, 20-year term</span>
                          </li>
                        </ul>
                      </div>

                      {/* Data Sources */}
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">Data Sources:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 underline">USPTO Patent Database</span>
                            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">regulatory</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Patent Landscape Analysis</span>
                            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">manual</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Freedom to Operate Study</span>
                            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">manual</span>
                          </div>
                        </div>
                      </div>

                      {/* AI Derivation */}
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">AI Derivation:</h4>
                        <p className="text-sm text-gray-700">Patent strength assessment using AI analysis of 500+ pharmaceutical patent challenges, weighted by patent type and therapeutic area</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Method of Use Card */}
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Method of Use</h4>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 text-xs font-medium text-gray-900 bg-gray-200 rounded-full">Moderate</span>
                    <span className="text-sm font-medium text-gray-900">2030</span>
                  </div>
                </div>
                <p className="mb-3 text-sm text-gray-600">Treatment methods for EGFR+ NSCLC</p>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Challenge Risk</span>
                    <span className="text-sm font-medium text-gray-900">35%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-black rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <button 
                    onClick={() => setShowMethodModal(!showMethodModal)}
                    className="flex items-center justify-between w-full text-sm text-gray-900 hover:text-blue-600"
                  >
                    <span className="font-medium">Method of Use Patent Analysis</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs">2030</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${showMethodModal ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </div>
                
                {/* Expandable Method of Use Patent Analysis Content */}
                {showMethodModal && (
                  <div className="p-4 mt-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="space-y-4">
                      {/* Key Assumptions */}
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">Key Assumptions:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Treatment method patents filed 2023, 20-year term</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">EGFR+ NSCLC indication coverage</span>
                          </li>
                        </ul>
                      </div>

                      {/* Data Sources */}
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">Data Sources:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 underline">USPTO Patent Database</span>
                            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">regulatory</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Clinical Trial Analysis</span>
                            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">manual</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Competitive Landscape Review</span>
                            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">manual</span>
                          </div>
                        </div>
                      </div>

                      {/* AI Derivation */}
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">AI Derivation:</h4>
                        <p className="text-sm text-gray-700">Method of use patent strength evaluation based on 300+ oncology treatment method challenges, considering indication specificity and clinical evidence requirements</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section: Patent Expiration Timeline */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Patent Expiration Timeline</h3>
            <p className="mb-6 text-sm text-gray-600">Visual timeline of IP protection periods</p>
            
            <div className="space-y-4">
              {/* Current Position */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">NOW</div>
                  <div className="text-sm text-gray-600">2024 Current position</div>
                </div>
              </div>
              
              {/* Composition of Matter */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">5</div>
                  <div className="text-sm text-gray-600">2029 Composition of Matter</div>
                </div>
              </div>
              
              {/* Method of Use */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">6</div>
                  <div className="text-sm text-gray-600">2030 Method of Use</div>
                </div>
              </div>
              
              {/* Formulation */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">4</div>
                  <div className="text-sm text-gray-600">2028 Formulation</div>
                </div>
              </div>
              
              {/* Combination */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">7</div>
                  <div className="text-sm text-gray-600">2031 Combination</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IP Protection Strategies Section */}
        <div className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-gray-900">IP Protection Strategies</h3>
          <p className="mb-6 text-sm text-gray-600">Strategic approaches to extend and strengthen IP position</p>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Continuation Filings */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Continuation Filings</h4>
                <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">Ongoing</span>
              </div>
              <p className="text-sm text-gray-600">Extend exclusivity by 2-3 years</p>
            </div>

            {/* Regulatory Exclusivity */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Regulatory Exclusivity</h4>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Upon approval</span>
              </div>
              <p className="text-sm text-gray-600">7-12 years of protection</p>
            </div>

            {/* Trade Secrets */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Trade Secrets</h4>
                <span className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">Immediate</span>
              </div>
              <p className="text-sm text-gray-600">Indefinite protection</p>
            </div>

            {/* Strategic Partnerships */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Strategic Partnerships</h4>
                <span className="px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full">2024-2025</span>
              </div>
              <p className="text-sm text-gray-600">Strengthen overall IP position</p>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations Section */}
        <div className="p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Strategic Recommendations</h3>
          <p className="mb-6 text-sm text-gray-600">Actionable strategies organized by timeframe</p>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Immediate Actions */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-bold text-gray-900">Immediate Actions</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">File continuation patents on new formulations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Conduct comprehensive FTO (Freedom to Operate) analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Establish trade secret protocols</span>
                </li>
              </ul>
            </div>

            {/* Medium-term Strategy */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-bold text-gray-900">Medium-term Strategy</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700"><strong>Develop combination patent portfolio</strong></span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Explore international filing strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Monitor competitor patent activity</span>
                </li>
              </ul>
            </div>

            {/* Long-term Planning */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-bold text-gray-900">Long-term Planning</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Build next-generation compound IP</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Strategic licensing partnerships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Lifecycle management planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property Strategy Section */}
        <div className="p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">IP Strategy Deep Analysis</h3>
            </div>
            <button 
              onClick={() => setShowIPStrategyModal(!showIPStrategyModal)}
              className="flex items-center px-3 py-1 space-x-2 text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              <span>6 years exclusivity</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${showIPStrategyModal ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {showIPStrategyModal && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Key Assumptions */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-bold text-gray-900">Key Assumptions:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Core composition patents expire 2029 (5 years exclusivity)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Method of use patents provide additional 1-2 years protection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Regulatory exclusivity (orphan drug) adds 7 years from approval</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Trade secrets for manufacturing provide indefinite protection</span>
                </li>
              </ul>
            </div>

            {/* Exclusivity Formula */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-bold text-gray-900">Exclusivity Formula:</h4>
              <div className="p-3 bg-white border border-gray-300 rounded-md">
                <p className="font-mono text-sm text-gray-900">
                  Total Exclusivity = MAX(Patent Protection, Regulatory Exclusivity) + Trade Secret Value
                </p>
              </div>
            </div>

            {/* Data Sources */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-bold text-gray-900">Data Sources:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Patent Analytics Platform</span>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">database</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">IP Law Firm Analysis</span>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">manual</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Regulatory Exclusivity Database</span>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">regulatory</span>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    )}



    {activeTab === 'pricing-access' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Pricing & Reimbursement</h2>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="flex-1 p-1 mr-2 bg-gray-100 rounded-md">
              <div className="flex">
                <button 
                  onClick={() => setActiveSubTab('payer-sentiment')}
                  className={`flex-1 px-4 py-2 mr-1 text-sm font-medium rounded-md ${
                    activeSubTab === 'payer-sentiment' 
                      ? 'text-gray-900 bg-white border border-gray-300 shadow-sm' 
                      : 'text-gray-600 bg-transparent'
                  }`}
                >
                  Payer Sentiment
                </button>
                <button 
                  onClick={() => setActiveSubTab('pricing-scenarios')}
                  className={`flex-1 px-4 py-2 ml-1 text-sm font-medium rounded-md ${
                    activeSubTab === 'pricing-scenarios' 
                      ? 'text-gray-900 bg-white border border-gray-300 shadow-sm' 
                      : 'text-gray-600 bg-transparent'
                  }`}
                >
                  Pricing Scenarios
                </button>
              </div>
            </div>
          </div>
        </div>

        {activeSubTab === 'payer-sentiment' && (
          <>
            <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
              {/* Medicare Card */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Medicare</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-600">ICER:</span>
                    <div className="text-sm font-medium text-gray-900">$125K/QALY • Mar 2024</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Willingness to Pay:</span>
                    <div className="text-sm font-bold text-green-600">$150K</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Reimbursement Timeline:</span>
                    <div className="text-sm font-medium text-gray-900">6-12 mo</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Access Barriers:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Prior Authorization</span>
                      <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Step Therapy</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full px-4 py-2 mt-6 text-sm text-black transition-colors duration-200 bg-transparent border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  View Details
                </button>
              </div>

              {/* Commercial Card */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Commercial</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-600">ICER:</span>
                    <div className="text-sm font-medium text-gray-900">$110K/QALY • Feb 2024</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Willingness to Pay:</span>
                    <div className="text-sm font-bold text-green-600">$180K</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Reimbursement Timeline:</span>
                    <div className="text-sm font-medium text-gray-900">3-6 mo</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Access Barriers:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Limited Networks</span>
                      <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Copay Limits</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full px-4 py-2 mt-6 text-sm text-black transition-colors duration-200 bg-transparent border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  View Details
                </button>
              </div>

              {/* Medicaid Card */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Medicaid</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-600">ICER:</span>
                    <div className="text-sm font-medium text-gray-900">$140K/QALY • Jan 2024</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Willingness to Pay:</span>
                    <div className="text-sm font-bold text-green-600">$75K</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Reimbursement Timeline:</span>
                    <div className="text-sm font-medium text-gray-900">12-24 mo</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Access Barriers:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">State Variability</span>
                      <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">Budget Impact</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full px-4 py-2 mt-6 text-sm text-black transition-colors duration-200 bg-transparent border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Market Comparator Benchmarks Table */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">Market Comparator Benchmarks</h3>
                <p className="text-sm text-gray-600">Pricing and access patterns for similar oncology assets</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 font-medium text-left text-gray-900">Drug</th>
                      <th className="px-4 py-3 font-medium text-right text-gray-900">Annual Price</th>
                      <th className="px-4 py-3 font-medium text-left text-gray-900">Indication</th>
                      <th className="px-4 py-3 font-medium text-left text-gray-900">Access Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-900">Osimertinib</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$165K</td>
                      <td className="px-4 py-3 text-gray-900">EGFR+ NSCLC</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Broad</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-900">Alectinib</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$155K</td>
                      <td className="px-4 py-3 text-gray-900">ALK+ NSCLC</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Broad</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-900">Lorlatinib</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$195K</td>
                      <td className="px-4 py-3 text-gray-900">ALK+ NSCLC</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded-full">Limited</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-900">Selpercatinib</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$175K</td>
                      <td className="px-4 py-3 text-gray-900">RET+ NSCLC</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded-full">Moderate</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeSubTab === 'pricing-scenarios' && (
          <>
            <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Pricing Strategy Scenarios</h3>
                <p className="text-sm text-gray-600">Comparative analysis of pricing and access strategies</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 font-medium text-left text-gray-900">Scenario</th>
                      <th className="px-4 py-3 font-medium text-right text-gray-900">US Price</th>
                      <th className="px-4 py-3 font-medium text-right text-gray-900">Ex-US Price</th>
                      <th className="px-4 py-3 font-medium text-right text-gray-900">Gross-to-Net</th>
                      <th className="px-4 py-3 font-medium text-center text-gray-900">Copay Support</th>
                      <th className="px-4 py-3 font-medium text-center text-gray-900">Access Programs</th>
                      <th className="px-4 py-3 font-medium text-center text-gray-900">Generic Entry</th>
                      <th className="px-4 py-3 font-medium text-right text-gray-900">LOE Impact</th>
                      <th className="px-4 py-3 font-medium text-center text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-900">Base Case</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$180K</td>
                      <td className="px-4 py-3 font-bold text-right text-blue-600">$120K</td>
                      <td className="px-4 py-3 text-right text-gray-900">35%</td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Yes</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Yes</span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-900">Yr 8</td>
                      <td className="px-4 py-3 font-bold text-right text-red-600">65%</td>
                      <td className="px-4 py-3 text-center">
                        <button className="px-4 py-2 text-sm font-medium text-black transition-colors duration-200 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300">
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-gray-900">Conservative</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$150K</td>
                      <td className="px-4 py-3 font-bold text-right text-blue-600">$100K</td>
                      <td className="px-4 py-3 text-right text-gray-900">45%</td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Yes</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Yes</span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-900">Yr 6</td>
                      <td className="px-4 py-3 font-bold text-right text-red-600">75%</td>
                      <td className="px-4 py-3 text-center">
                        <button className="px-4 py-2 text-sm font-medium text-black transition-colors duration-200 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300">
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-900">Optimistic</td>
                      <td className="px-4 py-3 font-bold text-right text-green-600">$220K</td>
                      <td className="px-4 py-3 font-bold text-right text-blue-600">$150K</td>
                      <td className="px-4 py-3 text-right text-gray-900">25%</td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Yes</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-3 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-full">No</span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-900">Yr 10</td>
                      <td className="px-4 py-3 font-bold text-right text-red-600">45%</td>
                      <td className="px-4 py-3 text-center">
                        <button className="px-4 py-2 text-sm font-medium text-black transition-colors duration-200 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300">
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rationale Cards */}
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
              {/* Base Case Rationale */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Base Case Rationale</h3>
                <p className="text-sm text-gray-600">Conservative pricing aligned with current SOC, balanced access strategy</p>
              </div>

              {/* Conservative Rationale */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Conservative Rationale</h3>
                <p className="text-sm text-gray-600">Lower pricing for faster uptake, higher rebates for broader access</p>
              </div>

              {/* Optimistic Rationale */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Optimistic Rationale</h3>
                <p className="text-sm text-gray-600">Premium pricing based on superior efficacy, limited access programs</p>
              </div>
            </div>

            {/* Pricing Strategy Deep Dive */}
            <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Pricing Strategy Deep Dive</h3>
                <button 
                  onClick={() => setShowPricingModal(true)}
                  className="px-4 py-2 text-sm font-medium text-black transition-colors duration-200 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Access Strategy Recommendations */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-6 text-lg font-bold text-gray-900">Access Strategy Recommendations</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Early Access Strategies */}
                <div>
                  <h4 className="mb-4 font-semibold text-gray-900 text-md">Early Access Strategies</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Expanded Access Program (EAP)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Named Patient Programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Compassionate Use Protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Bridge Programs</span>
                    </li>
                  </ul>
                </div>

                {/* Commercial Access Tools */}
                <div>
                  <h4 className="mb-4 font-semibold text-gray-900 text-md">Commercial Access Tools</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Patient Assistance Programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Copay Support Cards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Hub Services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Outcomes-Based Contracts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Pricing Strategy Modal */}
        {showPricingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-4xl mx-4 bg-white rounded-lg shadow-xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Pricing Strategy Deep Dive</h2>
                  <p className="text-sm text-gray-600">Detailed analysis of pricing strategies and market positioning</p>
                </div>
                <button
                  onClick={() => setShowPricingModal(false)}
                  className="p-2 text-gray-400 transition-colors duration-200 hover:text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Key Assumptions */}
                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Key Assumptions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">Peak market penetration of 27% based on comparable TKI launches</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">Annual pricing of $180K aligned with current SOC</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">Patient population growth of 3-5% annually</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">Treatment duration of 18 months median</span>
                    </li>
                  </ul>
                </div>

                {/* Calculation Method */}
                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Calculation Method</h3>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="font-mono text-gray-800">Index = (Peak Sales Potential × Market Access × Competitive Position) / 100</p>
                  </div>
                </div>

                {/* AI-Generated Estimate */}
                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-900">AI-Generated Estimate</h3>
                  <div className="p-4 rounded-lg bg-blue-50">
                    <p className="text-blue-800">Generated using fuzzy matching against 15 comparable EGFR TKI launches, weighted by indication overlap and competitive landscape similarity</p>
                  </div>
                </div>

                {/* Data Sources */}
                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Data Sources</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Database</span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">EvaluatePharma</span>
                        <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Database</span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">IQVIA Market Research</span>
                        <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Manual Input</span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">Internal Analysis</span>
                        <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    )}

    {activeTab === 'financial-projections' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-gray-900">Financial Forecasting</h2>
          </div>
        </div>

        {/* Financial Projections Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Peak Revenue */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">$3.826B</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Peak Revenue</div>
            <div className="text-xs text-gray-500">2030</div>
          </div>

          {/* Card 2: Total 10-Year Revenue */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">$25.654B</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Total 10-Year Revenue</div>
                          <div className={`text-xs text-gray-500 ${shouldBlur('contentSections.revenueForecastSubtitle', '2024-2033') ? 'blur-sm opacity-50' : ''}`}>
                {getAnalysisData('contentSections.revenueForecastSubtitle', '2024-2033')}
              </div>
          </div>

          {/* Card 3: Peak Market Share */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">17.1%</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Peak Market Share</div>
            <div className="text-xs text-gray-500">2030</div>
          </div>

          {/* Card 4: Peak Patients */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">26K</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Peak Patients</div>
            <div className="text-xs text-gray-500">2030</div>
          </div>

          {/* Card 5: Avg Selling Price */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">$156K</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Avg Selling Price</div>
            <div className="text-xs text-gray-500">Blended global</div>
          </div>

          {/* Card 6: Persistence Rate */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Persistence Rate</div>
            <div className="text-xs text-gray-500">12-month</div>
          </div>

          {/* Card 7: Treatment Duration */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">18 mo</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Treatment Duration</div>
            <div className="text-xs text-gray-500">Median</div>
          </div>

          {/* Card 8: Geographic Split */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">60% US / 40%</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Ex-US</div>
            <div className="text-xs text-gray-500">Geographic Split</div>
            <div className="text-xs text-gray-500">Peak year</div>
          </div>

          {/* Revenue Forecasting Chart */}
          <div className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm col-span-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-lg font-semibold text-gray-900 ${shouldBlur('contentSections.revenueChartTitle', 'Revenue Forecasting (2024-2033)') ? 'blur-sm opacity-50' : ''}`}>
                {getAnalysisData('contentSections.revenueChartTitle', 'Revenue Forecasting (2024-2033)')}
              </h3>
              <button 
                onClick={() => setShowSourcesModal(true)}
                className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-700 bg-transparent border border-black rounded-md hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <LuDatabase className="w-4 h-4" />
                <span>Sources (4)</span>
              </button>
            </div>
            <p className="mb-6 text-sm text-gray-600">US vs Ex-US revenue with market share overlay</p>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={getRevenueForecastData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={{ stroke: '#666' }}
                    tickLine={{ stroke: '#666' }}
                    tick={{ fill: '#666', fontSize: 12 }}
                  />
                  <YAxis 
                    yAxisId="left"
                    axisLine={{ stroke: '#666' }}
                    tickLine={{ stroke: '#666' }}
                    tick={{ fill: '#666', fontSize: 12 }}
                    domain={[0, 6000]}
                    ticks={[0, 1500, 3000, 4500, 6000]}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    axisLine={{ stroke: '#666' }}
                    tickLine={{ stroke: '#666' }}
                    tick={{ fill: '#666', fontSize: 12 }}
                    domain={[0, 60]}
                    ticks={[0, 15, 30, 45, 60]}
                  />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="usRevenue" stackId="a" fill="#ff6b35" />
                  <Bar yAxisId="left" dataKey="exUsRevenue" stackId="a" fill="#20b2aa" />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="marketShare" 
                    stroke="#000" 
                    strokeWidth={2}
                    dot={{ fill: '#fff', stroke: '#000', strokeWidth: 2, r: 3 }}
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="grossToNet" 
                    stroke="#ffd700" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#fff', stroke: '#ffd700', strokeWidth: 2, r: 3 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Loss of Exclusivity Impact and Financial Outcome Metrics */}
          <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2 col-span-full">
            {/* Left Section: Loss of Exclusivity Impact */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Loss of Exclusivity Impact</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <p className="mb-6 text-sm text-gray-600">Revenue erosion from generic competition</p>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={getLOEImpactData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={{ stroke: '#666' }}
                      tickLine={{ stroke: '#666' }}
                      tick={{ fill: '#666', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={{ stroke: '#666' }}
                      tickLine={{ stroke: '#666' }}
                      tick={{ fill: '#666', fontSize: 12 }}
                      domain={[0, 6000]}
                      ticks={[0, 1500, 3000, 4500, 6000]}
                    />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stackId="1"
                      stroke="#ff6b35" 
                      fill="#ff6b35" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="loeImpact" 
                      stackId="1"
                      stroke="#ffa07a" 
                      fill="#ffa07a" 
                      fillOpacity={0.6}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Section: Financial Outcome Metrics */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Financial Outcome Metrics</h3>
              <p className="mb-6 text-sm text-gray-600">Key valuation and return metrics</p>
              
              {/* Top Row - Two Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-2xl font-bold text-green-600">$8.2B</div>
                  <div className="text-sm text-gray-600">ANPV (8% discount)</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-2xl font-bold text-blue-600">3.2x</div>
                  <div className="text-sm text-gray-600">Peak Sales Multiple</div>
                </div>
              </div>
              
              {/* Bottom Section - Additional Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">IRR</span>
                  <span className="text-sm font-bold text-green-600">24.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Payback Period</span>
                  <span className="text-sm font-bold text-gray-900">4.2 years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Risk-Adjusted NPV</span>
                  <span className="text-sm font-bold text-blue-600">$4.8B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Licensing Power Index */}
          <div className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm col-span-full">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Licensing Power Index</h3>
            <p className="mb-6 text-sm text-gray-600">Factors influencing licensing attractiveness and valuation</p>
            
            {/* Three Columns */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              {/* Pricing Leverage */}
              <div>
                <h4 className="mb-3 text-base font-semibold text-gray-900">Pricing Leverage (85/100)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Premium pricing supported by efficacy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Limited direct competition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Strong payer acceptance</span>
                  </li>
                </ul>
              </div>

              {/* Exclusivity Window */}
              <div>
                <h4 className="mb-3 text-base font-semibold text-gray-900">Exclusivity Window (72/100)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">6-year core exclusivity period</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Moderate generic entry risk</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Regulatory exclusivity overlap</span>
                  </li>
                </ul>
              </div>

              {/* Payer Alignment */}
              <div>
                <h4 className="mb-3 text-base font-semibold text-gray-900">Payer Alignment (78/100)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Strong health economic profile</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Clear unmet medical need</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Moderate access barriers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Overall Licensing Power Index */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-semibold text-gray-900">Overall Licensing Power Index</h4>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-blue-600">78/100</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 text-gray-400">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Strong licensing position driven by differentiated efficacy profile, reasonable exclusivity window, and favorable market dynamics. Premium valuation expected in competitive process.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}

    {activeTab === 'strategic-fit' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Strategic Fit & Tailwind Score</h2>
          <button className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Strategic Tailwind Score Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center mb-2 space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">Strategic Tailwind Score</h3>
                <div className="w-4 h-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
              </div>
              <p className="text-sm text-gray-600">Regulatory and policy environment assessment</p>
            </div>
            <div className="text-right">
              <div className={`mb-1 text-4xl font-bold text-blue-600 ${shouldBlur('strategicFit.tailwindScore', '67') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('strategicFit.tailwindScore', '67')}
            </div>
              <div className="mb-3 text-sm font-medium text-gray-900">Strong Tailwinds</div>
              <button 
                onClick={() => setShowSourcesModal(true)}
                className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <LuDatabase className="w-4 h-4" />
                <span>Sources (4)</span>
              </button>
            </div>
          </div>

          {/* Five Categories */}
          <div className="grid grid-cols-5 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className={`mb-1 text-lg font-bold text-green-600 ${shouldBlur('strategicFit.fdaDesignations', '18') ? 'blur-sm opacity-50' : ''}`}>
                {Math.round((parseInt(getAnalysisData('strategicFit.fdaDesignations', '18')) / 25) * 100)}%
              </div>
              <div className="text-xs text-gray-600">FDA Designations</div>
            </div>
            <div className="text-center">
              <div className={`mb-1 text-lg font-bold text-green-600 ${shouldBlur('strategicFit.guidanceDocuments', '15') ? 'blur-sm opacity-50' : ''}`}>
                {Math.round((parseInt(getAnalysisData('strategicFit.guidanceDocuments', '15')) / 20) * 100)}%
              </div>
              <div className="text-xs text-gray-600">Guidance Documents</div>
            </div>
            <div className="text-center">
              <div className={`mb-1 text-lg font-bold text-green-600 ${shouldBlur('strategicFit.policyIncentives', '12') ? 'blur-sm opacity-50' : ''}`}>
                {Math.round((parseInt(getAnalysisData('strategicFit.policyIncentives', '12')) / 20) * 100)}%
              </div>
              <div className="text-xs text-gray-600">Policy Incentives</div>
            </div>
            <div className="text-center">
              <div className={`mb-1 text-lg font-bold text-green-600 ${shouldBlur('strategicFit.advocacyActivity', '14') ? 'blur-sm opacity-50' : ''}`}>
                {Math.round((parseInt(getAnalysisData('strategicFit.advocacyActivity', '14')) / 15) * 100)}%
              </div>
              <div className="text-xs text-gray-600">Advocacy Activity</div>
            </div>
            <div className="text-center">
              <div className={`mb-1 text-lg font-bold text-green-600 ${shouldBlur('strategicFit.marketPrecedent', '8') ? 'blur-sm opacity-50' : ''}`}>
                {Math.round((parseInt(getAnalysisData('strategicFit.marketPrecedent', '8')) / 20) * 100)}%
              </div>
              <div className="text-xs text-gray-600">Market Precedent</div>
            </div>
          </div>
        </div>

        {/* Four Category Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          {/* FDA Designations Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">FDA Designations</h4>
              <div className={`text-lg font-bold text-blue-600 ${shouldBlur('strategicFit.fdaDesignations', '18') ? 'blur-sm opacity-50' : ''}`}>
                {Math.round((parseInt(getAnalysisData('strategicFit.fdaDesignations', '18')) / 25) * 100)}%
              </div>
            </div>
            <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
              <div className={`h-2 bg-black rounded-full transition-all duration-300 ${shouldBlur('strategicFit.fdaDesignations', '18') ? 'blur-sm opacity-50' : ''}`} 
                   style={{ width: `${Math.round((parseInt(getAnalysisData('strategicFit.fdaDesignations', '18')) / 25) * 100)}%` }}></div>
            </div>
            <p className={`text-xs text-gray-600 mb-4 ${shouldBlur('contentSections.fdaCardDescription', 'An overview of FDA designations, including Breakthrough Therapy and Orphan Drug statuses.') ? 'blur-sm opacity-50' : ''}`}>
              {getAnalysisData('contentSections.fdaCardDescription', 'An overview of FDA designations, including Breakthrough Therapy and Orphan Drug statuses.')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Breakthrough Therapy</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium text-white bg-black rounded-full ${shouldBlur('contentSections.breakthroughTherapyStatus', 'High') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.breakthroughTherapyStatus', 'High')}
                  </span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Fast Track</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full ${shouldBlur('contentSections.fastTrackStatus', 'Medium') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.fastTrackStatus', 'Medium')}
                  </span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Orphan Drug</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium text-white bg-black rounded-full ${shouldBlur('contentSections.orphanDrugStatus', 'High') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.orphanDrugStatus', 'High')}
                  </span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Priority Review</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full ${shouldBlur('contentSections.priorityReviewStatus', 'Medium') ? 'blur-sm opacity-50' : ''}`}>
                    {getAnalysisData('contentSections.priorityReviewStatus', 'Medium')}
                  </span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guidance Documents Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Guidance Documents</h4>
              <div className={`text-lg font-bold text-blue-600 ${shouldBlur('strategicFit.guidanceDocuments', '15') ? 'blur-sm opacity-50' : ''}`}>
                {getAnalysisData('strategicFit.guidanceDocuments', '15')}/20
              </div>
            </div>
            <div className="w-full h-2 mb-6 bg-gray-200 rounded-full">
              <div className={`h-2 bg-black rounded-full transition-all duration-300 ${shouldBlur('strategicFit.guidanceDocuments', '15') ? 'blur-sm opacity-50' : ''}`} 
                   style={{ width: `${Math.round((parseInt(getAnalysisData('strategicFit.guidanceDocuments', '15')) / 20) * 100)}%` }}></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Oncology Endpoints</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">High</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Biomarker Strategy</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">High</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Real-World Evidence</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Medium</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Patient-Reported Outcomes</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Medium</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Incentives Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Policy Incentives</h4>
              <div className={`text-lg font-bold text-blue-600 ${shouldBlur('strategicFit.policyIncentives', '12') ? 'blur-sm opacity-50' : ''}`}>
                {getAnalysisData('strategicFit.policyIncentives', '12')}/20
              </div>
            </div>
            <div className="w-full h-2 mb-6 bg-gray-200 rounded-full">
              <div className={`h-2 bg-black rounded-full transition-all duration-300 ${shouldBlur('strategicFit.policyIncentives', '12') ? 'blur-sm opacity-50' : ''}`} 
                   style={{ width: `${Math.round((parseInt(getAnalysisData('strategicFit.policyIncentives', '12')) / 20) * 100)}%` }}></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">ARPA-H Funding</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Medium</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Medicare Innovation</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">High</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">IRA Exclusions</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">High</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Tax Credits</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Low</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy Activity Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Advocacy Activity</h4>
              <div className={`text-lg font-bold text-blue-600 ${shouldBlur('strategicFit.advocacyActivity', '14') ? 'blur-sm opacity-50' : ''}`}>
                {getAnalysisData('strategicFit.advocacyActivity', '14')}/15
              </div>
            </div>
            <div className="w-full h-2 mb-6 bg-gray-200 rounded-full">
              <div className={`h-2 bg-black rounded-full transition-all duration-300 ${shouldBlur('strategicFit.advocacyActivity', '14') ? 'blur-sm opacity-50' : ''}`} 
                   style={{ width: `${Math.round((parseInt(getAnalysisData('strategicFit.advocacyActivity', '14')) / 15) * 100)}%` }}></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Patient Organizations</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">High</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">KOL Support</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full">High</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Medical Societies</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Medium</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Congressional Interest</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Medium</span>
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact on Buyer Interest Section */}
        <div className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Impact on Buyer Interest</h3>
            <p className="text-sm text-gray-600">How regulatory tailwinds influence acquisition attractiveness</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Regulatory Pathway Clarity Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Regulatory Pathway Clarity</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">High Impact</span>
              </div>
              <p className="text-sm text-gray-600">Clear FDA guidance reduces development risk and timeline uncertainty</p>
            </div>

            {/* Policy Support Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Policy Support</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 text-xs font-medium text-white bg-gray-500 rounded-full">Medium Impact</span>
              </div>
              <p className="text-sm text-gray-600">Legislative incentives provide financial benefits and competitive advantages</p>
            </div>

            {/* Market Access Precedent Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Market Access Precedent</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">High Impact</span>
              </div>
              <p className="text-sm text-gray-600">Established payer acceptance patterns reduce commercial risk</p>
            </div>

            {/* Advocacy Momentum Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Advocacy Momentum</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-gray-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 text-xs font-medium text-white bg-gray-500 rounded-full">Medium Impact</span>
              </div>
              <p className="text-sm text-gray-600">Strong patient advocacy creates favorable environment for approval and access</p>
            </div>
          </div>
        </div>

        {/* Strategic Action Plan Section */}
        <div className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Strategic Action Plan</h3>
              <p className="text-sm text-gray-600">Recommended actions to maximize regulatory tailwinds</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 text-gray-400">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">View Details</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Immediate Actions */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Immediate (0-6 months)</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Submit Breakthrough Therapy Designation request</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Initiate patient advocacy partnerships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Engage with FDA on biomarker strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Develop real-world evidence plan</span>
                </li>
              </ul>
            </div>

            {/* Near-term Actions */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Near-term (6-18 months)</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">File for Fast Track designation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Engage with CMS on coverage strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Establish KOL advisory board</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Develop health economics dossier</span>
                </li>
              </ul>
            </div>

            {/* Long-term Actions */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Long-term (18+ months)</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Prepare for Priority Review Voucher</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Establish outcomes-based contracts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Build international regulatory strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Develop lifecycle management plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Success Factors Section */}
        <div className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Key Success Factors</h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Regulatory Excellence */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Regulatory Excellence</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Proactive FDA engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Robust biomarker strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Quality clinical execution</span>
                </li>
              </ul>
            </div>

            {/* Stakeholder Alignment */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Stakeholder Alignment</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Patient advocacy partnerships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">KOL engagement strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Payer relationship building</span>
                </li>
              </ul>
            </div>

            {/* Commercial Readiness */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Commercial Readiness</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Market access preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Health economics evidence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Launch strategy development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}

function App() {
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
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [showCompoundProfile, setShowCompoundProfile] = useState(true)
  const [activeTab, setActiveTab] = useState('compound-profile')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [modalityOpen, setModalityOpen] = useState(false)
  const [phaseOpen, setPhaseOpen] = useState(false)
  const [routeOpen, setRouteOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedDrug, setSelectedDrug] = useState('')
  const [modalTab, setModalTab] = useState('overview')
  const [activeSubTab, setActiveSubTab] = useState('direct-competitors')
  const [showPipelineModal, setShowPipelineModal] = useState(false)
  const [showSourcesModal, setShowSourcesModal] = useState(false)
  const [showCompetitiveLandscape, setShowCompetitiveLandscape] = useState(true)
  const [showMarketSizeModal, setShowMarketSizeModal] = useState(false)
  const [showPeakSalesModal, setShowPeakSalesModal] = useState(false)
  const [showCAGRModal, setShowCAGRModal] = useState(false)
  const [showMarketSourcesModal, setShowMarketSourcesModal] = useState(false)
  const [isMarketSizeExpanded, setIsMarketSizeExpanded] = useState(true)
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

    try {
      const response = await fetch('http://localhost:3001/api/market-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedIndications,
          selectedRegions
        })
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(`Market analysis completed successfully! Analysis ID: ${result.data.id}`)
        
        // Store the analysis data for use in the results page
        setAnalysisData(result.data.analysis)
        localStorage.setItem('marketAnalysisData', JSON.stringify(result.data.analysis))
        
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
        
        // Show results immediately after successful API response
        setIsLoading(false)
        setShowResults(true)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to complete market analysis')
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error submitting market analysis:', error)
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
      setIsLoading(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Loading Component


  if (isLoading) {
    return <LoadingPage progress={progress} />
  }

  if (showResults) {
    return         <ResultsPage 
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
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header - Outside the box */}
        <div className="mb-8 text-center">
                      <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
                <LuMicroscope className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Market Analysis Agent</h1>
            </div>
          <p className="mb-2 text-lg text-gray-700">Molecule Profile & Development Context</p>
          <p className="text-sm text-gray-500">
            Provide as much detail as available - all fields are optional and can be updated later
          </p>
        </div>

        {/* Main Container - Single White Box */}
        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 mb-6 border border-green-200 rounded-md bg-green-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800">{submitMessage}</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 mb-6 border border-red-200 rounded-md bg-red-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{submitMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Drug Asset Information Section */}
            <div>
              <div className="mb-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <LuTarget className="w-6 h-6 mr-2 text-black" />
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Drug Asset Information
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Comprehensive molecule profile to enable precise market analysis and competitive positioning
                </p>
              </div>

              {/* Basic Information */}
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <LuPill className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Molecule Name
                    </label>
                    <input
                      type="text"
                      value={formData.moleculeName}
                      onChange={(e) => handleInputChange('moleculeName', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="e.g., BMS-986165, Osimertinib"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Internal Code
                    </label>
                    <input
                      type="text"
                      value={formData.internalCode}
                      onChange={(e) => handleInputChange('internalCode', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="e.g., Program #247A, TKI-001"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Drug Class
                    </label>
                    <input
                      type="text"
                      value={formData.drugClass}
                      onChange={(e) => handleInputChange('drugClass', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="e.g., Tyrosine Kinase Inhibitor, Checkpoint Inhibitor"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Modality
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setModalityOpen(!modalityOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-left transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                      >
                        <span className={formData.modality ? "text-black" : "text-gray-500"}>
                          {formData.modality ? 
                            {
                              'small-molecule': 'Small Molecule',
                              'monoclonal-antibody': 'Monoclonal Antibody',
                              'adc': 'ADC (Antibody-Drug Conjugate)',
                              'bispecific-antibody': 'Bispecific Antibody',
                              'mrna-therapy': 'mRNA Therapy',
                              'gene-therapy': 'Gene Therapy',
                              'cell-therapy': 'Cell Therapy',
                              'protein-peptide': 'Protein/Peptide',
                              'oligonucleotide': 'Oligonucleotide',
                              'vaccine': 'Vaccine',
                              'other': 'Other'
                            }[formData.modality] || 'Select modality'
                          : 'Select modality'}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {modalityOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                          <div className="py-1">
                            {[
                              { value: 'small-molecule', label: 'Small Molecule' },
                              { value: 'monoclonal-antibody', label: 'Monoclonal Antibody' },
                              { value: 'adc', label: 'ADC (Antibody-Drug Conjugate)' },
                              { value: 'bispecific-antibody', label: 'Bispecific Antibody' },
                              { value: 'mrna-therapy', label: 'mRNA Therapy' },
                              { value: 'gene-therapy', label: 'Gene Therapy' },
                              { value: 'cell-therapy', label: 'Cell Therapy' },
                              { value: 'protein-peptide', label: 'Protein/Peptide' },
                              { value: 'oligonucleotide', label: 'Oligonucleotide' },
                              { value: 'vaccine', label: 'Vaccine' },
                              { value: 'other', label: 'Other' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  handleInputChange('modality', option.value);
                                  setModalityOpen(false);
                                }}
                                className="w-full px-3 py-2 text-sm text-left text-black transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:outline-none"
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Mechanism of Action
                    </label>
                    <textarea
                      value={formData.mechanismOfAction}
                      onChange={(e) => handleInputChange('mechanismOfAction', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="e.g., Selective inhibition of EGFR L858R/T790M mutations while sparing wild-type EGFR..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Target Indications */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuTarget className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Target Indications</h3>
              </div>
                              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {indications.map((indication) => (
                  <label key={indication} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedIndications.includes(indication)}
                      onChange={() => handleIndicationToggle(indication)}
                      className="text-black border-gray-300 rounded focus:ring-black checked:bg-black checked:border-black"
                    />
                    <span className="ml-4 text-sm text-gray-700">{indication}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Development Status */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuBeaker className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Development Status</h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Development Phase
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setPhaseOpen(!phaseOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm text-left transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    >
                      <span className={formData.developmentPhase ? "text-black" : "text-gray-500"}>
                        {formData.developmentPhase ?
                          {
                            'preclinical': 'Preclinical',
                            'phase-1': 'Phase 1',
                            'phase-2': 'Phase 2',
                            'phase-3': 'Phase 3',
                            'nda-submitted': 'NDA Submitted',
                            'approved': 'Approved'
                          }[formData.developmentPhase] || 'Select phase'
                        : 'Select phase'}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {phaseOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="py-1">
                          {[
                            { value: 'preclinical', label: 'Preclinical' },
                            { value: 'phase-1', label: 'Phase 1' },
                            { value: 'phase-2', label: 'Phase 2' },
                            { value: 'phase-3', label: 'Phase 3' },
                            { value: 'nda-submitted', label: 'NDA Submitted' },
                            { value: 'approved', label: 'Approved' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                handleInputChange('developmentPhase', option.value);
                                setPhaseOpen(false);
                              }}
                              className="w-full px-3 py-2 text-left text-black transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:outline-none"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Target Launch Year
                  </label>
                  <input
                    type="number"
                    value={formData.targetLaunchYear}
                    onChange={(e) => handleInputChange('targetLaunchYear', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="YYYY"
                    min="2024"
                    max="2040"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Route of Administration
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setRouteOpen(!routeOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm text-left transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    >
                      <span className={formData.routeOfAdministration ? "text-black" : "text-gray-500"}>
                        {formData.routeOfAdministration ?
                          {
                            'oral': 'Oral',
                            'intravenous': 'Intravenous',
                            'subcutaneous': 'Subcutaneous',
                            'intramuscular': 'Intramuscular',
                            'topical': 'Topical',
                            'inhalation': 'Inhalation'
                          }[formData.routeOfAdministration] || 'Select route'
                        : 'Select route'}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {routeOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="py-1">
                          {[
                            { value: 'oral', label: 'Oral' },
                            { value: 'intravenous', label: 'Intravenous' },
                            { value: 'subcutaneous', label: 'Subcutaneous' },
                            { value: 'intramuscular', label: 'Intramuscular' },
                            { value: 'topical', label: 'Topical' },
                            { value: 'inhalation', label: 'Inhalation' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                handleInputChange('routeOfAdministration', option.value);
                                setRouteOpen(false);
                              }}
                              className="w-full px-3 py-2 text-left text-black transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:outline-none"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Regions of Interest */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuGlobe className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Regions of Interest</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {regions.map((region) => (
                  <label key={region} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => handleRegionToggle(region)}
                      className="text-black border-gray-300 rounded focus:ring-black checked:bg-black checked:border-black"
                    />
                    <span className="ml-4 text-sm text-gray-700">{region}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clinical Context */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuFileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Clinical Context</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Relevant Clinical Trials
                  </label>
                  <input
                    type="text"
                    value={formData.clinicalTrials}
                    onChange={(e) => handleInputChange('clinicalTrials', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="e.g., NCT04567890, KEYNOTE-189, CheckMate-227"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Enter trial identifiers or names (comma-separated)
                  </p>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Any additional context, competitive considerations, or strategic notes..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 space-x-2 font-semibold text-white transition-colors duration-200 bg-gray-900 rounded-md hover:bg-blue-600 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <LuSparkles className="w-5 h-5 text-white" />
                    <span>Generate Market Analysis</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
