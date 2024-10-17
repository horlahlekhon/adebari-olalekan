import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const recipient = 'adebari.olalekan.oluwaseun@gmail.com';
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const mailToLink = `mailto:${recipient}?subject=${subject}&body=${message}`;
    console.log(mailToLink);
    window.location.href = mailToLink;
  };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          {/*<div className="col-12 col-md-6">*/}
          {/*  <div className="form-group">*/}
          {/*    <input type="text" name="name" placeholder="YOUR NAME" required />*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="col-12 col-md-6">*/}
          {/*  <div className="form-group">*/}
          {/*    <input*/}
          {/*      type="email"*/}
          {/*      name="user_email"*/}
          {/*      placeholder="YOUR EMAIL"*/}
          {/*      required*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="ENTER SUBJECT"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
