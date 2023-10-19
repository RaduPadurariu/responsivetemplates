import React from 'react'
import {FinancialNavbar} from './components/FinancialNavbar'
import FinancialHero from './components/FinancialHero';
import FinancialAbout from './components/FinancialAbout';
import FinancialTestimonials from './components/FinancialTestimonials';
import FinancialDemo from './components/FinancialDemo';
import FinancialFooter from './components/FinancialFooter';
import GoToTop from './components/GotToTop'
function FinancialApp() {
  return (
    <div>
      <FinancialNavbar />
      <FinancialHero/>
      <FinancialAbout/>
      <FinancialTestimonials/>
      <FinancialDemo/>
      <FinancialFooter/>
      <GoToTop/>
    </div>
  );
}

export default FinancialApp;