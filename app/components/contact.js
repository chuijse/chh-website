export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Te invito a escribirme a través de este formulario</p>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          id="form_name"
          name="form_name"
          required
          placeholder="Escriba aquí"
        />
        <label>Asunto:</label>
        <input
          type="text"
          id="form_subject"
          name="form_subject"
          required
          placeholder="Escriba aquí"
        />
        <label>Mail:</label>
        <input
          type="email"
          id="form_mail"
          name="form_mail"
          required
          placeholder="Escriba aquí"
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          type="text"
          id="form_message"
          name="form_message"
          required
          placeholder="Escriba aquí"
        ></textarea>
        <input type="submit" />
      </form>
    </section>
  );
}
