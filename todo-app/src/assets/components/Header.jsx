const Header = (props) => {
  return (
    <header>
      <img src={props.src} />
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
