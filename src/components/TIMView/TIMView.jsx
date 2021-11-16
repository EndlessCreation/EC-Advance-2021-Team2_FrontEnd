import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

// keyword 안에 있는 tim 나열
// 선택한 tim 을 가장 앞에 두도록
// 원형 스크롤로 구현할 예정
const TIM = ({ post, onEdit }) => {
  const { image, createAt, content, isFavorite } = post;
  const slicedDate = createAt.toString().slice(0, 10);
  return (
    <TIMWrapper image={image ? image.path : null}>
      <Whitemark>
        <Date>{slicedDate}</Date>
        <EdtiButton onClick={onEdit}>
          <MdEdit />
        </EdtiButton>
        <Contents>{content}</Contents>
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
  background-image: ${(props) => props && `url(/static/${props.image})`};
  background-color: ${(props) => props.theme.bgColor};
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  box-sizing: border-box;
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

const TIMView = ({ user, tagName, postInKeyword, onEdit }) => {
  const scrollRef = useRef();
  const [index, setIndex] = useState(0);
  // 스크롤값 가져와야 함.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
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
  const { post: postList, keyword_name } = postInKeyword;
  return (
    <TIMViewWrapper>
      <ListStatus>
        <Mark>{tagName}</Mark>
        <Mark>{keyword_name}</Mark>
      </ListStatus>
      <PostList>
        <TimListWrapper ref={scrollRef}>
          {postList.map((post) => (
            <TIM key={post.id} post={post} />
          ))}
          <LeftBtn onClick={onClickLeft}>왼쪽</LeftBtn>
          <RightBtn onClick={onClickRight}>오른쪽</RightBtn>
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
  background-color: ${(props) => props.theme.indigo[1]};
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
`;
const TimListWrapper = styled.ul`
  transition: 1s;
  padding: 50px 0;
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
  left: 0;
`;
const RightBtn = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  right: 0;
`;
export default TIMView;
