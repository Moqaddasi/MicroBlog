const Navabar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navabar;
