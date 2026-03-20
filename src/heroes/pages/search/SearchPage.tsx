import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "../hero/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

export const SearchPage = () => {
  return (
    <>
        <CustomJumbotron 
            title="Busqueda Universe" 
            description="Heroes y villanos"
        />
         <HeroStats />

         <SearchControls />
            
    </>
  )
}
