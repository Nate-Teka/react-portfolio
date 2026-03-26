import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactSection() {
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    subject: "",
    messageBox: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !userInput.fullName ||
      !userInput.email ||
      !userInput.subject ||
      !userInput.messageBox
    ) {
      toast.error("Please fill in all required fields.");
      return;
    } else {
      console.log(userInput);
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        fullName: userInput.fullName,
        email: userInput.email,
        subject: userInput.subject,
        messageBox: userInput.messageBox,
      };

      const res = await emailjs.send(
        serviceID, // serviceID
        templateID, // templateID
        emailParams, // templateParams
        publicKey, // options (Your Public Key)
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          fullName: "",
          email: "",
          subject: "",
          messageBox: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
    console.log("Service:", serviceID);
    console.log("Template:", templateID);
    console.log("Public Key:", publicKey);
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
        className="form flex flex-col self-center text-base bg-form rounded w-[80%] max-w-150 bg-secondary pt-10 max-md:w-[95%]"
      >
        {["fullName", "email", "subject"].map((field) => (
          <div
            key={field}
            className="form-item flex flex-col px-8 mt-4 md:px-12 md:mt-0"
          >
            <input
              name={field}
              type={field === "email" ? "email" : "text"}
              value={userInput[field]}
              onChange={handleChange}
              className={`${inputClass} self-center`}
              placeholder=" "
              id={field}
              required
            />
            <label htmlFor={field}>
              {{
                fullName: "Name",
                email: "Email",
                subject: "Subject",
              }[field] || field}
            </label>
          </div>
        ))}

        <div className="form-item flex flex-col px-8 md:px-12">
          <textarea
            name="messageBox"
            value={userInput.messageBox}
            onChange={handleChange}
            className={`${inputClass} h-64 resize-none self-center`}
            placeholder=" "
            id="messageBox"
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
