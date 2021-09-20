import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import Header from './Components/Header';
import Banner from './Features/Banner';
import Body from './Features/Body';
import Footer from './Components/Footer';


function App() {
  const [dataVersion,setDataVersion] = useState([]);


  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'https://api.wordsmine.com/release-update';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        setDataVersion(responseJSON)
      } catch (error) {
        console.log('failed to fetch post list', error.message);
      }
    }
    fetchPostList();
  }, []);



  
  return (
    <Suspense fallback="loading">
      <div className="App">
          <Header/>
          <Banner dataVersion={dataVersion}/>
          <Body dataVersion={dataVersion}/>
          <Footer/>
      </div>
    </Suspense>
  );
}

export default App;
