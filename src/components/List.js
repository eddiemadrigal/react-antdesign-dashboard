import React from 'react';
import PostCard from './PostCard'

const List = props => {
  return (
    <div style={styles.container}>
      <h2>{props.title}</h2>
      <PostCard />
    </div>
  )
}

const styles={
  container: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: 300,
    padding: 10
  }
}

export default List;