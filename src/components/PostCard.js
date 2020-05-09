import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const PostCard = ({text}) => {
  return (
    <Card style={ styles.cardContainer }>
      <Title level={2}>{text}</Title>
    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export default PostCard;