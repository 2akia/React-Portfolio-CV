import styles from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";


function App() {
  return <div className={styles.App}>
    <Router>
    <Header />
    <Routes>
    <Route path="/React-Portfolio-CV/" element={<Home />} />
    <Route path="/React-Portfolio-CV/experience" element={<Experience />} />
    <Route path="/React-Portfolio-CV/projects" element={<Projects />} />
    <Route path="/React-Portfolio-CV/contact" element={<Contact />} />
    </Routes>
    </Router>
    
  </div>;
}

export default App;
