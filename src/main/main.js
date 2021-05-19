import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    setProducts([
      {
        name: "농구공",
        price: 100000,
        seller: "조던",
        imageUrl: "images/products/basketball1.jpeg",
      },
      {
        name: "축구공",
        price: 50000,
        seller: "메시",
        imageUrl: "images/products/soccerball1.jpg",
      },
      {
        name: "키보드",
        price: 10000,
        seller: "마키나랩",
        imageUrl: "images/products/keyboard1.jpg",
      },
    ]);
  }, []);

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
                <Link className="product-link" to={`/product/${index}`}>
                  <div>
                    <img class="product-list__img" src={product.imageUrl} />
                  </div>
                  <div class="product-contents">
                    <span class="product-name">{product.name}</span>
                    <span class="product-price">{product.price}원</span>
                    <div class="product-seller">
                      <img
                        class="product-avatar"
                        src="images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
