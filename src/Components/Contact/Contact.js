import { useRef } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4nxta9u", "template_3dc75mj", form.current, {
        publicKey: "xQMjD94juk6RfmzYB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert('Mail Sent...Thank you!')
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className={classes.contactBg}>
      <h1 className={classes.header}>CONTACT</h1>
      <form className={classes.form} ref={form} onSubmit={sendEmail}>
        <div className={classes.inputDiv}>
          <label>Name</label>
          <input type="text" name="user_name" required/>
        </div>
        <div className={classes.inputDiv}>
          <label>Email</label>
          <input type="email" name="user_email" required/>
        </div>
        <div className={classes.inputDiv}>
          <label>Message</label>
          <textarea name="message" required/>
        </div>
        <div className={classes.btn}>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
