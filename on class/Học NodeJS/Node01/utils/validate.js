export const getError = (error, name) => {
  if (error.length) {
    error = error[0];
    return error[name];
  }
};
