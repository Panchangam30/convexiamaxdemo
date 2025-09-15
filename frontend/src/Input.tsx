import React from 'react';
import { LuTarget, LuPill, LuBeaker, LuGlobe, LuFileText, LuSparkles } from "react-icons/lu";

interface FormData {
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
}

interface InputProps {
  formData: FormData;
  selectedIndications: string[];
  selectedRegions: string[];
  submitStatus: 'idle' | 'success' | 'error';
  submitMessage: string;
  isSubmitting: boolean;
  modalityOpen: boolean;
  phaseOpen: boolean;
  routeOpen: boolean;
  handleInputChange: (field: string, value: string) => void;
  handleIndicationToggle: (indication: string) => void;
  handleRegionToggle: (region: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setModalityOpen: (open: boolean) => void;
  setPhaseOpen: (open: boolean) => void;
  setRouteOpen: (open: boolean) => void;
  indications: string[];
  regions: string[];
}

const Input: React.FC<InputProps> = ({
  formData,
  selectedIndications,
  selectedRegions,
  submitStatus,
  submitMessage,
  isSubmitting,
  modalityOpen,
  phaseOpen,
  routeOpen,
  handleInputChange,
  handleIndicationToggle,
  handleRegionToggle,
  handleSubmit,
  setModalityOpen,
  setPhaseOpen,
  setRouteOpen,
  indications,
  regions
}) => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header - Outside the box */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
              <LuTarget className="w-6 h-6 text-blue-600" />
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

            {/* Development Context */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuBeaker className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Development Context</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    type="text"
                    value={formData.targetLaunchYear}
                    onChange={(e) => handleInputChange('targetLaunchYear', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="e.g., 2027, 2028-2030"
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
                            'iv': 'IV',
                            'subcutaneous': 'Subcutaneous',
                            'intramuscular': 'Intramuscular',
                            'topical': 'Topical',
                            'inhalation': 'Inhalation',
                            'other': 'Other'
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
                            { value: 'iv', label: 'IV' },
                            { value: 'subcutaneous', label: 'Subcutaneous' },
                            { value: 'intramuscular', label: 'Intramuscular' },
                            { value: 'topical', label: 'Topical' },
                            { value: 'inhalation', label: 'Inhalation' },
                            { value: 'other', label: 'Other' }
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

                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Clinical Trials
                  </label>
                  <textarea
                    value={formData.clinicalTrials}
                    onChange={(e) => handleInputChange('clinicalTrials', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="e.g., NCT12345678 - Phase 2, 150 patients, primary endpoint PFS..."
                  />
                </div>
              </div>
            </div>

            {/* Geographic Focus */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuGlobe className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Geographic Focus</h3>
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

            {/* Additional Notes */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LuFileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Additional Notes</h3>
              </div>
              <div>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Any additional context, competitive considerations, or strategic notes..."
                />
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
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
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
  );
};

export default Input;
