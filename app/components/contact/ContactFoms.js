"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

const initValues = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [state, setState] = useState(initValues);
  const textRef = useRef();
  const [buttonMessage, setButtonMassege] = useState("Enviar");
  const [value, setValue] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    sendEmail(state, setButtonMassege);
  }

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //console.log(state);

  return (
    <form className="contact-form" autoComplete="off" onSubmit={onSubmit}>
      <div className="input_half">
        <input
          name="user_name"
          required
          placeholder="Escriba aquí*"
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <label htmlFor="user_name">Nombre:</label>
      </div>
      <div className="input">
        <input
          type="email"
          name="user_mail"
          required
          placeholder="Escriba aquí"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="user_mail">Mail:</label>
      </div>
      <div className="input_textarea">
        <textarea
          type="text"
          name="message"
          required
          placeholder="Escriba aquí"
          onChange={
            ((e) => setState({ ...state, message: e.target.value }),
            handleChange)
          }
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
