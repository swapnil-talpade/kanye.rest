export const getQuotes = async () => {
  const apiResponse = await fetch("https://api.kanye.rest/");
  const { quote } = await apiResponse.json();
  return quote;
};
