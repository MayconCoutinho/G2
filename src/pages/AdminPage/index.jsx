import { useContext } from 'react';
import { CriarNoticiaRender } from "../../components/Admin/AdicionarPost";
import { EditarRender } from '../../components/Admin/Editar';
import { ExcluirRender } from '../../components/Admin/Excluir';
import { GeralRender } from '../../components/Admin/Geral';
import { Header } from "../../components/Header";
import { NavButtonsAdmin } from "../../components/NavButtonsAdmin";
import { GlobalContext } from "../../global/context/useContext.js";

export const AdminPage = () => {
  const { newsletter, pageNowAdmin } = useContext(GlobalContext)

  return (
    <>
      <Header />
      <NavButtonsAdmin />
      <GeralRender pageNowAdmin={pageNowAdmin} />
      <EditarRender pageNowAdmin={pageNowAdmin} newsletter={newsletter} />
      <ExcluirRender pageNowAdmin={pageNowAdmin} newsletter={newsletter}/>
      <CriarNoticiaRender pageNowAdmin={pageNowAdmin} />
    </>
  )
}

