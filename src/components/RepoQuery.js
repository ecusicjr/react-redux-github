import React from 'react';

class RepoQuery extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/search/repositories?q=${this.props.params.query}`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos.items
                });
            }
        );
    }

    renderRepo(repo) {
        return (
            <li key={repo.id} className="list-group-item">
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
                <h2>Repo results for "{this.props.params.query}"</h2>
                <ul className="list-group">
                    {repos.map(this.renderRepo)}
                </ul>
            </div>
        );
    }
};

export default RepoQuery;
