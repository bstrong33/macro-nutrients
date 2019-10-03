import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            message: '',
            toggleLogin: true
        }

    }

    toggleLogin = () => {
        this.setState({ toggleLogin: !this.state.toggleLogin})
    }

    render() {
        return (
            <div className='login-background'>
                {this.state.toggleLogin ?
                <div className='login'>
                    <div className='username'>
                        <p>Username:
                            <input
                                value={this.state.username} onChange={e => this.setState({ username: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='password'>
                        <p>Password:
                            <input
                                value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
                                type="password"
                            />
                        </p>
                    </div>
                    <button
                        onClick={this.toggleLogin}
                    >Register for Account</button>
                </div>
                :
                <div className='register'>

                </div>
                }
            </div>
        )
    }
}

export default Login;