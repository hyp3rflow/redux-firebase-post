import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DocumentData } from '@firebase/firestore-types';
import Post from './Post';

import { db } from '../firebase/index';
import { nanoid } from 'nanoid';

const PostList = () => {
  const [init, setInit] = useState(false);
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const postData = await db.collection('post').get();

      setPosts([]);
      postData.forEach(document =>
        setPosts(prev => [document.data(), ...prev])
      );

      setInit(true);
    };

    db.collection('post').onSnapshot(() => {
      getPosts();
    });
  }, []);

  return (
    <PostListContainer>
      {init && posts.map(post => <Post key={nanoid()} post={post} />)}
    </PostListContainer>
  );
};

const PostListContainer = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-top: 20px;

  background-color: #232529;

  border-radius: 10px;
`;

export default PostList;
