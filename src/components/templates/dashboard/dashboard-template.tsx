"use client";
import { useUserStore } from "@/store/userStore";
import Button from "@/components/atoms/button/button";
import { supabase } from "@/config";

export default function DashboardTemplate() {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      clearUser();
      localStorage.removeItem("user");
    } else {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div>
      <Button value="Signout" onClick={logout} />
      This is {user?.role} dashboard{" "}
    </div>
  );
}
