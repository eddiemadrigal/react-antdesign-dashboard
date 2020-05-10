import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

const ActionButton = props => {

  const { list } = props;

  const buttonText = list ? "Add another list" : "Add another card";

  return (
    <div>
      <PlusOutlined /><span>{ buttonText }</span>
    </div>
  )
}

export default ActionButton;