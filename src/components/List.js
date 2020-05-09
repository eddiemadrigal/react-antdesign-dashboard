import React from 'react';
import PostCard from './PostCard'

const List = ({ title, posts }) => {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      { posts.map(post => <PostCard title={post.title} text={post.text} />)}
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