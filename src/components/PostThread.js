import React, {Component, PropTypes} from 'react';
import PostItem from './PostItem';
import tags from './../data/tags';

class PostThread extends Component {
  render () {
    const posts = this.props.posts.map((post) => {
      // TODO: map each post object to PostItem component
      // try to render list of tags for each post as well
    });

    return <div>
      {posts}
    </div>;
  }
}

PostThread.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostThread;