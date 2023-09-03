"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const textRef = useRef();
  const form = useRef();
  const [value, setValue] = useState();
  const [buttonMessage, setButtonMassege] = useState("Enviar");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonMassege("enviado");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message, try again later");
        }
      );
  };

  return (
    <form
      className="contact-form"
      autoComplete="off"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="input_half">
        <input name="user_name" required placeholder="Escriba aquí*" />
        <label htmlFor="user_name">Nombre:</label>
      </div>
      <div className="input">
        <input
          type="email"
          name="user_mail"
          required
          placeholder="Escriba aquí"
        />
        <label htmlFor="user_mail">Mail:</label>
      </div>
      <div className="input_textarea">
        <textarea
          type="text"
          name="message"
          required
          placeholder="Escriba aquí"
          onChange={handleChange}
          ref={textRef}
        />
        <label htmlFor="message">Mensaje:</label>
      </div>
      <button type="submit" className="input_button">
        {buttonMessage}
      </button>
    </form>
  );
}
