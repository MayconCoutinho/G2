import { useContext } from 'react';
import { CriarNoticiaRender } from "../../components/Admin/AdicionarPost";
import { EditarRender } from '../../components/Admin/Editar';
import { ExcluirRender } from '../../components/Admin/Excluir';
import { ButtonSair } from '../../components/Admin/buttonSair';
import { Header } from "../../components/Header";
import { NavButtonsAdmin } from "../../components/NavButtonsAdmin";
import { GlobalContext } from "../../global/context/useContext.js";
import { Token } from '../../hooks/token';

export const AdminPage = () => {
  Token()
  const { newsletter, pageNowAdmin, setPageUpdate, pageUpdate } = useContext(GlobalContext)

  return (
    <>
      <Header />
      <NavButtonsAdmin />

      <ButtonSair/>

      <EditarRender pageNowAdmin={pageNowAdmin} newsletter={newsletter} />
      <ExcluirRender
        pageNowAdmin={pageNowAdmin}
        newsletter={newsletter}
        pageUpdate={pageUpdate}
        setPageUpdate={setPageUpdate} />
      <CriarNoticiaRender pageNowAdmin={pageNowAdmin} />
    </>
  )
}

