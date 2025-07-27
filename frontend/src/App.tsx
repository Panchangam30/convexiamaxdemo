import { useState, useEffect } from 'react'
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
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
      {/* Top Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center spinning-border">
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
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
        Generating Analysis
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-center mb-6">
        Processing market intelligence and competitive data
      </p>

      {/* Current Step */}
      <p className="text-black text-center mb-4 text-sm">
        {progress < 16.67 ? "Gathering competitive intelligence..." : 
         progress < 33.33 ? "Analyzing market dynamics..." : 
         progress < 50 ? "Assessing regulatory pathways..." :
         progress < 66.67 ? "Modeling financial projections..." :
         progress < 83.33 ? "Calculating strategic fit scores..." :
         "Finalizing Analysis..."}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-black h-2 rounded-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Percentage */}
      <p className="text-gray-500 text-center mb-6 text-xs">
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

const ResultsPage = ({ showCompoundProfile, setShowCompoundProfile, activeTab, setActiveTab, showModal, setShowModal, selectedDrug, setSelectedDrug }: { 
  showCompoundProfile: boolean, 
  setShowCompoundProfile: (show: boolean) => void,
  activeTab: string,
  setActiveTab: (tab: string) => void,
  showModal: boolean,
  setShowModal: (show: boolean) => void,
  selectedDrug: string,
  setSelectedDrug: (drug: string) => void
}) => (
  <div className="min-h-screen bg-gray-50">
    {/* Top Header */}
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Analysis Agent</h1>
            <p className="text-base text-gray-600">Simulating Commercial Viability for Drug Asset Evaluation</p>
          </div>
          <div className="border-l border-gray-300 pl-8">
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
      <div className="max-w-7xl mx-auto px-6">
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
          <div className="flex items-center py-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
            <LuTrendingUp className="w-5 h-5 mr-2" />
            Market Size
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
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Compound Profile</h2>
          <button 
            onClick={() => setShowCompoundProfile(!showCompoundProfile)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Mechanism of Action */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mechanism of Action</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Target Protein</p>
                  <p className="text-sm font-bold text-gray-900">EGFR L858R/T790M</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Pathway</p>
                  <p className="text-sm font-bold text-gray-900">EGFR/PI3K/AKT</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Description</p>
                  <p className="text-sm text-gray-900">Third-generation EGFR tyrosine kinase inhibitor designed to selectively target T790M resistance mutations while sparing wild-type EGFR, reducing skin and GI toxicity.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Key Preclinical Findings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Preclinical Findings</h3>
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
                  <p className="text-sm font-bold text-gray-600 mb-2">Tumor Inhibition (in vivo)</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div className="bg-black h-4 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">87%</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-bold text-gray-600 mb-2">Survival Improvement</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div className="bg-black h-4 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">65%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Development Strategy */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Strategy</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Primary Indication</p>
                  <div className="mb-3">
                    <span className="px-2 py-1 text-xs font-bold bg-gray-100 text-gray-700 rounded-full">NSCLC w/ T790M mutation</span>
                  </div>
                  <p className="text-sm text-gray-500 pb-4 border-b border-gray-200">Targeting second-line treatment after first-generation EGFR TKI failure</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Regulatory Plan</p>
                  <div className="flex space-x-2 mb-2">
                    <span className="px-2 py-1 text-xs bg-transparent border border-gray-300 text-gray-700 rounded-full">Breakthrough Designation</span>
                    <span className="px-2 py-1 text-xs bg-transparent border border-gray-300 text-gray-700 rounded-full">Orphan Drug Status</span>
                  </div>
                  <p className="text-sm text-gray-600">Fast-track pathway with potential for accelerated approval based on ORR endpoint</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Timeline to Market</p>
                  <p className="text-lg font-bold text-blue-600">3.5 years</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )}

    {activeTab === 'competitive-landscape' && (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Competitive Landscape</h2>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
        
        {/* Sub-navigation */}
        <div className="bg-gray-100 rounded-md p-1 mb-6">
          <div className="flex justify-between">
            <button className="flex-1 px-4 py-2 text-sm font-medium bg-white border border-gray-300 text-gray-900 rounded-md shadow-sm mr-1">
              Direct Competitors
            </button>
            <button className="flex-1 px-4 py-2 text-sm font-medium bg-transparent text-gray-600 rounded-md mx-1">
              Deal Activity
            </button>
            <button className="flex-1 px-4 py-2 text-sm font-medium bg-transparent text-gray-600 rounded-md mx-1">
              Pipeline Analysis
            </button>
            <button className="flex-1 px-4 py-2 text-sm font-medium bg-transparent text-gray-700 rounded-md flex items-center justify-center space-x-2 ml-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              <span>Sources (4)</span>
            </button>
          </div>
        </div>

        {/* Competitive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Osimertinib Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Osimertinib</h3>
                <p className="text-sm text-gray-600">AstraZeneca</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-black text-white rounded-full">Approved</span>
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
              className="w-full px-4 py-2 text-sm bg-transparent border border-gray-200 text-black hover:bg-gray-100 hover:text-black rounded-md transition-colors"
            >
              View Detailed Analysis
            </button>
          </div>

          {/* Lazertinib Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Lazertinib</h3>
                <p className="text-sm text-gray-600">Yuhan/Janssen</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium  border border-black text-black rounded-full">Development</span>
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
              className="w-full px-4 py-2 text-sm bg-transparent border border-gray-200 text-black hover:bg-gray-100 hover:text-black rounded-md transition-colors"
            >
              View Detailed Analysis
            </button>
          </div>

          {/* Furmonertinib Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Furmonertinib</h3>
                <p className="text-sm text-gray-600">Allist Pharma</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-black rounded-full">Regional</span>
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
              className="w-full px-4 py-2 text-sm bg-transparent border border-gray-200 text-black hover:bg-gray-100 hover:text-black rounded-md transition-colors"
            >
              View Detailed Analysis
            </button>
          </div>

          {/* Nazartinib Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Nazartinib</h3>
                <p className="text-sm text-gray-600">Novartis</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium border border-black text-black rounded-full">Development</span>
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
              className="w-full px-4 py-2 text-sm bg-transparent border border-gray-200 text-black hover:bg-gray-100 hover:text-black rounded-md transition-colors"
            >
              View Detailed Analysis
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="flex justify-between items-start p-6 border-b border-gray-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
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
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex space-x-8">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
                Overview
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                Trial Data
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                Differentiators
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                Deal Terms
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Market Position */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Position</h3>
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
                    <div className="text-sm font-medium text-gray-900">
                      {selectedDrug === 'Osimertinib' ? 'approved' : 
                       selectedDrug === 'Lazertinib' ? 'development' : 
                       selectedDrug === 'Furmonertinib' ? 'approved' : 'development'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mechanism */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mechanism</h3>
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

            {/* Data Sources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sources</h3>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  Clarivate Cortellis
                </button>
                <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors flex items-center space-x-2">
                  <span>ClinicalTrials.gov</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  {selectedDrug === 'Osimertinib' ? 'AstraZeneca 10-K' : 
                   selectedDrug === 'Lazertinib' ? 'Yuhan/Janssen 10-K' : 
                   selectedDrug === 'Furmonertinib' ? 'Allist Pharma 10-K' : 'Novartis 10-K'}
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
    />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header - Outside the box */}
        <div className="mb-8 text-center">
                      <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <LuMicroscope className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Market Analysis Agent</h1>
            </div>
          <p className="text-lg text-gray-700 mb-2">Molecule Profile & Development Context</p>
          <p className="text-sm text-gray-500">
            Provide as much detail as available - all fields are optional and can be updated later
          </p>
        </div>

        {/* Main Container - Single White Box */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
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
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
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
                  <LuTarget className="w-6 h-6 text-black mr-2" />
                  <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    Drug Asset Information
                  </h2>
                </div>
                <p className="text-gray-600 text-sm">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Molecule Name
                    </label>
                    <input
                      type="text"
                      value={formData.moleculeName}
                      onChange={(e) => handleInputChange('moleculeName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
                      placeholder="e.g., BMS-986165, Osimertinib"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Internal Code
                    </label>
                    <input
                      type="text"
                      value={formData.internalCode}
                      onChange={(e) => handleInputChange('internalCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
                      placeholder="e.g., Program #247A, TKI-001"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Drug Class
                    </label>
                    <input
                      type="text"
                      value={formData.drugClass}
                      onChange={(e) => handleInputChange('drugClass', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
                      placeholder="e.g., Tyrosine Kinase Inhibitor, Checkpoint Inhibitor"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modality
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setModalityOpen(!modalityOpen)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 bg-white text-left flex justify-between items-center text-sm"
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
                                className="w-full px-3 py-2 text-left text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-sm"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mechanism of Action
                    </label>
                    <textarea
                      value={formData.mechanismOfAction}
                      onChange={(e) => handleInputChange('mechanismOfAction', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
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
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {indications.map((indication) => (
                  <label key={indication} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedIndications.includes(indication)}
                      onChange={() => handleIndicationToggle(indication)}
                      className="rounded border-gray-300 text-black focus:ring-black checked:bg-black checked:border-black"
                    />
                    <span className="text-sm text-gray-700 ml-4">{indication}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Development Phase
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setPhaseOpen(!phaseOpen)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 bg-white text-left flex justify-between items-center text-sm"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Launch Year
                  </label>
                  <input
                    type="number"
                    value={formData.targetLaunchYear}
                    onChange={(e) => handleInputChange('targetLaunchYear', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
                    placeholder="YYYY"
                    min="2024"
                    max="2040"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Route of Administration
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setRouteOpen(!routeOpen)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 bg-white text-left flex justify-between items-center text-sm"
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {regions.map((region) => (
                  <label key={region} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => handleRegionToggle(region)}
                      className="rounded border-gray-300 text-black focus:ring-black checked:bg-black checked:border-black"
                    />
                    <span className="text-sm text-gray-700 ml-4">{region}</span>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Clinical Trials
                  </label>
                  <input
                    type="text"
                    value={formData.clinicalTrials}
                    onChange={(e) => handleInputChange('clinicalTrials', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
                    placeholder="e.g., NCT04567890, KEYNOTE-189, CheckMate-227"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter trial identifiers or names (comma-separated)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
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
                className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
