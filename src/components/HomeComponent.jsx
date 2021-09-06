import React from 'react';
import HeaderContainer from '../containters/common/HeaderContainer';
import styled from 'styled-components';

const FormWrapper = styled.form`
  /* display: flex; */
  width: 10rem;
`;

const HomeComponent = ({ onSubmit, onChange, user, post, content, image }) => {
  return (
    <div>
      <HeaderContainer />
      <p>hello</p>

      {user && (
        <FormWrapper encType="multipart/form-data" onSubmit={onSubmit}>
          content:{' '}
          <input
            type="text"
            name="content"
            value={content}
            onChange={onChange}
          />
          <input
            name="image"
            type="file"
            onChange={onChange}
            accept="image/png, image/jpeg"
          />
          <button>업로드</button>
        </FormWrapper>
      )}
    </div>
  );
};

export default HomeComponent;
