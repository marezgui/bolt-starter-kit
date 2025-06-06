import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <nav className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Bolt Starter Kit</h1>
              <div className="flex space-x-6">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
