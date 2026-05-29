/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { PageShell } from './components/layout/PageShell';
import Home from './pages/Home';
import About from './pages/About';
import Solution from './pages/Solution';
import News from './pages/News';
import Demo from './pages/Demo';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* Multilingual Routes Wrapper */}
        <Route path="/:lang" element={<PageShell />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solution" element={<Solution />} />
          <Route path="news" element={<News />} />
          <Route path="demo" element={<Demo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="container mx-auto py-20 text-center"><h1 className="text-2xl font-bold text-ink">Page Not Found</h1><p className="text-slate mt-2">Error 404.</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}
