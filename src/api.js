import { API_URL } from "./config";

export const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId);
    return response.json();
};

export const getAllCategories = async () => {
    const response = await fetch(API_URL + "categories.php");
    return response.json();
};

export const getFilteredCategories = async (catName) => {
    const response = await fetch(API_URL + "filter.php?c=" + catName);
    return response.json();
};
