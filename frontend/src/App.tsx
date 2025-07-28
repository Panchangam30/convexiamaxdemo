import { useState, useEffect } from 'react'
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts'
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

const ResultsPage = ({ showCompoundProfile, setShowCompoundProfile, activeTab, setActiveTab, showModal, setShowModal, selectedDrug, setSelectedDrug, modalTab, setModalTab, activeSubTab, setActiveSubTab, showPipelineModal, setShowPipelineModal, showSourcesModal, setShowSourcesModal, showCompetitiveLandscape, setShowCompetitiveLandscape }: { 
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
  setShowCompetitiveLandscape: (show: boolean) => void
}) => (
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
            <p className="text-sm font-bold text-gray-600">Unnamed Molecule</p>
            <p className="text-sm text-gray-600">Phase:</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Edit Molecule Info
          </button>
          <button className="flex items-center px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CSV
          </button>
          <button className="flex items-center px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Excel
          </button>
          <button className="flex items-center px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
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
        <nav className="flex space-x-8">
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
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <LuDollarSign className="w-5 h-5 mr-2" />
            Pricing & Access
          </div>
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <LuShield className="w-5 h-5 mr-2" />
            Incentives & Regulation
          </div>
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            IP Positioning
          </div>
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Financial Projections
          </div>
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </nav>
      </div>
    </div>

    {/* Main Content */}
    {activeTab === 'compound-profile' && (
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Compound Profile</h2>
          <button 
            onClick={() => setShowCompoundProfile(!showCompoundProfile)}
            className="p-2 transition-colors rounded-full hover:bg-gray-100"
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
                  <p className="text-sm font-bold text-gray-900">EGFR L858R/T790M</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Pathway</p>
                  <p className="text-sm font-bold text-gray-900">EGFR/PI3K/AKT</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Description</p>
                  <p className="text-sm text-gray-900">Third-generation EGFR tyrosine kinase inhibitor designed to selectively target T790M resistance mutations while sparing wild-type EGFR, reducing skin and GI toxicity.</p>
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
                    <p className="text-lg font-bold text-green-600">2.5 nM</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-600">IC50 (Wild-type)</p>
                    <p className="text-lg font-bold text-gray-900">180 nM</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-sm font-bold text-gray-600">Tumor Inhibition (in vivo)</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-4 bg-gray-200 rounded-full">
                      <div className="h-4 bg-black rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">87%</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-sm font-bold text-gray-600">Survival Improvement</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-4 bg-gray-200 rounded-full">
                      <div className="h-4 bg-black rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">65%</span>
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
                  <div className="mb-3">
                    <span className="px-2 py-1 text-xs font-bold text-gray-700 bg-gray-100 rounded-full">NSCLC w/ T790M mutation</span>
                  </div>
                  <p className="pb-4 text-sm text-gray-500 border-b border-gray-200">Targeting second-line treatment after first-generation EGFR TKI failure</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Regulatory Plan</p>
                  <div className="flex mb-2 space-x-2">
                    <span className="px-2 py-1 text-xs text-gray-700 bg-transparent border border-gray-300 rounded-full">Breakthrough Designation</span>
                    <span className="px-2 py-1 text-xs text-gray-700 bg-transparent border border-gray-300 rounded-full">Orphan Drug Status</span>
                  </div>
                  <p className="text-sm text-gray-600">Fast-track pathway with potential for accelerated approval based on ORR endpoint</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600">Timeline to Market</p>
                  <p className="text-lg font-bold text-blue-600">3.5 years</p>
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
            className="p-2 transition-colors rounded-full hover:bg-gray-100"
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
            className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-700 bg-transparent border border-black rounded-md"
          >
            <LuDatabase className="w-4 h-4" />
            <span>Sources (4)</span>
          </button>
        </div>

        {/* Content based on active sub-tab */}
        {activeSubTab === 'direct-competitors' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Osimertinib Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Osimertinib</h3>
                  <p className="text-sm text-gray-600">AstraZeneca</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">Approved</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">MoA:</span>
                    <div className="text-sm font-medium text-gray-900">3rd-gen EGFR TKI</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Market Value:</span>
                    <div className="text-sm font-bold text-green-600">$5.4B</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Latest Milestone:</span>
                    <div className="text-sm font-medium text-gray-900">Approved 2015</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Target:</span>
                    <div className="text-sm font-medium text-gray-900">EGFR T790M</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Patients:</span>
                    <div className="text-sm font-medium text-gray-900">45K</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedDrug('Osimertinib')
                  setShowModal(true)
                }}
                className="w-full px-4 py-2 text-sm text-black transition-colors bg-transparent border border-gray-200 rounded-md hover:bg-gray-100 hover:text-black"
              >
                View Detailed Analysis
              </button>
            </div>

            {/* Lazertinib Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Lazertinib</h3>
                  <p className="text-sm text-gray-600">Yuhan/Janssen</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-black border border-black rounded-full">Development</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">MoA:</span>
                    <div className="text-sm font-medium text-gray-900">3rd-gen EGFR TKI</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Market Value:</span>
                    <div className="text-sm font-bold text-green-600">$1.2B</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Latest Milestone:</span>
                    <div className="text-sm font-medium text-gray-900">Phase III</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Target:</span>
                    <div className="text-sm font-medium text-gray-900">EGFR T790M</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Patients:</span>
                    <div className="text-sm font-medium text-gray-900">12K</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedDrug('Lazertinib')
                  setShowModal(true)
                }}
                className="w-full px-4 py-2 text-sm text-black transition-colors bg-transparent border border-gray-200 rounded-md hover:bg-gray-100 hover:text-black"
              >
                View Detailed Analysis
              </button>
            </div>

            {/* Furmonertinib Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Furmonertinib</h3>
                  <p className="text-sm text-gray-600">Allist Pharma</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-black bg-gray-200 rounded-full">Regional</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">MoA:</span>
                    <div className="text-sm font-medium text-gray-900">3rd-gen EGFR TKI</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Market Value:</span>
                    <div className="text-sm font-bold text-green-600">$800M</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Latest Milestone:</span>
                    <div className="text-sm font-medium text-gray-900">Approved China</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Target:</span>
                    <div className="text-sm font-medium text-gray-900">EGFR T790M</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Patients:</span>
                    <div className="text-sm font-medium text-gray-900">8K</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedDrug('Furmonertinib')
                  setShowModal(true)
                }}
                className="w-full px-4 py-2 text-sm text-black transition-colors bg-transparent border border-gray-200 rounded-md hover:bg-gray-100 hover:text-black"
              >
                View Detailed Analysis
              </button>
            </div>

            {/* Nazartinib Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nazartinib</h3>
                  <p className="text-sm text-gray-600">Novartis</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-black border border-black rounded-full">Development</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">MoA:</span>
                    <div className="text-sm font-medium text-gray-900">Pan-HER TKI</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Market Value:</span>
                    <div className="text-sm font-bold text-green-600">TBD</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Latest Milestone:</span>
                    <div className="text-sm font-medium text-gray-900">Phase II</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Target:</span>
                    <div className="text-sm font-medium text-gray-900">EGFR/HER2</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Patients:</span>
                    <div className="text-sm font-medium text-gray-900">TBD</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedDrug('Nazartinib')
                  setShowModal(true)
                }}
                className="w-full px-4 py-2 text-sm text-black transition-colors bg-transparent border border-gray-200 rounded-md hover:bg-gray-100 hover:text-black"
              >
                View Detailed Analysis
              </button>
            </div>
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
                        className="text-sm text-blue-600 hover:text-blue-800"
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
                Comprehensive analysis of {selectedDrug === 'Osimertinib' ? 'AstraZeneca' : 
                selectedDrug === 'Lazertinib' ? 'Yuhan/Janssen' : 
                selectedDrug === 'Furmonertinib' ? 'Allist Pharma' : 'Novartis'}'s {selectedDrug}.
              </p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-600"
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
                      {selectedDrug === 'Osimertinib' ? '$5.4B' : 
                       selectedDrug === 'Lazertinib' ? '$1.2B' : 
                       selectedDrug === 'Furmonertinib' ? '$800M' : 'TBD'}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Patient Base:</span>
                    <div className="text-sm font-medium text-gray-900">
                      {selectedDrug === 'Osimertinib' ? '45K' : 
                       selectedDrug === 'Lazertinib' ? '12K' : 
                       selectedDrug === 'Furmonertinib' ? '8K' : 'TBD'}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Status:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {selectedDrug === 'Osimertinib' ? 'approved' : 
                         selectedDrug === 'Lazertinib' ? 'development' : 
                         selectedDrug === 'Furmonertinib' ? 'approved' : 'development'}
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
                      {selectedDrug === 'Nazartinib' ? 'Pan-HER TKI' : '3rd-gen EGFR TKI'}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Target:</span>
                    <div className="text-sm font-medium text-gray-900">
                      {selectedDrug === 'Nazartinib' ? 'EGFR/HER2' : 'EGFR T790M'}
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
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://www.biocentury.com/', '_blank')}
                  className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                >
                  <span>BioCentury Intelligence</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://www.janssen.com/', '_blank')}
                  className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                >
                  <span>Janssen Press Release</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                  className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                >
                  <span>ClinicalTrials.gov</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
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
                        <div className="text-sm font-medium text-gray-900">Phase III (FLAURA)</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Enrollment:</span>
                        <div className="text-sm font-medium text-gray-900">556 patients</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Primary Endpoint:</span>
                        <div className="text-sm font-medium text-gray-900">Progression-free survival</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Trial ID:</span>
                        <div className="text-sm font-medium text-gray-900">NCT02296125</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Status:</span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full">Completed</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Est. Completion:</span>
                        <div className="text-sm font-medium text-gray-900">Completed 2017</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="mb-6 border-b border-gray-300"></div>

                {/* Data Sources */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Data Sources</h3>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => window.open('https://www.clarivate.com/cortellis/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                      <span>Clarivate Cortellis</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>ClinicalTrials.gov</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        const company = selectedDrug === 'Osimertinib' ? 'astrazeneca' : 
                                       selectedDrug === 'Lazertinib' ? 'janssen' : 
                                       selectedDrug === 'Furmonertinib' ? 'allist' : 'novartis';
                        window.open(`https://www.sec.gov/edgar/search/index.php?company=${company}`, '_blank');
                      }}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{selectedDrug === 'Osimertinib' ? 'AstraZeneca 10-K' : 
                             selectedDrug === 'Lazertinib' ? 'Yuhan/Janssen 10-K' : 
                             selectedDrug === 'Furmonertinib' ? 'Allist Pharma 10-K' : 'Novartis 10-K'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
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
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => window.open('https://www.clarivate.com/cortellis/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <span>Clarivate Cortellis</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <span>ClinicalTrials.gov</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        const company = selectedDrug === 'Osimertinib' ? 'astrazeneca' : 
                                       selectedDrug === 'Lazertinib' ? 'janssen' : 
                                       selectedDrug === 'Furmonertinib' ? 'allist' : 'novartis';
                        window.open(`https://www.sec.gov/edgar/search/index.php?company=${company}`, '_blank');
                      }}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <span>{selectedDrug === 'Osimertinib' ? 'AstraZeneca 10-K' : 
                             selectedDrug === 'Lazertinib' ? 'Yuhan/Janssen 10-K' : 
                             selectedDrug === 'Furmonertinib' ? 'Allist Pharma 10-K' : 'Novartis 10-K'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
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
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => window.open('https://www.clarivate.com/cortellis/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <span>Clarivate Cortellis</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <span>ClinicalTrials.gov</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        const company = selectedDrug === 'Osimertinib' ? 'astrazeneca' : 
                                       selectedDrug === 'Lazertinib' ? 'janssen' : 
                                       selectedDrug === 'Furmonertinib' ? 'allist' : 'novartis';
                        window.open(`https://www.sec.gov/edgar/search/index.php?company=${company}`, '_blank');
                      }}
                      className="flex items-center px-6 py-3 space-x-2 text-sm transition-colors bg-transparent border border-black hover:bg-gray-50 rounded-2xl"
                    >
                      <span>{selectedDrug === 'Osimertinib' ? 'AstraZeneca 10-K' : 
                             selectedDrug === 'Lazertinib' ? 'Yuhan/Janssen 10-K' : 
                             selectedDrug === 'Furmonertinib' ? 'Allist Pharma 10-K' : 'Novartis 10-K'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
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
              className="text-gray-400 hover:text-gray-600"
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
          <button className="p-2 transition-colors rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <button className="ml-2 text-sm text-blue-600 hover:text-blue-800">View Details</button>
              </div>
              <p className="text-sm text-gray-600">Overall market attractiveness score</p>
            </div>
            <div className="text-right">
              <div className="mb-1 text-3xl font-bold text-green-600">78%</div>
              <div className="mb-3 text-sm font-medium text-gray-900">High Potential</div>
              <button className="flex items-center px-3 py-2 text-sm font-medium border border-black rounded-md text-blac hover:bg-gray-200">
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
                <div className="text-2xl font-bold text-blue-600">$2.51B</div>
                <svg className="w-4 h-4 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <button className="ml-2 text-sm text-blue-600 hover:text-blue-800">View Details</button>
              </div>
              <div className="text-sm font-medium text-gray-900">Peak Sales Estimate</div>
            </div>

            {/* CAGR (Specific Value) */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-2xl font-bold text-green-600">8.2%</div>
                <svg className="w-4 h-4 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <button className="ml-2 text-sm text-blue-600 hover:text-blue-800">View Details</button>
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
          <div className="border rounded-lg shadow-sm bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">Market Growth Projection</div>
              <div className="text-sm text-muted-foreground">Market size and penetration trends 2024-2030</div>
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
                    data={[
                      { year: '2024', marketSize: 1506, penetration: 12 },
                      { year: '2025', marketSize: 1750, penetration: 15 },
                      { year: '2026', marketSize: 2000, penetration: 18 },
                      { year: '2027', marketSize: 2250, penetration: 21 },
                      { year: '2028', marketSize: 2500, penetration: 24 },
                      { year: '2029', marketSize: 2750, penetration: 27 },
                      { year: '2030', marketSize: 2750, penetration: 27 }
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
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
                            <div className="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
                              <div className="font-medium">{label}</div>
                              <div className="grid gap-1.5">
                                <div className="flex w-full flex-wrap gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground items-center">
                                  <div className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] h-2.5 w-2.5" style={{'--color-bg': 'var(--color-marketSize)', '--color-border': 'var(--color-marketSize)'} as React.CSSProperties}></div>
                                  <div className="flex items-center justify-between flex-1 leading-none">
                                    <div className="grid gap-1.5">
                                      <span className="text-muted-foreground">Market Size ($M)</span>
                                    </div>
                                    <span className="font-mono font-medium tabular-nums text-foreground">{payload[0]?.value}</span>
                                  </div>
                                </div>
                                <div className="flex w-full flex-wrap gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground items-center">
                                  <div className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] h-2.5 w-2.5" style={{'--color-bg': 'var(--color-penetration)', '--color-border': 'var(--color-penetration)'} as React.CSSProperties}></div>
                                  <div className="flex items-center justify-between flex-1 leading-none">
                                    <div className="grid gap-1.5">
                                      <span className="text-muted-foreground">Penetration (%)</span>
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
                  className="text-gray-400 hover:text-gray-600"
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
                  className="flex items-center w-full p-3 text-sm transition-colors bg-transparent border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <span className="flex-1 text-left text-gray-700">Database Clarivate Cortellis</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://clinicaltrials.gov/', '_blank')}
                  className="flex items-center w-full p-3 text-sm transition-colors bg-transparent border border-gray-200 rounded-lg hover:bg-gray-50"
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
  </div>
);

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
        setSubmitMessage(`Market analysis submitted successfully! Analysis ID: ${result.data.id}`)
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
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to submit market analysis')
      }
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
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
                                className="w-full px-3 py-2 text-sm text-left text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
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
                      className="flex items-center justify-between w-full px-3 py-2 text-sm text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
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
                              className="w-full px-3 py-2 text-left text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
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
                      className="flex items-center justify-between w-full px-3 py-2 text-sm text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
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
                              className="w-full px-3 py-2 text-left text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
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
                className="flex items-center px-8 py-3 space-x-2 font-semibold text-white transition-colors duration-200 bg-gray-900 rounded-md hover:bg-gray-800 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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

export default App
