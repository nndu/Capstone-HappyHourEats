import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "../src/components/Main/Main"
import SpecialDeals from "./components/SpecialDeals/SpecialDeals.jsx";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails.jsx";
import Explore from "./components/Explore/Explore.jsx";
import Login from "./components/Login/Login.jsx";
import Review from "./components/Review/Review.jsx";
//import RestaurantInfo from "./components/RestaurantInfo/RestaurantInfo.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/special" element={<SpecialDeals />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/user" element={<Login />} />
        <Route path="/review" element={<Review />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
