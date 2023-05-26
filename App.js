import './style/App.css';
import './style/Header.css';
import './style/Home.css';
import './style/Footer.css';
import './style/Contact.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componant/Header.js';
import Home from './componant/Home.js';
import Footer from './componant/Footer.js';
import Contact from './componant/Contact.js';
import Service from './componant/Service.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Service'} element={<Service />} />
          <Route path={'/Contact'} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;