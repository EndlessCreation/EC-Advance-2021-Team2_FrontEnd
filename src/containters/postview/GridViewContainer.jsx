import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridView from '../../components/postview/GridView';
import { getTag } from '../../modules/tagkeyword';
import { check } from '../../modules/user';

const GridViewContainer = () => {
  const { user, tags } = useSelector(({ user, tagkeyword }) => ({
    user: user.user,
    tags: tagkeyword.tags,
  }));
  const reloaded = useSelector(({ reload }) => reload);

  const tagItems = {};

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTag());
  }, [dispatch]);

  useEffect(() => {
    dispatch(check());
  }, [dispatch]);

  useEffect(() => {
    if (reloaded) {
      if (reloaded.tag === true) {
        dispatch(getTag());
      }
    }
  }, [reloaded]);

  return <GridView user={user} tags={tags} />;
};

export default GridViewContainer;
