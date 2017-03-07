import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';

const PostItem = (props) => {
  const {title, message} = props.post;
  let tagElements = [];

  if (props.tags && props.tags.length) {
    tagElements = props.tags.map((tag) => <Chip key={tag.id}>{tag.label}</Chip>);
  }

  return (
    <Card>
      <CardHeader
        title={title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable>
        <div>
          <p>{message}</p>
        </div>
        <div>
          {tagElements}
        </div>
      </CardText>
    </Card>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  tags: PropTypes.array
};

export default PostItem;