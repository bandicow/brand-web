import "./globals.css";
import { Inter } from "next/font/google";
import MainNavigation from "./components/layout/MainNavigation";

// 로그인 페이지
import ProviderWrapper from "./ProviderWrapper";

// 폰트 관련
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PiCaPo",
  description: "This is a PiCaPo brand website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainNavigation />
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
