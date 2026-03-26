import AboutSection from "./AboutSection"
import WelcomeSection from "./WelcomeSection";
import SideBar from "./SideBar";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
function Body() {
  return (
    <>
    <main className="main-section mx-auto w-[80%] ">
      <WelcomeSection />
      <AboutSection />
      <SideBar />
      <ContactSection />
    </main> 
      <Footer />
    </>
  );
}
export default Body
