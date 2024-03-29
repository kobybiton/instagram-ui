import React, {Component} from 'react';
import './Post.scss';
import TagList from "./TagList/TagList";

class Post extends Component {
    render() {
        return (
            <div className="card">
                <div className="header">
                    <img className="icon user" src="/user.png" alt="User"/><a href="/">{this.props.title}</a>
                </div>
                <div className="icons">
                    <img className="card-img-top" src={this.props.image} alt="card"/>
                    <img className="icon like" src="/like.png" alt="like"/>
                    <img className="icon comment" src="/comment.png" alt="comment"/>
                    <img className="icon share" src="/share.png" alt="share"/>
                </div>
                <div className="card-body">
                    <p>{this.props.likes} likes</p>
                    <TagList tags={this.props.tags}/>
                </div>
            </div>
        );
    }
}

export default Post;