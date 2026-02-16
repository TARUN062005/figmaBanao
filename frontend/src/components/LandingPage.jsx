import React from 'react';
import Header from './header/header';
import Hero from './Hero/Hero';
import Feauter from './Feauters/Feauter';
import InfoSection from './InfoSection/InfoSection';
import LogoCloud from './LogoCloud/LogoCloud';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const LandingPage = () => {
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
};

export default LandingPage;
