import React from "react";
import "../styles/quick-link.scss";
import { Link45deg,GitHub,Instagram,Twitter,Linkedin } from "./Icons";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QuickLink(){
  const handleCopyEmailClick = (e: React.SyntheticEvent) => {
    const target = e.currentTarget;
    const email: string = target.parentElement!.innerText;
    navigator.clipboard.writeText(email);
    toast.success('Email copied!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="quick-link-container">    
      <nav className="quick-link-nav">
        <a href="#a" aria-label="GitHub" target="_blank" rel="noreferrer">
          <GitHub />
        </a>

        <a href="#b" aria-label="Instagram" target="_blank" rel="noreferrer">
          <Instagram />
        </a>

        <a href="#c" aria-label="Twitter" target="_blank" rel="noreferrer">
          <Twitter />
        </a>


        <a href="#d" aria-label="Linkedin" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
      </nav>
      <div className="quick-link-email">
        patrick.chen31@gmail.com <button onClick={handleCopyEmailClick}><Link45deg/></button>
      </div>
      
      {/* <ToastContainer /> */}
    </div>
  )
}


/*s
<svg viewBox="0 0 24 24" width="100%" height="100%" fill="var(--toastify-icon-color-success)"><path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path></svg>
*/