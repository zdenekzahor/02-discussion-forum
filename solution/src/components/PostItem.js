import React, {PropTypes} from "react";
import {Card, CardHeader, CardText} from "material-ui/Card";
import Chip from "material-ui/Chip";
import ReactMarkdown from "react-markdown";

const PostItem = (props) => {
  const {title, message} = props.post;
  let tagElements = [];

  if (props.tags && props.tags.length) {
    tagElements = props.tags.map((tag) => {
      const styles = {
        display: "inline-block",
        marginRight: "5px"
      };

      return (
        <Chip key={tag.id} style={styles}>{tag.label}</Chip>
      );
    });
  }

  return (
    <Card>
      <CardHeader
        title={title}
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <div>
          <ReactMarkdown source={message} />
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