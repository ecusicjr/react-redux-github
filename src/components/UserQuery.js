import React from 'react';
import { Link }from 'react-router';

class UserQuery extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/search/users?q=${this.props.params.query}`)
        .then(response => response.json())
        .then(
            users => {
                this.setState({
                    users: users.items
                });
            }
        );
    }

    renderUser(user) {
        return (
            <li key={user.login} className="list-group-item">
                <Link to={"/user/"+user.login}>{user.login}</Link>
            </li>
        );
    }

    render() {

        if (!this.state.users) {
            return (<div>LOADING...</div>);
        }

        const users = this.state.users;
        
        return (
            <div>
                <h2>User results for "{this.props.params.query}"</h2>
                <ul className="list-group">
                    {users.map(this.renderUser)}
                </ul>
            </div>
        );
    }
};

export default UserQuery;
