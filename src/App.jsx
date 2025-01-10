import CardContextComp from "./store/CartContext.jsx";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { CartContext } from "./store/CartContext.jsx";

function App() {
  return (
    <CardContextComp>
      <Header />
      <Shop />
    </CardContextComp>
  );
}

export default App;
