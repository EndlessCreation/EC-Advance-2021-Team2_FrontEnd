import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { BsFillTrashFill, BsImages } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// keyword 안에 있는 tim 나열
// 선택한 tim 을 가장 앞에 두도록
// 원형 스크롤로 구현할 예정
const TIM = ({ post, onDeletePost, onEditPost }) => {
  const {
    id,
    content,
    createAt,
    image,
    isFavorite,
    post_tag: { tag, tag_color },
    post_keyword: { keyword_name, keyword_color },
  } = post;
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
        console.log(form);
        const formData = new FormData();
        formData.append('file', form.image);
        formData.append('content', form.content);
        formData.append('post_id', id);
        formData.append('tag', tag);
        formData.append('keyword', keyword_name);
        formData.append('tag_color', tag_color);
        formData.append('keyword_color', keyword_color);
        onEditPost(formData);
      }
      setEditMode(false);
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
const TIMView = ({
  user,
  tagColor,
  tagName,
  postInKeyword,
  onDeletePost,
  onEditPost,
}) => {
  const scrollRef = useRef();
  const [index, setIndex] = useState(0);
  // 스크롤값 가져와야 함.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, [index, scrollRef]);
  const onClickLeft = (e) => {
    if (index > 0) setIndex((prevIdx) => prevIdx - 1);
  };
  const onClickRight = (e) => {
    const childrenLength = scrollRef.current.children.length;
    if (index < childrenLength - 1) setIndex((prevIdx) => prevIdx + 1);
  };

  if (!user || !postInKeyword) return null;
  const { post: postList, keyword_name, keyword_color } = postInKeyword;
  return (
    <TIMViewWrapper>
      <ListStatus>
        <Mark tagColor={tagColor}>{tagName}</Mark>
        <Mark keywordColor={keyword_color}>{keyword_name}</Mark>
      </ListStatus>
      <PostList>
        <TimListWrapper ref={scrollRef}>
          {postList.map((post) => (
            <TIM
              key={post.id}
              post={post}
              tagName={tagName}
              keywordName={keyword_name}
              onDeletePost={onDeletePost}
              onEditPost={onEditPost}
            />
          ))}
          <LeftBtn onClick={onClickLeft}>
            <FiChevronLeft size="25" />
          </LeftBtn>
          <RightBtn onClick={onClickRight}>
            <FiChevronRight size="25" />
          </RightBtn>
        </TimListWrapper>
      </PostList>
    </TIMViewWrapper>
  );
};

const TIMViewWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  background-color: #ffffff;
`;
const ListStatus = styled.div`
  display: flex;
  padding: 35px 66px;
  background-color: #f6f6f6;
  align-items: flex-start;
`;
const Mark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${({ theme, tagColor, keywordColor }) => {
    if (tagColor != null) return theme.component[tagColor][1];
    if (keywordColor != null) return theme.component[keywordColor][2];
  }};
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.font['white']};
  & + & {
    margin-left: 30px;
  }
`;
const PostList = styled.div`
  position: relative;
  padding: 0 25px;
`;
const TimListWrapper = styled.ul`
  transition: 1s;
  padding: 50px 0;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory; /* Chrome Canary */
  scroll-snap-type: mandatory; /* Firefox */
  -ms-scroll-snap-type: mandatory; /* IE/Edge */
  -webkit-scroll-snap-type: mandatory; /* Safari */
  -webkit-scroll-snap-destination: 0% 0%;
  -webkit-overflow-scrolling: touch; /* important for iOS */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const LeftBtn = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  left: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 25px;
`;
const RightBtn = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  right: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 25px;
`;
export default TIMView;
