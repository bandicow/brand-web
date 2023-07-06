import "../styles/globals.css";
import MainNavigation from "../components/layout/MainNavigation";

// 로그인 페이지
import ProviderWrapper from "../components/Provider/ProviderWrapper";

// 폰트 관련
// const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <MainNavigation />
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
