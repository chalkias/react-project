import Home from './Home';
import Navigation from './Navigation';

function App() {
    return (
        <>
            <header id="header">
                <Navigation />
            </header>
            <main id="main">
                <Home />
            </main>
        </>
    );
}

export default App;