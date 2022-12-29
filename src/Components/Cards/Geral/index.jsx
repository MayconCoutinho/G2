import { GeneroNoticia } from './GeneroNoticia/index.jsx';
import { SkeletonRender } from './SkeletonRender/index.jsx';
import { TodosGenero } from './TodosGenero/index.jsx';

export const CardsGeralRender = ({ newsletter, pageNow }) => {
  return (newsletter.length > 0 ?
    <>
      <TodosGenero newsletter={newsletter} pageNow={pageNow} />
      <GeneroNoticia newsletter={newsletter} pageNow={pageNow} />
    </>
    :
      <SkeletonRender />
  )
}
