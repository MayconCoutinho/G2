import { useContext } from "react";
import { CriarNoticiaRender } from "../../components/Admin/AdicionarPost";
import { AoVivo } from "../../components/Admin/AoVivo";
import { EditarRender } from "../../components/Admin/Editar";
import { ExcluirRender } from "../../components/Admin/Excluir";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { NavButtonsAdmin } from "../../components/NavButtonsAdmin";
import { GlobalContext } from "../../global/context/useContext.js";
import { Token } from "../../hooks/token";

export const AdminPage = () => {
  Token();
  const { newsletter, pageNowAdmin, setPageUpdate, pageUpdate } =
    useContext(GlobalContext);

  return (
    <>
      <HeaderAdmin />
      <NavButtonsAdmin />
      <EditarRender pageNowAdmin={pageNowAdmin} newsletter={newsletter} />
      <ExcluirRender
        pageNowAdmin={pageNowAdmin}
        newsletter={newsletter}
        pageUpdate={pageUpdate}
        setPageUpdate={setPageUpdate}
      />
      <CriarNoticiaRender pageNowAdmin={pageNowAdmin} />
      <AoVivo pageNowAdmin={pageNowAdmin} newsletter={newsletter} />
    </>
  );
};
