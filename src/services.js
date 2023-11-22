function getApi() {
    return new Promise(async (resolve) => {
      const response = await fetch("");//give your url for students data
      const data = await response.json();
      resolve(data);
    });
  }
  export default getApi;