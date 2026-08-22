import { useState } from 'react'
import Header from './Component/layout/Header/Header'
import './App.css'
import HeroSection from './Component/layout/Hero/Hero'
import HowItWorks from './Component/layout/Card/Card'
import FeaturedJobs from './Component/layout/JobCard/JobCard'
import Categories from './Component/layout/Category/Category'
import Testimonials from './Component/layout/Review/Review'
import Footer from './Component/layout/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobsSection from './Component/HeaderSec/JobSection/JobSection'
import Imployer from './Component/HeaderSec/Imployer/Imployer'
import About from './Component/HeaderSec/AboutUs.jsx/aboutUs.jsx'
import Resume from './Component/HeaderSec/Resume/Resume'
import Job from './Component/HeaderSec/JobSection/JobSection'
import CategoryPage from './Component/layout/Category/CategoryPage' 
import PostJob from './Component/HeaderSec/Postjob/Postjob.jsx'
// import ApplicationsSection from './Component/layout/Applicationcenter/Applicationcenter.jsx'


function Main() {
  return (
    <div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              {/* <ApplicationsSection/> */}
              <Categories />
              <FeaturedJobs onViewAll={() => {}} />
              <HowItWorks />
              <Testimonials />
            </>
          } />
          <Route path="/about"    element={<About />}      />
          <Route path="/Job"      element={<JobsSection />}        />
          <Route path="/Resume"   element={<Resume />}     />
          <Route path="/Imployer" element={<Imployer />}   />
          <Route path="/PostJob" element={<PostJob />}   />

          <Route path="/jobs/:slug" element={<CategoryPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Main