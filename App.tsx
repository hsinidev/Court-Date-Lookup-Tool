
import React from 'react';
import Layout from './components/Layout';
import CourtLookupUI from './components/CourtLookupUI';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8 md:py-16">
        <CourtLookupUI />
        <div className="mt-24">
          <SeoArticle />
        </div>
      </main>
    </Layout>
  );
};

export default App;
