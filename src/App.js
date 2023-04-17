import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/Page-Container";
import { useSelector } from "react-redux";
import Card from "./components/Card"

function App() {
  const {drawer} = useSelector(state => state.drawer)
  return (
    <PageContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/" element={<d />} />
          <Route path="/" element={<d />} />
          <Route path="/" element={<d />} />
        </Routes>
        {
          drawer && <Card />
        }
        <Footer />
      </BrowserRouter>
    </PageContainer>
  );
}

export default App;
