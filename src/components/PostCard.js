import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const PostCard = ({text, title}) => {
  return (
    <Card style={ styles.cardContainer }>
      <Title level={2}>{title}</Title>
      <Text>{text}</Text>
    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
    , boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
}

export default PostCard;