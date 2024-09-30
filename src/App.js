import { Link } from "react-router-dom";
import MyRouter from "./router/index";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      
<Navbar>
<Link to="/">Accueil</Link>
      <Link to="/create">Creer</Link>
      <Link to="/edit">Editer</Link>
</Navbar>
      <MyRouter />
    </div>
  );
}

export default App;
