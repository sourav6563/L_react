export const githubFetchData = async () => {
  const response = await fetch("https://api.github.com/users/sourav6563");
  return response.json();
};
