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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("A test to work");
    /* EmailJS logic remains same */
  };

  const inputClass =
    "text-white p-4 m-4 w-full placeholder:text-white transition-all duration-300 ease";
  return (
    <section className="flex flex-col mb-8 text-black" id="contactmeLink">
      <h3 className="self-center text-4xl my-8 text-white" id="contactLink">
        Contact me
      </h3>
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col self-center text-base bg-form rounded w-[80%]  bg-secondary pt-10 max-md:w-[95%]"
      >
        {["Full name", "Email", "Subject"].map((field) => (
          <div
            key={field}
            className="form-item flex flex-col px-8 mt-4 md:px-12 md:mt-0"
          >
            <input
              name={field}
              type={field === "email" ? "email" : "text"}
              value={formData[field]}
              onChange={handleChange}
              className={`${inputClass} self-center`}
              required
            />
            <label htmlFor={field}>{field}</label>
          </div>
        ))}

        <div className="form-item flex flex-col px-8 md:px-12">
          <textarea
            name="messageBox"
            value={formData.messageBox}
            onChange={handleChange}
            className={`${inputClass} h-64 resize-none self-center`}
            required
          ></textarea>
          <label htmlFor="messageBox">Message</label>
        </div>

        <button
          type="submit"
          className="self-end text-white bg-accent border-none rounded-lg p-3 m-8 text-base transition-all duration-250 hover:-translate-y-1 hover:cursor-pointer"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
export default ContactSection;
