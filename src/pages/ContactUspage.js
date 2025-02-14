import React from "react";

const ContactUspage = () => {
  return (
    <div class="cont-container">
      <div class="contact-box">
        <div class="left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60952.88666490492!2d74.15605481785066!3d17.28873079662746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc182450c753bad%3A0xb3493b19ae7886ca!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1739523386037!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="right">
          <h2>Contact Us</h2>
          <input type="text" class="field" placeholder="Enter Your Name" />
          <input type="text" class="field" placeholder="Enter Your Email" />
          <input
            type="text"
            class="field"
            placeholder="Enter Your Phone Number"
          />
          <textarea placeholder="Message" class="field"></textarea>

          <button class="btn-c">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUspage;
