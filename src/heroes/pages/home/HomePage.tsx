import { use, useMemo } from "react"
import { useSearchParams } from "react-router"
import { Heart } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "../hero/components/HeroStats"
import { HeroGrid } from "../hero/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { useHeroSummary } from "@/hooks/useHeroSummary"
import { usePaginatedHero } from "@/hooks/usePaginatedHero"
import { FavoriteHeroContext } from "@/context/FavoriteHeroContext"

export const HomePage = () => {

  const [searchParams, setSearchParams ] = useSearchParams();
  const { favoriteCount, favorite } = use( FavoriteHeroContext );
  
    
  const activeTabs = searchParams.get('tab') ?? "all"
  const page = searchParams.get('page') ?? "1";
  const limit = searchParams.get('limit') ?? "7";
  const category = searchParams.get('category') ?? "all";


    
  const selectTabs = useMemo(() => {
    const validTabs = ["favorites", "heroes", "villains", "all"]
    return validTabs.includes(activeTabs) ? activeTabs : 'all'
  },[activeTabs])

  const { data: heroesResponse} = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();
  
  return (
      <>
        {/* Header */}
        <CustomJumbotron 
          title="Superheroes Universe" 
          description="Explora un universo donde el bien y el mal se enfrentan constantemente. Descubre historias, poderes y secretos de los héroes y villanos más icónicos."
        />
        <CustomBreadcrumb currentPage="Super Heroes"/>

        {/* Stats Dashboard */}
        <HeroStats />


        {/* Tabs */}
        <Tabs value={ selectTabs } className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
              value="all" 
              onClick={() => setSearchParams( (prev) => {
                prev.set('tab', 'all')
                prev.set('category', 'all')
                prev.set('page', '1')

                return prev;
              })}
            >
              All Characters ({ summary?.totalHeroes })
            </TabsTrigger>

            <TabsTrigger 
              value="favorites" 
              className="flex items-center gap-2" 
              onClick={() => setSearchParams( (prev) => {
                prev.set('tab', 'favorites')

                return prev;
              })}
            >
              <Heart className="h-4 w-4" />
              Favorites ({favoriteCount})
            </TabsTrigger>

            <TabsTrigger 
              value="heroes" 
              onClick={() => setSearchParams( (prev ) => {
                prev.set('tab', 'heroes')
                prev.set('category', 'hero')
                prev.set('page', '1')

                return prev;
              })}
            >
              Heroes ({ summary?.heroCount })
            </TabsTrigger>

            <TabsTrigger 
              value="villains" 
              onClick={() => setSearchParams( (prev ) => {
                prev.set('tab', 'villain')
                prev.set('category', 'villain')
                prev.set('page', '1')

                return prev;
              })}
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            Todos los heroes
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] } />
          </TabsContent>

          <TabsContent value="favorites">
            favoritos
            <HeroGrid heroes={ favorite ?? [] } />
          </TabsContent>
          
          <TabsContent value="heroes">
            heroes
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] } />
          </TabsContent>

          <TabsContent value="villains">
            villanos
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] } />
          </TabsContent>
        </Tabs>


        {/* Pagination */}
        {
          selectTabs !== 'favorites' && (
              <CustomPagination totalPage={heroesResponse?.pages ?? 1 }/>
          )
        }

      </>
  )
}

