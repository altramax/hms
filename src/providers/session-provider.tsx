"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/config";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { set } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: Props) {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const [redirecting, setRedirecting] = useState(false);
  const [sessions, setSessions] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (sessions === null) {
      setRedirecting(true);
      const timer = setTimeout(() => {
        console.log("timeout ran", "done");
        router.push("/");
        setRedirecting(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setRedirecting(false);
    }
  }, [sessions]);

  useEffect(() => {
    let mounted = true;

    const initSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSessions(session);

      if (!mounted) return;

      if (!session) {
        router.push("/");
        clearUser();
        localStorage.removeItem("user");
      }
    };

    initSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email ?? "",
          });
        } else {
          router.push("/");
          clearUser();
          localStorage.removeItem("user");
        }
      }
    );
   
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [setUser, clearUser, router]);

  if (redirecting) {
    return <Loading />;
  } else {
    return children;
  }
}
