import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="list-group-item">
                <Link to={stat.url}>
                    {stat.value} {stat.name}
                </Link>
            </li>
        );
    }

    render() {
        if (!this.state.user) {
            return (<div>LOADING...</div>);
        }

        const user = this.state.user;

        const stats = [
            {
                name: 'Public Repositories',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.params.username}/following`
            }
        ];

        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card h-100">
                             <div className="card-body">
        
                                    <img width="20%" src={user.avatar_url} alt={`${user.login} avatar`}/>
                                    <h2>{user.login} ({user.name})</h2>
                                    <p>{user.bio}</p>
        
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2>Statistics</h2>
                                 <ul className="list-group">
                                    {stats.map(this.renderStat)}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default User;
