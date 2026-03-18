/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
          <AnimatedBackground />
          <Navigation />
          
          <main className="relative z-10">
            <div id="hero">
              <Hero />
            </div>
            <Experience />
            <Achievements />
            <Projects />
            <Certifications />
            <Education />
            
            {/* Footer */}
            <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 mt-12">
              <p>© {new Date().getFullYear()} Gottumukkala Amrutha. All rights reserved.</p>
            </footer>
          </main>
        </div>
      )}
    </>
  );
}
