import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const GridView = ({ user }) => {
  return (
    <Wrapper>
      {user && (
        <Grid>
          {posts.map((post) => (
            <GridItem key={post.id}>
              <header>{`# ${post.tag}`}</header>
              <ul>
                {post.keyword.map((keyword) => (
                  <li key={keyword.id}>{`@ ${keyword.keyword_name}`}</li>
                ))}
              </ul>
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
  background: #ffffff;
  & > header {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    background: green;
    font-size: 28px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 20px 20px 0 0;
  }
  & > ul {
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    grid-gap: 5px;
    align-items: center;
    padding: 0 10px;
    margin: 0;
    & > li {
      justify-self: center;
      list-style-type: none;
      margin: 0;
      padding: 10px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      font-size: 16px;
    }
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const posts = [
  {
    id: 1,
    tag: 'tag1',
    tagColor: 'tag1Color',
    keyword: [
      {
        id: 1,
        keyword_name: 'keyword1',
      },
      {
        id: 2,
        keyword_name: 'keyword2',
      },
      {
        id: 3,
        keyword_name: 'keyword3',
      },
      {
        id: 4,
        keyword_name: 'keyword4',
      },
      {
        id: 5,
        keyword_name: 'keyword5',
      },
      {
        id: 6,
        keyword_name: 'keyword6',
      },
    ],
  },
  {
    id: 2,
    tag: 'tag2',
    tagColor: 'tag2Color',
    keyword: [
      {
        id: 4,
        keyword_name: 'keyword4',
      },
      {
        id: 5,
        keyword_name: 'keyword5',
      },
      {
        id: 6,
        keyword_name: 'keyword6',
      },
    ],
  },
  {
    id: 3,
    tag: 'tag3',
    tagColor: 'tag3Color',
    keyword: [
      {
        id: 7,
        keyword_name: 'keyword7',
      },
      {
        id: 8,
        keyword_name: 'keyword8',
      },
      {
        id: 9,
        keyword_name: 'keyword9',
      },
    ],
  },
  {
    id: 4,
    tag: 'tag4',
    tagColor: 'tag1Color',
    keyword: [
      {
        id: 1,
        keyword_name: 'keyword1',
      },
      {
        id: 2,
        keyword_name: 'keyword2',
      },
      {
        id: 3,
        keyword_name: 'keyword3',
      },
    ],
  },
  {
    id: 5,
    tag: 'tag5',
    tagColor: 'tag2Color',
    keyword: [
      {
        id: 4,
        keyword_name: 'keyword4',
      },
      {
        id: 5,
        keyword_name: 'keyword5',
      },
      {
        id: 6,
        keyword_name: 'keyword6',
      },
    ],
  },
  {
    id: 6,
    tag: 'tag6',
    tagColor: 'tag3Color',
    keyword: [
      {
        id: 7,
        keyword_name: 'keyword7',
      },
      {
        id: 8,
        keyword_name: 'keyword8',
      },
      {
        id: 9,
        keyword_name: 'keyword9',
      },
    ],
  },
];
export default GridView;
