import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const GridView = ({ user, tags }) => {
  console.log(tags);
  if (!tags) return <div>loading...</div>;

  return (
    <Wrapper>
      {user && (
        <Grid>
          {tags.map((tag) => (
            <GridItem key={tag.id} tagColor={tag.tag_color}>
              <header>{`# ${tag.tag}`}</header>
              <KeywordWrapper>
                {tag.keyword.map((keyword) => (
                  <KeywordItem
                    key={keyword.id}
                    keywordColor={keyword.keyword_color}
                    to={`/keyword/${tag.id}/${keyword.id}`}
                  >{`@ ${keyword.keyword_name}`}</KeywordItem>
                ))}
              </KeywordWrapper>
              <div>
                <IoIosArrowDown size="20" />
              </div>
            </GridItem>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 150px 190px;
  @media (max-width: 1024px) {
    padding: 100px 50px;
  }
`;
const Grid = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 80px;
  @media (max-width: 1024px) {
    grid-gap: 30px;
  }
`;
const GridItem = styled.li`
  display: grid;
  list-style-type: none;
  height: 300px;
  margin: 0;
  border-radius: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  background: ${({ tagColor, theme }) => {
    console.log(tagColor);
    return tagColor !== 'undefined' ? theme.component[tagColor][3] : '#FAFCF9';
  }};
  & > header {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${({ tagColor, theme }) => {
      console.log(theme.component[tagColor]);
      return tagColor !== 'undefined'
        ? theme.component[tagColor][1]
        : '#FAFCF9';
    }};
    font-size: 28px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 20px 20px 0 0;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const KeywordWrapper = styled.ul`
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  grid-gap: 5px;
  align-items: center;
  padding: 0 10px;
  margin: 0;
`;
const KeywordItem = styled(Link)`
  justify-self: center;
  list-style-type: none;
  margin: 0;
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-family: NanumGothic;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  background-color: ${({ keywordColor, theme }) => {
    console.log(keywordColor);

    return keywordColor !== 'undefined'
      ? theme.component[keywordColor][2]
      : '#FAFCF9';
  }};
  color: ${(props) => props.theme.font[1]};
`;

export default GridView;
