import { useContext } from 'react';
import { GlobalContext } from "../../global/context/useContext.js";
import { AoVivoRender } from './AoVivo/index.jsx';
import { ButtonVejaMais } from './ButtonVejaMais/index.jsx';
import { CardsGeralRender } from './Geral/index.jsx';

export const Cards = () => {
    const { pageNow, newsletter, aoVivo } = useContext(GlobalContext)

    return (
        <>
            <CardsGeralRender newsletter={newsletter} pageNow={pageNow} />
            <AoVivoRender pageNow={pageNow} aoVivo={aoVivo} />
            <ButtonVejaMais pageNow={pageNow} />
        </>
    )
}
