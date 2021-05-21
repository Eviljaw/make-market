import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./product.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const products = [
    {
      id: 1,
      name: "농구공",
      price: 100000,
      seller: "조던",
      imageUrl: "images/products/basketball1.jpeg",
      description: "조던이 사용하던 농구공입니다.",
    },
    {
      id: 2,
      name: "축구공",
      price: 50000,
      seller: "메시",
      imageUrl: "images/products/soccerball1.jpg",
      description: "메시가 사용하던 축구공입니다.",
    },
    {
      id: 3,
      name: "키보드",
      price: 10000,
      seller: "마키나랩",
      imageUrl: "images/products/keyboard1.jpg",
      description: "마키나랩에서 사용중인 키보드입니다.",
    },
  ];

  useEffect(function () {
    setProduct(products[id - 1]);
  }, []);

  // useEffect(function () {
  //   axios
  //     .get("")
  //     .then(function (result) {
  //       setProduct(result.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contests-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2021년 05월 21일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
