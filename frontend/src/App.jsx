import React from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/Hero/Hero';
import Feauter from './components/Feauters/Feauter';
import InfoSection from './components/InfoSection/InfoSection';
import LogoCloud from './components/LogoCloud/LogoCloud';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Feauter />
        <InfoSection />
        <LogoCloud />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;