import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};

function FormStyle({ props }) {
  const [result, showresult] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_hbfy1dm",
        "template_4y9cimd",
        {
          fullname,
          email,
          phone,
          company,
          message,
        },
        "CJI5SdL0Cl7exGh5-"
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(
          "There was and error after trying to send the message: ",
          error
        );
      });

    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 10000);

  return (
    <div className="form-wrapper">
      <form action="" onSubmit={sendEmail}>
        <div className="rn-form-group">
          <input
            type="text"
            name="fullname"
            placeholder="Your Name"
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className="rn-form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="rn-form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="rn-form-group">
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div className="rn-form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="rn-form-group">
          <button
            className="btn-default"
            type="submit"
            value="submit"
            name="submit"
            id="mc-embedded-subscribe"
          >
            Send
          </button>
        </div>

        <div className="rn-form-group">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
}
export default FormStyle;
