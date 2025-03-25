import "./App.css";
import AboutContent from "./components/about_content";
import BlogContent from "./components/blog_content";
import DetailsContent from "./components/details_content";
import EventContent from "./components/event_content";
import Home from "./components/home_content";
import MenuContent from "./components/menu_content";
import NavBar from "./components/nav_bar";
import ReviewContent from "./components/review_content";

function App() {
  return (
    <>
      <NavBar />
      <Home />
       <MenuContent />
      <AboutContent />
      <EventContent />
      <DetailsContent />
      <ReviewContent />
      <BlogContent />
    </>
  );
}

export default App;
