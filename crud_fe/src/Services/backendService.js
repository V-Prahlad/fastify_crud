const BASE_URL = "http://localhost:5000/";

const setHeaders = () => {
  const additionalHeaders = {};
  additionalHeaders["Content-Type"] = "application/json";
  return additionalHeaders;
};

const setOptions = (method, baseURL, url, data) => {
  const options = {};
  options["method"] = method;
  options["baseURL"] = baseURL;
  options["url"] = url;
  if (data) {
    options["data"] = data;
  }
  return options;
};

export const getDataOptions = (url) => {
  const options = setOptions("get", BASE_URL, url);
  options["headers"] = setHeaders();
  return options;
};

export const postDataOptions = (url, data) => {
  const options = setOptions("post", BASE_URL, url, data);
  options["headers"] = setHeaders();
  return options;
};

export const putDataOptions = (url, data) => {
  const options = setOptions("put", BASE_URL, url, data);
  options["headers"] = setHeaders();
  return options;
};

export const deleteDataOptions = (url) => {
  const options = setOptions("delete", BASE_URL, url);
  options["headers"] = setHeaders();
  return options;
};
