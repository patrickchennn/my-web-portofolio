import {Send,ArrowRepeat} from "../Icons";
import emailjs from '@emailjs/browser';
import React,{ useRef } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactArticle() {
  const formValuesRef = useRef({
    from_name:"",
    from_email:"",
    message:"",
  });
  // console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  // console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const {from_name,from_email,message} = formValuesRef.current;
    if(!from_name || !from_email || !message){
      toast.info('Please fill all the blank.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    console.log(e.currentTarget);
    console.log(formValuesRef.current)
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID as string, 
      process.env.REACT_APP_EMAILJS_EMAIL_TEMPLATE as string, 
      e.currentTarget as HTMLFormElement, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
    )
      .then((result) => {
        console.log(result.text,"email sended");
        toast.success('Email sended!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, (error) => {
        console.log(error.text,"failed to send email");
        toast.warning('Failed to send email!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

  };
  return (
    <article className="contact-article">
      <h1 className="title">4. <span className="high-lighter">Let's Talk</span></h1>
      <form onSubmit={sendEmail}>
        {/* <ToastContainer bodyClassName="toastBody"/> */}
        <div className="input-txt-container">
          <div className="input-txt">
            <label htmlFor="name">Name</label>
            <input type="text" name="from_name" id="from_name"  onChange={e => formValuesRef.current.from_name=e.target.value}/>
          </div>
          <div className="input-txt">
            <label htmlFor="email">Email</label>
            <input type="text" name="from_email" id="from_email"  onChange={e => formValuesRef.current.from_email=e.target.value}/>
          </div>
        </div>


        <div className="textarea-message-container">
          <div className="textarea-message">
            <label htmlFor="Message">Message</label>
            <textarea name="message" id="message" cols={40} rows={5} wrap="hard" maxLength={195}  onChange={e => formValuesRef.current.message=e.target.value}></textarea>
          </div>
        </div>

        <div className="form-control-btns">
          <button 
            type="reset" 
            value="Reset" 
            onClick={()=>formValuesRef.current={
              from_name:"",
              from_email:"",
              message:"",
            }}>
            <ArrowRepeat/> Reset
          </button>
          <button type="submit" value="Send"><Send /> Send</button>
        </div>
      </form>
    </article>
  )
}
