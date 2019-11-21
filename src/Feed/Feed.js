import React, {Component} from 'react';
import './Feed.scss';
import Post from "./Post/Post";

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts: posts.slice(0, 10)});
            });
        setTimeout(() => { this.setState({isLoading: false}); }, 3000);

    }

    render() {
        return (
            <div className="container">
                {this.state.isLoading ? <img className="loader" src="/loader.gif" alt=""/> :
                    this.state.posts.map(post => {
                        return <Post title={post.title} image={post.image} tags={post.tags} likes={post.likes}/>
                    })
                }
            </div>
        );
    }
}

export default Feed;