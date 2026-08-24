function Home({ children }) {
  return (
    <main>
      <h1>Home Page</h1>

      <p>
        Welcome to my React learning application.
      </p>

      {children}
    </main>
  );
}

export default Home;