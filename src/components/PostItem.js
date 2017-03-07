import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const PostItem = (props) => {
  const {title, message} = props.post;

  return (
    <Card>
      <CardHeader
        title={title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable>
        {message}
      </CardText>
    </Card>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;