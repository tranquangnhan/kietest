import './App.css';
import React, { Suspense } from 'react';
import Header from './Components/Header';
import Banner from './Features/Banner';
import Body from './Features/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
          <Header/>
          <Banner/>
          <Body/>
          <Footer/>
      </div>
    </Suspense>
  );
}

export default App;
