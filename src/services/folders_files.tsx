import axios from "axios";

const baseURL = "http://3wdz.c.time4vps.cloud:3000";

export const getAll = async () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

export const getFolderContent = async (folderId: string) => {
    const request = axios.get(`${baseURL}/file/${folderId}`);
  return request.then((response) => response.data);
}
