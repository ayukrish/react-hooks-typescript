export const service = (reqObj) => {
  let { url } = reqObj;
  const { method = 'get', page } = reqObj;
  if (page) {
    url = `${url}?page=${page}`;
  }
  return fetch(url, {
    method
  })
    .then((response) => {
      if (response.ok) {
        return response.text().then((res: any) => {
          return JSON.parse(res);
        });
      }
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};
