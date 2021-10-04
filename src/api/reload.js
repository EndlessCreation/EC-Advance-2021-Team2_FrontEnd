export const reloadTypeCheck = (type) => {
  const payload = { [type]: true };
  return { payload: payload };
};

export const reloadType = {
  timLog: 'timLog',
};
