import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.Column}>
        <h1 className={style.title}>Depannage Plemberie .</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>Rapide & Professionnelle</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.Column}>
        
        <div className={style.cardItem}>
          E-mail : CONTACT@DPP.COM
          <br />
          <br /> 
          Tél :     26083035
        </div>
      </div>
      

      <div className={style.Bottom_Column}>
          © 2022 BERRIRI SAHBI, ALL RIGHTS RESERVED
      </div>

    </div>
  );
};

export default Footer;
