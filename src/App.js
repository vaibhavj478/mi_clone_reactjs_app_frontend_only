
import './App.css';
import PreNavbar from './my_components/PreNavbar';
import Navbar from './my_components/Navbar.js';
import Slider from './my_components/Slider.js';
import data from './data/data.json';
import Offers from "./my_components/Offers.js"
import Heading from "./my_components/Heading.js"
import StarProduct from "./my_components/StarProduct.js"
import HotAccessoriesMenu from "./my_components/HotAccessoriesMenu.js"
import HotAccessories from "./my_components/HotAccessories.js"
import ProductReviews from "./my_components/ProductReviews.js"
import Videos from "./my_components/Videos.js"
import Banner from "./my_components/Banner.js"
import Footer from "./my_components/Footer.js"
import NavOptions from "./my_components/NavOptions.js"


// *****router ****
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />

        <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio} />

        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        <Route exact path="/music">
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        </Route>

        <Route exact path="/smartDevice">
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        </Route>

        <Route exact path="/mobileAccessories">
          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
        </Route>

        <Route exact path="/">
          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
        </Route>

        <Route exact path="/lifestyle">
          <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />
        </Route>

        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews ProductReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        < Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner Banner={data.banner} />

        <Footer footer={data.footer} />
      </Router>
    </>
  );
}

export default App;
