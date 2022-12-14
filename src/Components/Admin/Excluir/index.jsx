import { CardsRender } from "./Cards"

export const ExcluirRender = ({ pageNowAdmin, newsletter }) => {
  if (pageNowAdmin.toLowerCase() === "excluir") {
    return <>
    <h1> Excluir </h1>
    <CardsRender newsletter={newsletter} pageNow={"geral"}/>
    </>
  }
}
