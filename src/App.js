import Header from "./Header";
import Product from "./Product"

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="banner">
          <img src="/images/banner.jpg"/>
          </div>
          <Product/>
    </div>  
  );
}

export default App;
