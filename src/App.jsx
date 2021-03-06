import Landing from "./Home/Landing"
import About from "./Home/About"
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";

function App() {
	return (
        <div className="background">
            <Landing />
            <div className="container mx-auto p-8 space-y-40 lg:space-y-48 xl:space-y-56 2xl:space-y-64 lg:px-44 xl:px-72 2xl:px-80">
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
	);
}

export default App;