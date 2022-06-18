import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={style.container}>
        <Circle backgroundColor="#178CA4" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="grey" right="-30vh" bottom="-60vh" className={style.circle}/>
      <h1 className={style.title}>Contactez-nous</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>ENVOYER</button>
      </form>
    </div>
  );
};

export default Contact;
