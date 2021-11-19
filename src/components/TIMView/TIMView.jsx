import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

// keyword 안에 있는 tim 나열
// 선택한 tim 을 가장 앞에 두도록
// 원형 스크롤로 구현할 예정
const TIMView = ({ user, tagName, tagColor, postInKeyword, onEdit }) => {
  if (!user || !postInKeyword) return null;
  const {
    post: postList,
    keyword_name,
    keyword_color: keywordColor = 'grey',
  } = postInKeyword;

  return (
    <>
      <HeaderMargin />
      <ListStatus>
        <Mark tagColor={tagColor}>{tagName}</Mark>
        <Mark keywordColor={keywordColor}>{keyword_name}</Mark>
      </ListStatus>
      <TIMViewWrapper>
        {postList.map((post) => (
          <TIM key={post.id} post={post} />
        ))}
      </TIMViewWrapper>
    </>
  );
};
const TIM = ({ post, onEdit }) => {
  const { image, createAt, content, isFavorite } = post;
  const slicedDate = createAt.toString().slice(0, 10);
  return (
    <>
      <TIMWrapper image={image}>
        <Whitemark>
          <Date>{slicedDate}</Date>
          <EdtiButton onClick={onEdit}>
            <MdEdit />
          </EdtiButton>
          <Contents>{content}</Contents>
        </Whitemark>
      </TIMWrapper>
    </>
  );
};
const TIMWrapper = styled.div`
  position: relative;
  width: 560px;
  height: 520px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.image})`};
  background-color: ${({ theme }) => theme.bgColor[1]};
  background-size: cover;
  background-repeat: no-repeat;
  transform: ${(props) => props.size === 'small' && 'scale(0.535)'};
  overflow: hidden;
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
  box-sizing: border-box;
`;

const Date = styled.div`
  position: absolute;
  font-size: 32px;
  top: 35px;
  left: 40px;
`;

const EdtiButton = styled.div`
  position: absolute;
  font-size: 32px;
  top: 35px;
  right: 40px;
`;

const Contents = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;

const ListStatus = styled.div`
  display: flex;
  margin: 35px 66px;
  align-items: flex-start;
`;
const Mark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${({ theme, tagColor, keywordColor }) => {
    console.log(tagColor, keywordColor);
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
const HeaderMargin = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

const TIMViewWrapper = styled.div`
  position: relative;
  display: inline;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 100px;
  background-color: #ffffff;
`;
export default TIMView;
