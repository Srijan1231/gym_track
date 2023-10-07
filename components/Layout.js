export const Layout = ({ children }) => {
  return (
    <>
      <main className="w-screen h-screen">
        <div className="w-full h-full">{children}</div>
      </main>
    </>
  );
};
