import React from 'react';
import styled from 'styled-components';

const HomeComponent = ({
  onSubmit,
  onChange,
  onKeyUp,
  user,
  post,
  image,
  tag,
  keyword,
  hashWrapperRef,
  inputRef,
}) => {
  return (
    <div>
      <p>hello</p>

      {user && (
        <Wrapper>
          <InputBox>
            <HashWrapper ref={hashWrapperRef}>
              {tag && <div>{tag}</div>}
              {keyword && <div>{keyword}</div>}
            </HashWrapper>
            <Form encType="multipart/form-data" onSubmit={onSubmit}>
              <Input
                type="text"
                placeholder="입력하세요."
                name="content"
                ref={inputRef}
                onKeyUp={onKeyUp}
              />
              {/* <input
                name="image"
                type="file"
                onChange={onChange}
                accept="image/png, image/jpeg"
              /> */}
              <button>업로드</button>
            </Form>
          </InputBox>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #45712b;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  background: #ffffff;
  border-radius: 5px;
`;
const HashWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: fit-content;
    height: fit-content;
    padding: 5px;
    margin: 5px;
    box-sizing: border-box;
    background: #75a635;
    border-radius: 5px;
    color: white;
  }
`;
const Form = styled.form`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const Input = styled.input`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
`;
export default HomeComponent;
