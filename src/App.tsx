import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Home } from './pages/Home';
import { Now } from './pages/Now';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/now" element={<Now />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;