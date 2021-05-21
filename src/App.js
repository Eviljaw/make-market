import "antd/dist/antd.css";
import "./App.css";
import MainPage from "./main/main.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload/upload.js";
import ProductPage from "./product/product.js";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link id="goHome" to="/">
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<UploadOutlined />}>
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPage />
          </Route>
          <Route exact={true} path={"/product/:id"}>
            <ProductPage />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
