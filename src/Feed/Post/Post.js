import React, {Component} from 'react';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} />
                <h4 className="card-title"><a href="#">{this.props.title}</a></h4>
                <div className="card-body">
                    <ul>
                        {this.props.tags.map(tag => {
                            return <li className="btn btn-default btn-sm btn-rect text-regular font-accent">#{tag}</li>
                        })}
                    </ul>
                    <h3><span className="fa fa-thumbs-o-up"></span> {this.props.likes}</h3>
                </div>
            </div>
        );
    }
}

export default Post;