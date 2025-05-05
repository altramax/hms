import config, { supabase } from "@/config";
import axios from "axios";

const Axios = axios.create({
  baseURL: `${config.baseUrl}/rest/v1`,
  headers: {
    apikey: config.apiKey,
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  async (config) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default Axios
