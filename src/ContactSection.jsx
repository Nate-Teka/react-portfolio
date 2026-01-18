import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", subject: "", messageBox: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    /* EmailJS logic remains same */
  };

  const inputClass = "text-black bg-field p-4 border-0 rounded m-4 w-full";

  return (
    <section className="flex flex-col mb-8 text-black">
      <h3 className="self-center text-4xl my-8 text-text" id="contactLink">Contact me</h3>
      <form onSubmit={handleSubmit} className="flex flex-col text-base bg-form rounded p-12 w-full max-w-[800px] self-center max-md:w-[95%]">
        {/* Reusable Input Group */}
        {['firstName', 'lastName', 'email', 'subject'].map((field) => (
          <div key={field} className="flex flex-col px-8 md:px-16">
            <label className="text-black capitalize">
              {field.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field}
              className={inputClass}
            />
          </div>
        ))}
        
        <div className="flex flex-col px-8 md:px-16">
          <label className="text-black">Message</label>
          <textarea
            name="messageBox"
            value={formData.messageBox}
            onChange={handleChange}
            placeholder="Enter your message here"
            className={`${inputClass} h-64 resize-none`}
          ></textarea>
        </div>

        <button type="submit" className="self-end text-white bg-accent border-none rounded-lg p-3 m-8 text-base transition-all duration-250 hover:-translate-y-1 hover:cursor-pointer">
          Send message
        </button>
      </form>
    </section>
  );
}
export default ContactSection;