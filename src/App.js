import "./App.css";
import Post from "./post";

function App() {
  return (
    <div className="app">
      <div className="nav_bar">
        <img
          className="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>

      <Post />
    </div>
  );
}

export default App;
