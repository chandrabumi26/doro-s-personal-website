import MusicPlayer from "../components/MusicPlayer";

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MusicPlayer />
      {children}
    </>
  );
}
