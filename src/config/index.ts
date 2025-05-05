import { createClient } from "@supabase/supabase-js";

/**
 * 1 secs = 1000 * 1
 * 5 secs = 1000 * 5
 * 1 minutes = 1000 * 60 * 1
 * 5 minutes = 1000 * 60 * 5
 */

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_API_KEY as string
);



const config = {
  baseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  idleTimeout: 1000 * 60 * 15,
  promptBeforeIdleTimeout: 1000 * 60 * 3,
  otpCountDownTimer: 60 * 2, // 5 minutes
  httpTimeout: 1000 * 60 * 3,
};

// NOTE: difference between idleTimeout and promptBeforeIdleTimeout is when the idle timer modal will pop up

export default config;