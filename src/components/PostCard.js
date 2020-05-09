import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const PostCard = ({text}) => {
  return (
    <Card>
      <Title level={2}>{text}</Title>
    </Card>
  )
}

export default PostCard;