import logo from "./logo.svg";
import "./App.css";
import MainPage from "./main/main.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload/upload.js";
import ProductPage from "./product/product.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPage />;
        </Route>
        <Route exact={true} path={"/product/:id"}>
          <ProductPage />;
        </Route>
        <Route exact={true} path={"/upload"}>
          <UploadPage />;
        </Route>
      </Switch>
    </div>
  );
}

export default App;
