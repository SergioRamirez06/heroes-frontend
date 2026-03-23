import { heroApi } from "../api/heroe.api"
import type { Hero } from "../types/heroes.interface"

interface Options {
    name?: string,
    category?: string,
    status?: string,
    universe?: string,
    team?: string,
    strength?: string
}
const BASE_URL = import.meta.env.VITE_API_URL


export const getSearchHeroesActions = async(options: Options) => {

    const { category, name, status, strength, team, universe } = options;

    if( !category && !name && !status && !strength && !team && universe ) {
        return []
    }

    const { data } = await  heroApi.get<Hero[]>(`/search/`, {
        params: {
            category, 
            name, 
            status, 
            strength, 
            team, 
            universe
       }
    })

    return data.map( hero => ({
        ...hero,
        image: `${BASE_URL}/images/${ hero.image }`
    }))

}