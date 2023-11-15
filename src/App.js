import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacts from "./views/Contacts";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import NotFound from "./views/NotFound";
import ServicePage from "./components/ServicePage/ServicePage";

import { ArticleProvider } from "./context/ArticleContext";
import NewsDetailsPage from "./components/NewsDetails/NewsDetailsPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <ArticleProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/newsdetails" element={<NewsDetails />} />
            <Route path="/newsdetails/:id" element={<NewsDetailsPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ArticleProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
