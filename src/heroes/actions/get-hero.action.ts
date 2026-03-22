import { heroApi } from "../api/heroe.api";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async( idSlug: string ) => {

    const { data } = await heroApi.get(`/${idSlug}`);

    return {
        ...data,
        image: `${BASE_URL}/images/${ data.image }`
    }
}