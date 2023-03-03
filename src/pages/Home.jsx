import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "./../components/Preloader";
import { CategoryList } from "../components/CategoryList";

export const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
        });
    }, []);

    return (
        <div className="home">
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </div>
    );
};
