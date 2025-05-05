import config, { supabase } from "@/config";
import axios from "axios";

const Axiosauth = axios.create({
    baseURL: `${config.baseUrl}/auth/v1`,
    headers: {
      apikey: config.apiKey,
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`, // Supabase Auth requires Bearer anon key
    },
  });

  Axiosauth.interceptors.response.use(
    async (response) => {
      const { access_token, refresh_token } = response.data ?? {};
  
      if (access_token && refresh_token) {
        await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
      }
  
      return response;
    },
    (error) => Promise.reject(error)
  );





export default Axiosauth ;
