import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleSubmit2 = this._handleSubmit2.bind(this);
        this._handleSubmit3 = this._handleSubmit3.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }

    _handleSubmit2(e) {
        e.preventDefault();
        history.push(`/search/user/${this.refs.userInput2.value}`)
    }

    _handleSubmit3(e) {
        e.preventDefault();
        history.push(`/search/repo/${this.refs.userInput3.value}`)
    }


    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="card h-100">
                         <div className="card-body">
    
                         <h2>Enter a GitHub username</h2>
                <form onSubmit={this._handleSubmit}>
                    <div className="form-group">
                    <input ref="userInput" className="form-control" type="text" />
                    </div>
                    <button className="btn btn-dark">Go</button>
                </form>
    
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card h-100">
                        <div className="card-body">

                        <h2>Find a User or Repo</h2>
                <form onSubmit={this._handleSubmit2}>
                    <div className="form-group">
                    <input ref="userInput2" className="form-control" type="text" placeholder="username" />
                    </div>
                    <button className="btn btn-dark">Search</button>
                </form>

                <h2>or</h2>

<form onSubmit={this._handleSubmit3}>
                    <div className="form-group">
                    <input ref="userInput3" className="form-control" type="text" placeholder="repository" />
                    </div>
                    <button className="btn btn-dark">Search</button>
                </form>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;