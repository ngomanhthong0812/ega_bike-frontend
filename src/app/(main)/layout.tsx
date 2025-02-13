import UserHeader from "@/components/layout/header/user.header";
import UserFooter from "@/components/layout/user.footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserHeader />
      {children}
      <UserFooter />
    </div>
  );
}
