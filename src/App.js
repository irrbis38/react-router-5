import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Movie } from "./pages/Movie";

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
                        <Route path="/movies/:id" component={Movie} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
