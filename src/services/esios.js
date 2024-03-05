export const getAll = () => {
  const options = {
    method: "GET",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  };
  return fetch(import.meta.env.VITE_BASE_URL, options);
};
