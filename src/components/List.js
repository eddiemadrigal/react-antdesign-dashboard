import React from 'react';
import PostCard from './PostCard'

const List = ({ title, posts }) => {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      { posts.map(post => <PostCard key={post.id} title={post.title} text={post.text} />)}
    </div>
  )
}

const styles={
  container: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    margin: '0 auto'
  }
}

export default List;