import { useState } from "react";
import emailjs from "@emailjs/browser";
function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    messageBox: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.messgae,
    }
    emailjs
    .send("service_pt830da", "template_hdxzqem", templateParams, "y3oywZ6JHKwUo06Nq")
    .then(
      (response)=>{
      console.log("Email sent succesfully: ", Response);
      alert("Email sent succesfully!");
    },
    (error)=>{
      console.log("Email failed to send: ", error);
      alert("Email failed to send");
    })
  };
  
  return (
    <>
      <section className="contact-section">
        <h3 className="contact-section__header" id="contactLink">
          Contact me
        </h3>
        <form
          onSubmit={handleSubmit}
          className="contact-section__form"
          id="message__form"
        >
          <div className="contact-section__form__form-groups">
            <label
              for="first-name"
              className="contact-section__form__form-groups__label"
            >
              First name
            </label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="contact-section__form__input"
            />
          </div>
          <div className="contact-section__form__form-groups">
            <label
              for="last-name"
              className="contact-section__form__form-groups__label"
            >
              Last name
            </label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="contact-section__form__input"
            />
          </div>
          <div className="contact-section__form__form-groups">
            <label
              name="email"
              for="email"
              className="contact-section__form__form-groups__label"
            >
              E-mail
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="contact-section__form__input"
            />
          </div>
          <div className="contact-section__form__form-groups">
            <label
              name="subject"
              for="subject"
              className="contact-section__form__form-groups__label"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="contact-section__form__input"
            />
          </div>
          <div className="contact-section__form__form-groups">
            <label
              name="email"
              for="messageBox"
              className="contact-section__form__form-groups__label"
            >
              Message
            </label>
            <textarea
              name="messageBox"
              value={formData.messageBox}
              onChange={handleChange}
              placeholder="Enter your message here"
              className="contact-section__form__textarea"
            ></textarea>
          </div>
          <button type="submit" className="contact-section__form__button">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
export default ContactSection;
