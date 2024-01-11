import React, { useCallback } from 'react';

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  return <li key={post.id}>{post.title}</li>;
});

const List = React.memo(({ posts, testFunctions }) => {
  console.log('List component is Rendering');
  return (
    <ul>
      {posts.map(post => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log('B component is Rendering');
  const testFunctions = useCallback(() => {}, []);
  return (
    <div>
      <h1>B components</h1>
      <Message message={message} />
      <List posts={posts} testFunctions={testFunctions} />
    </div>
  );
};

export default B;
