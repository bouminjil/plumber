import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Contact from "./contact"
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Agence de Dépannage Plemberie</title>
        <meta
          name="description"
          content="Agence de service de depannage plemberie SOS"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
      <Contact/>
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
