// "use client";

// 로그인 인증 관련 (next-auth with google, kakao, naver)
import { SessionProvider } from "next-auth/react";

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {children} {/* Our entire app ->  has access to NextAuth*/}
    </SessionProvider>
  );
}
