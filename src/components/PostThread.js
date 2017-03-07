import React, {Component, PropTypes} from 'react';
import PostItem from './PostItem';

class PostThread extends Component {
  render () {
    const posts = this.props.posts.map((post) => {
      return (
        <PostItem key={post.id} post={post} />
      );
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