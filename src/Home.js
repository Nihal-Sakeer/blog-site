const Home = () => {
  const handleClick = (e) => {
    console.log("hello ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
    </div>
  );
};

export default Home;
