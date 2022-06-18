import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#114084" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>SERVICES</span> PLOMBERIE PROFESSIONELLE
        </h1>
        <p>
          <b>VOTRE INSTALLATION SANITAIRE SIMPLIFIÉE!
</b>
        </p>
        <p className={style.desc}>
        Nous nous intervenons dans tout local ou habitation neuve pour toute la plomberie de l’installation à la maintenance et nous sommes également hautement qualifiés dans les équipements de sanitaires spécifiques chez les particuliers.
        </p>
        
        <a className={style.button} href="+21626083035"> Appelez nous</a>
       
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/Plumbing-hero.svg"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
