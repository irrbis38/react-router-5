import { API_URL } from "./config";

export const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId);
    return response.json();
};
