import React from 'react'
import AboutCompany from "../components/AboutCompany/AboutCompany";
import ArticleAndNews from "../components/ArticleAndNews/ArticleAndNews";
import CompanyServiceSection from "../components/CompanyServiceSection/CompanyServiceSection";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import Newsletter from "../components/Newsletter/Newsletter";
import ProjectAndCases from "../components/ProjectAndCases/ProjectAndCases";
import ReferenceSection from "../components/ReferenceSection/ReferenceSection";
import ServiceConsulting from "../components/ServiceConsulting/ServiceConsulting";
import ShowCaseSection from "../components/ShowCaseSection/ShowCaseSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <ShowCaseSection />
      <ReferenceSection />
      <CompanyServiceSection />
      <AboutCompany />
      <ServiceConsulting />
      <WhyChooseUs />
      <ProjectAndCases />
      <MeetOurTeam />
      <ArticleAndNews />
      <Newsletter />
    </>
  )
}

export default Home