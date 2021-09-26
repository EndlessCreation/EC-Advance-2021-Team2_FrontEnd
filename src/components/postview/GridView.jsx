import React from 'react';
import styled from 'styled-components';

const GridView = ({ user }) => {
  return (
    <>
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
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

const Grid = styled.ul`
  display: grid;
  margin: 0;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;
const GridItem = styled.li`
  list-style-type: none;
  margin: 0;
  /* padding: 10px 10px; */
  & > header {
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
  }
  & > ul {
    display: grid;
    padding: 0;
    margin: 0;
    & > li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
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
