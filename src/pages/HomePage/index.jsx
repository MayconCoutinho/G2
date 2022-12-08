import React from "react";
import { NewCard } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBottons } from "../../components/NavButtons";
import { PageNow } from "../../components/PageNow";

export const HomePage = () => {
  return (
    <>
      <Header />
      <NavBottons/>
      <PageNow/>
      <NewCard/>
      <Footer />
    </>
  )
}
