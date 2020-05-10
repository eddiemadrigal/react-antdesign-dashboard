import React, { useState } from 'react';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import TextareaAutosize from 'react-textarea-autosize';

const ActionButton = props => {

  const [formOpen, setFormOpen] = useState(false);
  const [postText, setPostText] = useState('');

  const openForm = () => {
    setFormOpen(true);
  }

  const closeForm = e => {
    e.preventDefault();
    setFormOpen(false);
  }

  const handleInputChange = e => {
    setPostText(e.target.value);
  }

  const renderAddButton = () => {
    const { list } = props;

    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

    return (
      <div
        onClick={openForm}
          style = {{
            ...styles.addButton,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground
          }}
        >
        <PlusOutlined /><span>{ buttonText }</span>
      </div>
    )
  }

  const styles = {
    addButton: {
      cursor: 'pointer',
    }
  }

  const renderForm = () => {

    const { list } = props;

    const placeholder = list  
      ? "Enter list title ..."  
      : "Enter post title ...";

    const buttonTitle = list 
      ? "Add List"
      : "Add Post";

    return (
      <div>
        <Card
          style={{ 
            overflow: "visible"
            , minHeight: 80
            , minWidth: "100%"
            , padding: "6px 8px 2px"
          }}
        >
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={postText}
            onChange={handleInputChange}
            style={{ 
              resize: "none"
              , width: "100%"
              , outline: "none"
              , border: "none"
              , overflow: "hidden"
            }}
          />
        </Card>
        <div>
          <Button style={{ 
            color: "white"
            , backgroundColor: "#5aac44" 
            , marginTop: 10
          }}>
            {buttonTitle}
          </Button>
          <CloseOutlined style={{ marginLeft: 8, cursor: "pointer" }} />
        </div>      
      </div>
    )
  }

  return (
    formOpen ? renderForm() : renderAddButton()
  )
}

export default ActionButton;