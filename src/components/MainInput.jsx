import React, { useState } from 'react';
import styled from 'styled-components';

const MainInput = ({
  onSubmit,
  onChange,
  onKeyUp,
  user,
  tag,
  keyword,
  hashWrapperRef,
  inputRef,
}) => {
  const [closeClick, setCloseClick] = useState(true);
  const handleClickClose = (e) => {
    setCloseClick((prevState) => !prevState);
  };
  return (
    <>
      {user && (
        <>
          <Wrapper close={closeClick}>
            <BlurBox onClick={handleClickClose} />
            <InputBoxWrapper>
              <InputBox>
                <HashWrapper ref={hashWrapperRef}>
                  {tag && <div>{`# ${tag}`}</div>}
                  {keyword && <div>{`@ ${keyword}`}</div>}
                </HashWrapper>
                <Form encType="multipart/form-data" onSubmit={onSubmit}>
                  <Input
                    type="text"
                    placeholder="오늘의 메모를 입력해보세요!"
                    name="content"
                    ref={inputRef}
                    onKeyUp={onKeyUp}
                  />
                  <Label>
                    <ImageInput
                      name="image"
                      type="file"
                      onChange={onChange}
                      accept="image/png, image/jpeg"
                    />
                    Image
                  </Label>
                  <UploadButton>등록</UploadButton>
                </Form>
              </InputBox>
            </InputBoxWrapper>
          </Wrapper>
          <ModalBoxWrapper>
            <ModalBox onClick={handleClickClose} close={closeClick} />
          </ModalBoxWrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: ${(props) => props.close && 'none'};
`;

const BlurBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
`;
const InputBoxWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #45712b;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60px;
  background: #ffffff;
  border-radius: 5px;
`;
const HashWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    font-size: 1.25rem;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    background: #75a635;
    border-radius: 5px;
    color: white;
  }
`;
const Form = styled.form`
  display: flex;
  flex-grow: 1;
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
const Label = styled.label`
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  width: 100px;
  height: 50px;
  font-size: 1.25;
`;
const ImageInput = styled.input`
  display: none;
`;
const UploadButton = styled.button`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #ffffff;
  width: 100px;
  height: 50px;
  font-size: 1.25rem;
`;
const ModalBoxWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ModalBox = styled.div`
  width: 600px;
  height: 30px;
  border-radius: 20px 20px 0 0;
  border: 3px solid #45712b;
  border-bottom: none;
  background: #ffffff;
  display: ${(props) => !props.close && 'none'};
  &:hover {
    height: 50px;
    transition: 250ms height;
    cursor: pointer;
  }
`;
export default MainInput;
