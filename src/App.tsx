import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Education } from './components/Education.tsx';
import { Certifications } from './components/Certifications.tsx';
import { AchievementsAndSports } from './components/AchievementsAndSports.tsx';
import { PassionsAndInterests } from './components/PassionsAndInterests.tsx';
import { Contact } from './components/Contact.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main One-Page Long-Scrolling Structure in Exact Required Sequence */}
      <main className="flex-grow">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Education */}
        <Education />

        {/* 6. Certifications */}
        <Certifications />

        {/* 7. Achievements & Sports */}
        <AchievementsAndSports />

        {/* 8. Passions & Interests */}
        <PassionsAndInterests />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* The website ends cleanly after the Contact section. Strictly no footer. */}
    </div>
  );
}
