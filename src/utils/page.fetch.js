import { notFound } from "next/navigation";

export const getDataBySlug = async (slug) => {

    try {

        if (!slug) throw new Error()

        const response = await fetch(process.env.BASE_API_URL + slug, {
            cache: 'no-store',

        });
        const result = await response.json();

        if (response.statusText !== 'OK') {
            throw new Error()
        }

        if (result.data) {
            return result.data;
        }
        else {
            throw new Error()
        }
    }
    catch (error) {
        return notFound()
    }
}