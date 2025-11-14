
import React, { useState } from 'react';
import { US_STATES, CASE_TYPES } from '../constants';

const CourtLookupUI: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [state, setState] = useState(US_STATES[5]); // Default to California
  const [county, setCounty] = useState('');
  const [caseType, setCaseType] = useState(CASE_TYPES[0]);

  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !state || !county) {
      setError('First Name, Last Name, State, and County are required.');
      return;
    }
    setError('');
    setIsSearching(true);
    setHasSearched(false);

    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 2000);
  };

  const handleNewSearch = () => {
    setHasSearched(false);
    setFirstName('');
    setLastName('');
    setCounty('');
    setError('');
  };

  if (hasSearched) {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-slate-900/50 backdrop-blur-lg border border-slate-700 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Simulated Search Results</h2>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-lg font-semibold text-amber-400 mb-4">Important Notice: Placeholder Data</h3>
                <p className="text-slate-300 mb-6">
                    The results below are for demonstration purposes only. Official court records are maintained by state and county judicial systems. We provide this placeholder to guide your search. You must access the official <strong className="text-white">{state}</strong> court portal for live case information and status.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-slate-200 uppercase bg-slate-700/50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Case Number</th>
                                <th scope="col" className="px-6 py-3">Party Name</th>
                                <th scope="col" className="px-6 py-3">Hearing Date</th>
                                <th scope="col" className="px-6 py-3">Court Room</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-slate-800/50 border-b border-slate-700">
                                <td className="px-6 py-4">CV-2023-001234</td>
                                <td className="px-6 py-4">John Doe</td>
                                <td className="px-6 py-4">2024-10-15 09:00 AM</td>
                                <td className="px-6 py-4">Dept. 12</td>
                            </tr>
                            <tr className="bg-slate-800/50">
                                <td className="px-6 py-4">CR-2023-005678</td>
                                <td className="px-6 py-4">Jane Smith</td>
                                <td className="px-6 py-4">2024-11-02 02:30 PM</td>
                                <td className="px-6 py-4">Courtroom 5B</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 text-center">
                    <a 
                        href={`https://www.google.com/search?q=${state}+${county}+court+records`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
                    >
                        Access Official {state} Court Portal
                    </a>
                     <button 
                        onClick={handleNewSearch}
                        className="mt-4 md:mt-0 md:ml-4 inline-block bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
                    >
                        Start New Search
                    </button>
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-slate-900/50 backdrop-blur-lg border border-slate-700 rounded-lg shadow-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">Court Date Lookup Tool</h2>
      <p className="text-center text-slate-400 mb-8">Enter party and location information to find court records.</p>
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-slate-300">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-slate-300">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" />
          </div>
          <div>
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-slate-300">State</label>
            <select id="state" value={state} onChange={(e) => setState(e.target.value)} className="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="county" className="block mb-2 text-sm font-medium text-slate-300">County / Jurisdiction</label>
            <input type="text" id="county" value={county} onChange={(e) => setCounty(e.target.value)} className="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="e.g., Los Angeles" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="caseType" className="block mb-2 text-sm font-medium text-slate-300">Case Type (Optional)</label>
            <select id="caseType" value={caseType} onChange={(e) => setCaseType(e.target.value)} className="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              {CASE_TYPES.map(ct => <option key={ct} value={ct}>{ct}</option>)}
            </select>
          </div>
        </div>
        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
        <div className="text-center">
          <button type="submit" disabled={isSearching} className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition-colors duration-300 disabled:bg-blue-800 disabled:cursor-not-allowed flex items-center justify-center mx-auto shadow-lg">
            {isSearching ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : "Search Court Records"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourtLookupUI;
