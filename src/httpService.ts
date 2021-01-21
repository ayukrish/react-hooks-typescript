interface IReqObj {
  url: string;
  method: string;
  page: number;
}

const service = (reqObj: IReqObj): Promise<any> => {
  let { url } = reqObj;
  const { method = 'get', page } = reqObj;
  if (page) {
    url = `${url}?page=${page}`;
  }
  return fetch(url, {
    method,
  })
    .then((response) => {
      if (response.ok) {
        return response.text().then((res: any) => JSON.parse(res));
      }
      return response.text().then((res: any) => Promise.reject(res));
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      return Promise.reject(error);
    });
};

export default service;
