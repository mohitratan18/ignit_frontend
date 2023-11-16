// ContactUs.jsx
import React from 'react';
import styles from './ContactUs.module.css'; // Import the CSS module

const ContactUs = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.formContainer}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="button" className='btn btn-primary text-black'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
