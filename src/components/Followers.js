import React from 'react';
import { Link } from 'react-router';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response => response.json())
        .then(
            followers => {
                this.setState({
                    followers: followers
                });
            }
        );
    }

    renderFollower(follower) {
        return (
            <li key={follower.login} className="list-group-item">
                <Link to={"/user/"+follower.login}>
                    <p>{follower.login}</p>
                </Link>
            </li>
        );
    }

    render() {

        if (!this.state.followers) {
            return (<div>LOADING...</div>);
        }

        const followers = this.state.followers;
        
        return (
            <div>
                <h2><Link to={"/user/"+this.props.params.username}>{this.props.params.username}</Link>'s Followers</h2>
                <ul className="list-group">
                    {followers.map(this.renderFollower)}
                </ul>
            </div>
        );
    }
};

export default Followers;
