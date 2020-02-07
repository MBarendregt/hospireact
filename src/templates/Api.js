import React, { Component } from 'react';
class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

}
export default Api;