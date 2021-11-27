import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { BsFillTrashFill, BsImages } from 'react-icons/bs';

const TIM = ({
  post,
  tagName,
  tagColor,
  keywordName,
  keywordColor,
  onDeletePost,
  onEditPost,
}) => {
  const { id, content, createAt, image, isFavorite } = post;

  const slicedDate = createAt.toString().slice(0, 10);
  const [editMode, setEditMode] = useState(false);
  const initForm = {
    image,
    content,
  };
  const [form, setForm] = useState(initForm);
  const handleEditMode = (e) => {
    e.preventDefault();
    if (editMode === false) {
      setEditMode(true);
      return;
    }
    if (editMode === true) {
      let result = window.confirm('수정하시겠습니까?');
      if (result) {
        console.log(post);
        const formData = new FormData();
        formData.append('file', form.image);
        formData.append('content', form.content);
        formData.append('post_id', id);
        formData.append('tag', tagName);
        formData.append('keyword', keywordName);
        formData.append('tag_color', tagColor);
        formData.append('keyword_color', keywordColor);

        for (let key of formData.keys()) {
          console.log(key);
        }

        /* value 확인하기 */
        for (let value of formData.values()) {
          console.log(value);
        }
        onEditPost(formData);
      }
      setEditMode(false);
      return;
    }
  };
  const onChange = (e) => {
    const {
      target: { name, value, files },
    } = e;
    setForm((state) => ({
      ...state,
      [name]: name === 'image' ? files[0] : value,
    }));
  };
  return (
    <TIMWrapper image={image ? image.path : null}>
      <Whitemark>
        <Date>{slicedDate}</Date>
        <EdtiButton onClick={handleEditMode}>
          <MdEdit />
        </EdtiButton>
        <DeleteButton onClick={() => onDeletePost(id)}>
          <BsFillTrashFill />
        </DeleteButton>
        {editMode ? (
          <EditForm onSubmit={handleEditMode}>
            <EditInput
              name="content"
              value={form.content}
              onChange={onChange}
            />
            <ImageLabel>
              <ImageInput
                name="image"
                type="file"
                onChange={onChange}
                accept="image/png, image/jpeg"
              />
              <BsImages size="30" />
            </ImageLabel>
          </EditForm>
        ) : (
          <Contents>{content}</Contents>
        )}
      </Whitemark>
    </TIMWrapper>
  );
};

export default TIM;

const TIMWrapper = styled.li`
  flex-shrink: 0;
  scroll-snap-align: start; /* latest (Chrome 69+) */
  scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */
  -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */

  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(/static/${props.image})`};
  background-color: ${({ theme }) => theme.bgColor[1]};
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 30px;
  }
`;

const Whitemark = styled.div`
  position: absolute;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 0.3);
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 35px 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Date = styled.div`
  position: absolute;
  font-size: 32px;
  top: 35px;
  left: 40px;
`;
const EdtiButton = styled.button`
  position: absolute;
  font-size: 32px;
  top: 35px;
  right: 40px;
  border: none;
  background: none;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  position: absolute;
  font-size: 32px;
  top: 35px;
  right: 80px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Contents = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EditInput = styled.input`
  border: none;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  font-size: 32px;
`;
const ImageLabel = styled.label`
  background-color: white;
  margin-top: 10px;
  width: 30px;
  height: 30px;
`;
const ImageInput = styled.input`
  display: none;
`;
