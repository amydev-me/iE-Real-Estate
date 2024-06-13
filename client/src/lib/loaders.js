import apiRequest from "./apiRequest"

export const singlePageLoader = async ({ request, params }) => {
    const { data } = await apiRequest("/posts/" + params.id);
    return data;
};