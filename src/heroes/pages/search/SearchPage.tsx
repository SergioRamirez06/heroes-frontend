import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "../hero/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { HeroGrid } from "../hero/components/HeroGrid"
import { useQuery } from "@tanstack/react-query"
import { getSearchHeroesActions } from "@/heroes/actions/get-search-heroes.action"
import { useSearchParams } from "react-router"

export const SearchPage = () => {

  const [ searchParams ] = useSearchParams()

  const name = searchParams.get('name')  || undefined;
  const strength = searchParams.get('strength')  || undefined;


  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => getSearchHeroesActions({ name, strength }),
    staleTime: 1000 * 6 * 5 //5 minuto
  })

  return (
    <>
        <CustomJumbotron 
            title="Busqueda Universe" 
            description="Explora un universo donde el bien y el mal se enfrentan constantemente. Descubre historias, poderes y secretos de los héroes y villanos más icónicos"
        />
         <CustomBreadcrumb currentPage="Buscar superHeroes"/>

         <HeroStats />
 

         <SearchControls />

         <HeroGrid heroes={heroes} />
            
    </>
  )
}
