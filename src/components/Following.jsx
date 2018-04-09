import React from 'react';
import { Link } from 'react-router';

class Following extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/following`)
        .then(response => response.json())
        .then(
            following => {
                this.setState({
                    following: following
                });
            }
        );
    }

    renderUser(user) {
        return (
            <li key={user.login} className="list-group-item">
                <Link to={"/user/"+user.login}>
                    <p>{user.login}</p>
                </Link>
            </li>
        );
    }

    render() {

        if (!this.state.following) {
            return (<div>LOADING...</div>);
        }

        const following = this.state.following;
        
        return (
            <div>
                <h2>Followed by <Link to={"/user/"+this.props.params.username}>{this.props.params.username}</Link></h2>
                <ul className="list-group">
                    {following.map(this.renderUser)}
                </ul>
            </div>
        );
    }
};

export default Following;
