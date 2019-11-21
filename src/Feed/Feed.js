import React, {Component} from 'react';
import './Feed.scss';
import Post from "./Post/Post";

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts: posts.slice(0, 10)});
            });
    }

    render() {
        return (
            <div className="container">
                {this.state.posts.map(post => {
                    return <Post title={post.title} image={post.image} tags={post.tags} likes={post.likes}/>
                })}
            </div>
        );
    }
}

export default Feed;