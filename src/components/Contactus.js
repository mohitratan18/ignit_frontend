// ContactUs.jsx
import { React, useState } from "react";
import styles from "./ContactUs.module.css"; // Import the CSS module
import { apiUrl } from "../config";
const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const handlesubmit = async () => {
    let url = `${apiUrl}/contactus/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        email:email,
        message:message
      }),
    });
    const json = await response.json()
    console.log(json);
    alert("submitted")
  };
  return (
    <div className={styles.contactForm}>
      <div className={styles.formContainer}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={e => setname(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={e => setemail(e.target.value)}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onChange={e => setmessage(e.target.value)}></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary text-black"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
