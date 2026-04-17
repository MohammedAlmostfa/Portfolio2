import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TechStackSection from '../components/sections/TechStackSection';
import DevNestSection  from '../components/sections/DevNestSection'
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components//sections/ContactSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <TechStackSection />
      <DevNestSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Home;