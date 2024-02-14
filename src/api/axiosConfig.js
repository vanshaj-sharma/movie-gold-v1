import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080",
  headers: { "ngrok-skip-browser-warning": "true" },
});
// import axios from "axios";

// export default axios.create({
//   baseURL: "https://9c96-103-106-239-104.ap.ngrok.io",
//   headers: { "ngrok-skip-browser-warning": "true" },
//   // cross-origin resource sharing,
//   // we know our web api is running in a diffrent domain or orgin,
//   // that can block our api thus the server code has a setting to avoid such hassle,
// });
