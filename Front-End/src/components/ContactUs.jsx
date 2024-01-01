import React from 'react';
import './ContactUs.css';

export function ContactUs(){
  const phoneNumber = "+1 (123) 456-7890";
  const emailAddress = "contact@aarogyasathi.com";

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or questions.</p>

      <div className="contact-details">
        <p>Phone: {phoneNumber}</p>
        <p>Email: {emailAddress}</p>
      </div>

      <div className="additional-details">
        <h2>Additional Information</h2>
        <p>Our office hours are Monday to Friday, 9:00 AM - 5:00 PM.</p>
        <p>We usually respond to emails within 24 hours.</p>
        <p>Address: Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
        <div className="social-links">
          
        </div>
      </div>
    </div>
  );
};


