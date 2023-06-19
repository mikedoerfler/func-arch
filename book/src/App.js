import './App.css';
import React from "react";
import ColorSearch from "./ColorSearch";
import ColorList from "./ColorList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ColorSearch/>
                <ColorList/>
            </header>
        </div>
    );
}

export default App;
