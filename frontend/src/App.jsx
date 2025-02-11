import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main className="min-h-screen max-h-screen-2x1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
