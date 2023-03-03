import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/category/:name" component={Category} />
                        <Route path="/meal/:id" component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
