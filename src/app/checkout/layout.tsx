import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EGA Bike - Thanh toán hoá đơn",
  description: "Thanh toán hoá đơn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
