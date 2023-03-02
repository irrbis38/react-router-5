import { useRouteMatch } from "react-router-dom";

export const Movie = () => {
    const value = useRouteMatch();
    console.log(value);
    return <div className="movie">Some movie</div>;
};
