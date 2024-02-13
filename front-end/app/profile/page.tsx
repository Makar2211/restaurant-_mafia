"use client";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const router = useRouter();
  const [user, setUser] = useState<string | any>("nothing");

  const getUserDetails = async () => {
    try {
      if (session.status === "authenticated") {
        const email = session.data.user?.email;
        const name = session.data.user?.name;
        setUser({ email, name });
      } else {
        const res = await axios.get("/api/users/me");
        const { username, email } = res.data.data;
        setUser({ username, email });
      }
    } catch (error) {
      console.log(error);
      throw new Error("При получении данных что-то пошло не так");
    }
  };

  const setProfileLogOut = async () => {
    try {
      await axios.get("/api/users/logout");
      if (session.status === "authenticated") {
        signOut();
      }
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>Ваш профиль</h1>
      <>
        <button onClick={getUserDetails}>Подробнее</button>
        {user !== "nothing" && session.status === "authenticated" ? (
          <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        ) : (
          <div className="">
            <label htmlFor="Имя">
              <input type="text" value={user.username} />
            </label>

            <input type="text" value={user.email} />
          </div>
        )}
        <Link href="/">
          <button onClick={setProfileLogOut}>Выйти</button>
        </Link>
      </>
    </>
  );
}
