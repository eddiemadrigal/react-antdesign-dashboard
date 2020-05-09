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
  }
}

export default PostCard;