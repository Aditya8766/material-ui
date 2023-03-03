function getApi() {
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:3000/api/save");
      const data = await response.json();
      resolve(data);
    });
  }
  export default getApi;