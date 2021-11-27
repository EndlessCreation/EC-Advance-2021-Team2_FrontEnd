import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { BsFillTrashFill, BsImages } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TIM from './TIM';
// keyword 안에 있는 tim 나열
// 선택한 tim 을 가장 앞에 두도록
// 원형 스크롤로 구현할 예정

const TIMView = ({
  user,
  postList,
  tagName,
  tagColor,
  keywordName,
  keywordColor,
  onEditPost,
  onDeletePost,
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

  if (!user || !postList) return null;
  return (
    <>
      <TIMViewWrapper>
        <HeaderMargin />

        <ListStatus>
          <Mark tagColor={tagColor}>{tagName}</Mark>
          <Mark keywordColor={keywordColor}>{keywordName}</Mark>
        </ListStatus>
        <PostList>
          <TimListWrapper ref={scrollRef}>
            {postList.map((post) => (
              <TIM
                key={post.id}
                post={post}
                tagName={tagName}
                tagColor={tagColor}
                keywordName={keywordName}
                keywordColor={keywordColor}
                onDeletePost={onDeletePost}
                onEditPost={onEditPost}
              />
            ))}
            {postList !== [] && (
              <>
                <LeftBtn onClick={onClickLeft}>
                  <FiChevronLeft size="25" />
                </LeftBtn>
                <RightBtn onClick={onClickRight}>
                  <FiChevronRight size="25" />
                </RightBtn>
              </>
            )}
          </TimListWrapper>
        </PostList>
      </TIMViewWrapper>
    </>
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

const HeaderMargin = styled.div`
  margin-top: 60px;
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

// const TIMView = ({
//   user,
//   tagName,
//   tagColor,
//   keywordName,
//   keywordColor,
//   postList,
// }) => {
//   const scrollRef = useRef();
//   const [index, setIndex] = useState(0);
//   // 스크롤값 가져와야 함.
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.children[index].scrollIntoView({
//         behavior: 'smooth',
//         inline: 'start',
//       });
//     }
//   }, [index, scrollRef]);
//   const onClickLeft = (e) => {
//     if (index > 0) setIndex((prevIdx) => prevIdx - 1);
//   };
//   const onClickRight = (e) => {
//     const childrenLength = scrollRef.current.children.length;
//     if (index < childrenLength - 1) setIndex((prevIdx) => prevIdx + 1);
//   };

//   if (
//     !user ||
//     !postlist ||
//     !tagName ||
//     !tagColor ||
//     !keywordName ||
//     !keywordColor
//   )
//     return null;
//   return (
//     <>
//       <HeaderMargin />
//       <TIMViewWrapper>
//         <ListStatus>
//           <Mark tagColor={tagColor}>{tagName}</Mark>
//           <Mark keywordColor={keywordColor}>{keywordName}</Mark>
//         </ListStatus>
//         <PostList>
//           <TimListWrapper ref={scrollRef}>
//             {postlist.map((post) => (
//               <TIM key={post.id} post={post} />
//             ))}
//             <MovingBtn onClick={onClickLeft}>{`<`}</MovingBtn>
//             <MovingBtn onClick={onClickRight} right>{`>`}</MovingBtn>
//           </TimListWrapper>
//         </PostList>
//       </TIMViewWrapper>
//     </>
//   );
// };

// const MovingBtn = styled.button`
//   cursor: pointer;
//   outline: 0;
//   position: absolute;
//   top: 50%;
//   transform: translate(0%, -50%);
//   width: 60px;
//   height: 120px;
//   background-color: rgba(255, 255, 255, 0.3);
//   border-radius: 8px;
//   border: 2px solid #bebebe6e;
//   color: #6e6e6e;
//   ${({ right }) =>
//     right
//       ? css`
//           right: 0;
//         `
//       : css`
//           left: 0;
//         `};
//   &:hover {
//     color: '#000000';
//     background-color: rgba(255, 255, 255, 0.9);
//   }
//   &:active {
//     color: '#ffffff';
//     background-color: rgba(161, 161, 161, 0.9);
//   }
//   transition: 0.4s ease;
//   font-family: Roboto;
//   font-size: 42px;
// `;
