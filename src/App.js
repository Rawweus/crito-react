import "./App.css";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import ArticleAndNews from "./components/ArticleAndNews/ArticleAndNews";
import CompanyServiceSection from "./components/CompanyServiceSection/CompanyServiceSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import Newsletter from "./components/Newsletter/Newsletter";
import ProjectAndCases from "./components/ProjectAndCases/ProjectAndCases";
import ReferenceSection from "./components/ReferenceSection/ReferenceSection";
import ServiceConsulting from "./components/ServiceConsulting/ServiceConsulting";
import ShowCaseSection from "./components/ShowCaseSection/ShowCaseSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="wrapper">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
