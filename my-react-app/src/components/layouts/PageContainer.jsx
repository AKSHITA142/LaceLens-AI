export default function PageContainer({ children }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {children}
    </main>
  );
}
