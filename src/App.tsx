import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import General from './pages/General';
import LSPD from './pages/LSPD';
import EMS from './pages/EMS';
import Illegal from './pages/Illegal';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/lspd" element={<LSPD />} />
          <Route path="/ems" element={<EMS />} />
          <Route path="/illegal" element={<Illegal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
