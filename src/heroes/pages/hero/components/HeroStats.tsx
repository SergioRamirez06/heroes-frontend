import { Badge } from '@/components/ui/badge'
import { Heart, Trophy, Users, Zap } from 'lucide-react'
import { HeroCard } from './HeroCard'
import { useHeroSummary } from '@/hooks/useHeroSummary'
import { FavoriteHeroContext } from '@/context/FavoriteHeroContext'
import { use } from 'react'

export const HeroStats = () => {

  const { favoriteCount } = use( FavoriteHeroContext );
  
  const { data: summary } = useHeroSummary();

  if( !summary ) return null;

  return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            <HeroCard 
             title='Total Characters'
             icon={ <Users className="h-4 w-4 text-muted-foreground" />}
            >
              <div className="text-2xl font-bold">{ summary?.totalHeroes }</div>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                  { summary?.heroCount } Heroes
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  { summary?.villainCount } Villains
                </Badge>
              </div>
            </HeroCard>
            <HeroCard 
                title='Favorite'
                icon={ <Heart className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold text-red-600">{ favoriteCount }</div>
                <p className="text-xs text-muted-foreground">
                  { (favoriteCount / summary?.totalHeroes * 100).toFixed(2)}% of total
                </p>
            </HeroCard>

            <HeroCard 
                title='Strongest'
                icon={ <Zap className="h-4 w-4 text-muted-foreground" /> }
            >
                <div className="text-lg font-bold">{ summary?.strongestHero.alias }</div>
                <p className="text-xs text-muted-foreground">Strength: { summary?.strongestHero.strength }/10</p>
            </HeroCard>

            <HeroCard 
                title='Intelligence'
                icon={ <Trophy className="h-4 w-4 text-muted-foreground" /> }
            >
                <div className="text-lg font-bold">{ summary?.smartestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Intelligence: { summary?.smartestHero.intelligence }/10</p>
            </HeroCard>
        </div>
  )
}
