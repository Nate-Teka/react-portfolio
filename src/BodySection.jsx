
import AboutSection from "./AboutSection"
import WelcomeSection from "./WelcomeSection";
import SideBar from "./SideBar";
import ContactSection from "./ContactSection";
import Footer from "./footer";
function Body() {
  return (
    <>
    <main className="main-section">
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
