const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? "https://minominolyly.github.io/azurea-absolve"
    : "http://localhost:3000";

const AppConfig = {
  BASE_URL,
};

export default AppConfig;
