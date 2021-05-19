import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = useState([]);

  // useEffect(function () {
  //   axios
  //     .get("")
  //     .then(function () {
  //       const products = result.data.products;
  //       setProducts(products);
  //     })
  //     .catch(function () {
  //       console.error("에러 발생:", error);
  //     });
  // }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div class="product-list__card">
                <div>
                  <img class="product-list__img" src={product.imageUrl} />
                </div>
                <div class="product-contents">
                  <span class="product-name">{product.name}</span>
                  <span class="product-price">{product.price}원</span>
                  <div class="product-seller">
                    <img
                      class="product-avatar"
                      src="images/images/icons/avatar.png"
                      alt=""
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="footer"></div>
      </div>
    </div>
  );
}

export default MainPage;
