import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import "./App.css";
import posts from "./data/posts";
import AppPost from "./components/AddPost";
import AddPostModal from "./components/AddPostModal";
import PostThread from "./components/PostThread";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor (props) {
    super(props);

    this.handleAddPost = this.toggleAddPostModal.bind(this, true);
    this.handleAddPostCancel = this.toggleAddPostModal.bind(this, false);
    this.handleAddPostSubmit = this.handleAddPostSubmit.bind(this);
    this.handleRemoveTagFromPost = this.handleRemoveTagFromPost.bind(this);

    this.state = {
      isAddingPost: false,
      posts: posts["posts"]
    };
  }

  toggleAddPostModal(isAddingPost) {
    this.setState({isAddingPost: isAddingPost});
  }

  handleAddPostSubmit (post) {
    const posts = this.state.posts;
    const newPost = {...post, id: posts.length + 1, tags: []};

    posts.push(newPost);
    this.setState({posts: posts});
  }

  handleRemoveTagFromPost(post, tagId) {
    post.tags = post.tags.filter((id) => id !== tagId);
    this.setState({posts: this.state.posts});
  }

  render() {
    const {posts} = this.state;
    let modal = null;
    if (this.state.isAddingPost) {
      modal = <AddPostModal onClose={this.handleAddPostCancel} onSubmit={this.handleAddPostSubmit}/>
    }

    return (
      <MuiThemeProvider>
        <div>
          {modal}
          <AppBar
            title="React.js Forum"
            iconElementLeft={<span />}
            iconElementRight={<AppPost onTap={this.handleAddPost} />}
          />
          <PostThread posts={posts} onRemoveTag={this.handleRemoveTagFromPost}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
