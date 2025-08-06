import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;