"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "../userinfo";

const Login = () => {
  // nextAuth에서 세션 가져오기 useSession 훅으로
  const { data: session } = useSession();
  // useSession은  React Context 사용

  // 만약 user가 존재시 -> 로그아웃 버튼과 그들의 정보 보여주기
  if (session) {
    return (
      <>
        <h3>Login Page</h3>
        <UserCard user={session?.user} />
        <button
          type="button"
          onClick={() => {
            signOut();
          }}
          className={"btn btn-logout"}
        >
          Sign Out
        </button>
        {/*서버 구성 요소에 세션 정보 전달 */}
      </>
    );
  } else {
    return (
      <>
        <h3>Login Page</h3>
        <button
          type="button"
          onClick={() => {
            signIn();
          }}
          className={"btn btn-login"}
        >
          Sign in
        </button>
      </>
    );
  }
};

export default Login;
