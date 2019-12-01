import React, {Component} from 'react';
import './TagList.scss';

class TagList extends Component {
    render() {
        return (
            <div className="tag-list">
                {this.props.tags.map(tag => {
                    return <a className="tag" href="/">#{tag}</a>
                })}
            </div>
        );
    }
}

export default TagList;