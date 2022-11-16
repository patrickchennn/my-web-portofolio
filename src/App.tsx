import React from 'react';
import "./styles/app.scss";
import TopNav from './components/TopNav';
import HomePage from './components/HomePage';
import MainArticle from './components/MainArticle';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <HomePage />
      <MainArticle />
      <Footer />
      <ToastContainer bodyClassName="toastBody"/>
    </div>
  );
}
