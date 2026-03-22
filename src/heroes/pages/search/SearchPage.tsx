import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "../hero/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"

export const SearchPage = () => {
  return (
    <>
        <CustomJumbotron 
            title="Busqueda Universe" 
            description="Explora un universo donde el bien y el mal se enfrentan constantemente. Descubre historias, poderes y secretos de los héroes y villanos más icónicos"
        />
         <CustomBreadcrumb currentPage="Buscar superHeroes"/>

         <HeroStats />
 

         <SearchControls />
            
    </>
  )
}
