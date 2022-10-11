import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import AboutMe from "./aboutMe";
import MyProjects from "./myProjects";
import Logo from "./logo";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const setFormOpen = (value: boolean): void => {
    setOpen(value);
  };

  return (
    <div className="overflow-hidden">
      <Navbar setFormOpen={setFormOpen} />
      <Logo />
      <AboutMe handleClick={handleOpen} />
      <ContactForm open={open} setOpen={setOpen} />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Home;
