import React from "react";

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-cream min-h-screen">
      {children}
    </div>
  );
}
