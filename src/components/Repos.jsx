import React from 'react';
import { Link } from 'react-router';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }

    renderRepo(repo) {
        return (
            <li key={repo.name} className="list-group-item">
                {repo.name}
            </li>
        );
    }

    render() {

        if (!this.state.repos) {
            return (<div>LOADING...</div>);
        }

        const repos = this.state.repos;
        
        return (
            <div>
                <h2><Link to={"/user/"+this.props.params.username}>{this.props.params.username}</Link>'s Repositories</h2>
                <ul className="list-group">
                    {repos.map(this.renderRepo)}
                </ul>
            </div>
        );
    }
};

export default Repos;
