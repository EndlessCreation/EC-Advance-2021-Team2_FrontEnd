import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import TagMark from '../Keyword/TagMark';

const StyledTIMWrapper = styled.div`
  position: relative;
  width: 560px;
  height: 520px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.image})`};
  background-color: ${(props) => props.theme.bgColor};
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

const StyledDate = styled.div`
  position: absolute;
  font-size: 32px;
  top: 35px;
  left: 40px;
`;

const StyledEdtiButton = styled.div`
  position: absolute;
  font-size: 32px;
  top: 35px;
  right: 40px;
`;

const EditButon = ({ onEdit }) => {
  return (
    <StyledEdtiButton onClick={() => console.log('에딧버튼클릭')}>
      <MdEdit />
    </StyledEdtiButton>
  );
};

const StyledContents = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;

export const StyledListStatus = styled.div`
  display: flex;
  margin: 35px 66px;
  align-items: flex-start;
`;
const TIM = ({ data, onEdit, size }) => {
  console.log(data);
  const { image, bgColor, date, content } = data;
  const slicedDate = date.toString().slice(0, 10);
  return (
    <>
      <StyledTIMWrapper image={image} bgColor={bgColor} size={size}>
        <Whitemark>
          <StyledDate>{slicedDate}</StyledDate>
          <EditButon onEdit={onEdit} />
          <StyledContents>{content}</StyledContents>
        </Whitemark>
      </StyledTIMWrapper>
    </>
  );
};

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

const TIMView = ({ data, onEdit }) => {
  return (
    <>
      <HeaderMargin />
      <StyledListStatus>
        <TagMark tag={'#태그'} bgColor={['indigo', '1']} />
        <TagMark tag={'@키워드'} bgColor={['violet', '2']} />
      </StyledListStatus>
      <TIMViewWrapper>
        <TIM data={data[0]} onEdit={onEdit} size={'small'} />
        <TIM data={data[1]} onEdit={onEdit} />
        <TIM data={data[2]} onEdit={onEdit} size={'small'} />
      </TIMViewWrapper>
    </>
  );
};
export default TIMView;
