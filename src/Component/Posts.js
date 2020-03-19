// Posts.js

import React, { Component } from 'react'

export class posts extends Component {
    state={
        id :null
    }
    componentDidMount(){
        console.log(this.props);
        let id =this.props.match.params.posts_id
        this.setState({
            id :id
        })
    }
    render() {
        return (
            <div className="container">
                <h4>{this.state.id}</h4>
                
            </div>
        )
    }
}

export default posts
