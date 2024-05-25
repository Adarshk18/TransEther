import {
    NavBar,
    Transactions,
    Footer,
    Welcome,
    Services,
    Loader,
} from "./components";

const App = () => {
    return ( <
        div className = "min-h-screen" >
        <
        div className = "gradient-bg-welcome" >
        <
        NavBar / >
        <
        Welcome / >
        <
        /div> <
        Transactions / >
        <
        Services / >
        <
        Footer / >

        <
        /div>
    );
};

export default App;