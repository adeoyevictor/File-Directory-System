import axios from "axios";

const baseURL = "https://fc-test.onrender.com";

export const getAll = async () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

export const getFolderContent = async (folderId: string) => {
  const request = axios.get(`${baseURL}/file/${folderId}`);
  return request.then((response) => response.data);
};
