import React, { useEffect, useRef } from 'react';
import "./styles/app.scss";
import TopNav from './components/TopNav';
import HomePage from './components/HomePage';
import MainArticle from './components/MainArticle';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export default function App() {
  // const ref = useRef(null);
  const articlesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    console.log(articlesRef)
  },[])
  
  return (
    <div className="App">
      <TopNav articlesDOM={articlesRef}/>
      <HomePage />
      <MainArticle ref={articlesRef} />
      <Footer />
      <ToastContainer bodyClassName="toastBody"/>
    </div>
  );
}
