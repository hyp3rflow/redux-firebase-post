import React, { useState } from 'react';
import styled from 'styled-components';

import { db } from '../firebase/index';

const WritePost = () => {
  const [value, setValue] = useState('');

  const submitPost = () => {
    db.collection('post').add({
      timestamp: new Date(),
      content: value,
    });
  };

  return (
    <WritePostContainer>
      <WritePostInput
        type="post"
        placeholder="Write post here"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <WritePostButton onClick={submitPost}>Submit Post!</WritePostButton>
    </WritePostContainer>
  );
};

const WritePostContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 400px;

  margin: 0 auto;
`;

const WritePostInput = styled.input`
  width: 400px;
  height: 30px;

  padding: 10px;

  background-color: #232529;

  border: none;
  border-radius: 5px;

  margin: 10px 0;

  &::placeholder {
    color: #cfd8dc;
  }
`;

const WritePostButton = styled.button`
  align-self: flex-end;
  width: 100px;
  height: 30px;

  border: none;
  border-radius: 5px;
  color: white;

  background-color: #455a64;
`;

export default WritePost;
