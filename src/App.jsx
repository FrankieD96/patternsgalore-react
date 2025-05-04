import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Prints from './Pages/Prints';
import Frames from './Pages/Frames';
import Commissions from './Pages/Commissions';
import Basket from './Pages/Basket';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-mainPageBackground)]">
      <Navbar />

      <main className="p-8">
        <Routes>
          {/* Use Prints as the homepage for now */}
          <Route path="/" element={<Prints />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/frames" element={<Frames />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;



