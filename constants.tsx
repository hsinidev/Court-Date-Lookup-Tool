
import React from 'react';

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export const CASE_TYPES = [
  "All Case Types", "Civil", "Criminal", "Traffic", "Family Law", "Probate", "Small Claims"
];

export const MODAL_KEYS = ['about', 'contact', 'guide', 'privacy', 'terms', 'dmca'] as const;
export type ModalKey = typeof MODAL_KEYS[number];

type ModalContent = {
    [key in ModalKey]: {
        title: string;
        content: React.ReactNode;
    }
}

export const MODAL_CONTENT: ModalContent = {
    about: {
        title: 'About Us',
        content: (
            <>
                <p>This Court Date Lookup Tool is a high-fidelity placeholder demonstration created to showcase modern web development techniques using React, TypeScript, and Tailwind CSS. It simulates the functionality of a real court records search portal to provide a user-friendly and authoritative interface.</p>
                <p className="mt-4">Our goal is to provide a clear and intuitive guide for users who need to navigate the often complex world of public court records. Please note that this is not a real search tool and does not connect to any live databases. All data displayed is fictional.</p>
            </>
        )
    },
    contact: {
        title: 'Contact Information',
        content: (
            <>
                <p>For inquiries regarding the development of this application or for professional consultations, please reach out to the developer, HSINI MOHAMED.</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>GitHub:</strong> <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/hsinidev</a></li>
                    <li><strong>Portfolio:</strong> <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a></li>
                    <li><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a></li>
                </ul>
            </>
        )
    },
    guide: {
        title: 'How to Use This Tool',
        content: (
            <>
                <p>This tool is designed to demonstrate how a typical court record search works. Follow these steps:</p>
                <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Party Search:</strong> Enter the First and Last Name of an individual involved in the case. Accurate spelling is crucial for real searches.</li>
                    <li><strong>Location:</strong> Select the State and enter the County or Jurisdiction where the case was filed. Court systems are typically organized by county.</li>
                    <li><strong>Case Type (Optional):</strong> If you know the type of case (e.g., Criminal, Traffic), selecting it can help narrow down the results in a real system.</li>
                    <li><strong>Search:</strong> Click the "Search Court Records" button to simulate the search.</li>
                    <li><strong>Results:</strong> The tool will display a placeholder results page with instructions and a link to guide you toward the official court portal for the state you selected.</li>
                </ol>
            </>
        )
    },
    privacy: {
        title: 'Privacy Policy',
        content: (
            <>
                <p>This is a demonstration application and does not collect, store, or transmit any personal information. Any data you enter into the search form is processed only within your browser and is discarded when you close the page.</p>
                <p className="mt-4">We do not use cookies or tracking technologies. Your privacy is fully respected as this is a static placeholder tool with no backend server interaction for data storage.</p>
            </>
        )
    },
    terms: {
        title: 'Terms of Service',
        content: (
            <>
                <p>By using this website, you agree that it is for demonstration and informational purposes only. The information provided is not legal advice and should not be relied upon as such.</p>
                <p className="mt-4">The owner and developer of this application are not responsible for any actions you take based on the simulated information presented. For accurate and official court records, you must consult the official government websites for the relevant jurisdiction.</p>
            </>
        )
    },
    dmca: {
        title: 'DMCA Notice',
        content: (
            <>
                <p>All content, design, and code on this website are original works created for demonstration purposes. We respect the intellectual property rights of others.</p>
                <p className="mt-4">If you believe that any content on this site infringes upon your copyright, please contact the developer, HSINI MOHAMED, via the email provided in the Contact section with a detailed description of the alleged infringement.</p>
            </>
        )
    }
}
