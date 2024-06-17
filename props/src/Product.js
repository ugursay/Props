import React from "react";

function Product({ productName, price }) {
  return (
    <div style={{ textAlign: "center", color: "blue" }}>
      <div>ÜRÜN BİLGİLERİ</div>

      <div>
        <div>İsim: {productName}</div>
        <div>Fiyat: {price} TL</div>
      </div>
    </div>
  );
}

export default Product;
