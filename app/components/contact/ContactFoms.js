"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const initValues = { name: "", email: "", massage: "" };

export default function ContactForm() {
  const [state, setSatet] = useState(initValues);
  const textRef = useRef();
  const form = useRef();
  const [value, setValue] = useState();
  const [buttonMessage, setButtonMassege] = useState("Enviar");

  /*const handleChange = (event) => {
    setValue(event.target.value);
  };*/

  /*const values = state;
  console.log(values);

  const handleChange = ({ target }) => {
    setValue((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    console.log(target.value);
  };

  */

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

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
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
        <input
          name="user_name"
          required
          placeholder="Escriba aquí*"
          //value={values.name}
          //onChange={handleChange}
        />
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
