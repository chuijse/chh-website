"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

const initValues = { name: "", email: "", massage: "" };

export default function ContactForm() {
  const [state, setState] = useState(initValues);
  const textRef = useRef();
  const form = useRef();
  const [values, setValues] = useState();
  const [buttonMessage, setButtonMassege] = useState("Enviar");
  const [name, setName] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    //setValue(event.target.value);
  };

  console.log(state);

  /*
  const handleChange = (event) => {
    setValue(event.target.value);
  };*/

  /*
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
  */

  async function onSubmit(event) {
    event.preventDefault();
    sendEmail(state);
  }

  return (
    <form
      className="contact-form"
      autoComplete="off"
      ref={form}
      onSubmit={onSubmit}
    >
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
          onChange={(e) => setState({ ...state, massage: e.target.value })}
          ref={textRef}
        />
        <label htmlFor="message">Mensaje:</label>
      </div>
      <input type="submit" className="input_button"></input>
    </form>
  );
}
