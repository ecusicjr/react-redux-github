import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="bg-light text-center">
                <header>
                    <h1><Link to="/">React-Redux Github Search</Link></h1>
                </header>
                <main className="container">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;