import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const ActionButton = props => {

  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  }

  const closeForm = () => {
    setFormOpen(false);
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
    return (
      <div>
        <p>Form here ...</p>
        <button onClick={closeForm}>Close Form</button>
      </div>
    )
  }

  return (
    formOpen ? renderForm() : renderAddButton()
  )
}



export default ActionButton;