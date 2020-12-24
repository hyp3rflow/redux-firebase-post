import React from 'react';
import { DocumentData, Timestamp } from '@firebase/firestore-types';
import styled from 'styled-components';

const Post = ({ post }: { post: DocumentData }) => {
  const content: string = post.content;
  const timestamp: Timestamp = post.timestamp;

  console.log(timestamp);
  return (
    <PostCard>
      <article>{content}</article>
      <TimeStampDiv>{timestamp.toDate().toLocaleString()}</TimeStampDiv>
    </PostCard>
  );
};

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 80px;

  padding: 15px;
  margin-bottom: 10px;
`;

const TimeStampDiv = styled.div`
  color: #90a4ae;
  text-align: right;
`;

export default Post;
