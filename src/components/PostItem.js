import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const PostItem = (props) => {
  const {title, message} = props.post;
  let tagElements = [];

  if (props.tags && props.tags.length) {
    // TODO: use Chip for tags: www.material-ui.com/#/components/chip
    tagElements = props.tags.map((tag) => <span key={tag.id}>{tag.label}</span>);
  }

  // TODO make it possible to show formatted message,
  // e.g. "Hello <em>world</em>" - world will be shown as emphasized
  // but try to keep security high by not allowing <script>alert('Heh');</script>
  // can you find the solution?

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