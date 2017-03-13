import React, {Component, PropTypes} from "react";
import PostItem from './PostItem';
import tags from './../data/tags';

class PostThread extends Component {
  render () {
    const posts = this.props.posts.map((post) => {
      // try to render list of tags for each post as well
      const tagsForPost = post.tags.map((tagId) => tags[tagId]);
      return <PostItem key={post.id} post={post} tags={tagsForPost} onRemoveTag={this.props.onRemoveTag}/>;
    });

    return <div>
      {posts}
    </div>;
  }
}

PostThread.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
};

export default PostThread;