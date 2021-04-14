import axios from "axios";
const client = axios.create({
  baseURL: "https://dpwikauiibanten.com/alangdata/public/api/auth/",
});

export default client;
