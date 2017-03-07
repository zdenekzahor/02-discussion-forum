import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

const AddPost = () => {
  const onTap = function () {};
  // TODO onTouchTap should invoke the "onTap" callback

  return (<FlatButton label="Add post" onTouchTap={onTap} />);
};

AddPost.propTypes = {
  onTap: PropTypes.func.isRequired
};

export default AddPost;