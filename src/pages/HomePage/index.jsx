import React from "react";
import { NewCard } from "../../Components/Card";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { NavBottons } from "../../Components/NavButtons";

export const HomePage = () => {

  return (
    <>
      <Header />
      <NavBottons/>
      <NewCard/>
      <NewCard/>
      <NewCard/>
      <NewCard/>
      <NewCard/>
      <NewCard/>
      <Footer />
    </>
  )
}
