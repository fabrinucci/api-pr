import { useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";
import { Products } from "./interfaces/products";

export const App = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState(null);

  const handleProducts = async () => {
    const products = await getProducts();
    return products;
  };

  useEffect(() => {
    handleProducts().then((data) => setProducts(data));
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px",
      }}
    >
      <h1>App</h1>
      {products.map((product) => (
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#3535ab",
            width: "50%",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "10px",
          }}
          key={product.id}
        >
          <h2
            style={{
              margin: "20px 0",
            }}
          >
            {product.title}
          </h2>
          <p
            style={{
              margin: "10px 0",
            }}
          >
            Price: $ {product.price}
          </p>
          <p
            style={{
              margin: "10px 0",
            }}
          >
            {product.description}
          </p>
          <img
            style={{
              maxHeight: "250px",
              maxWidth: "250px",
              borderRadius: "10px",
            }}
            src={product.images[0]}
            alt={`${product.title} image`}
          />
        </article>
      ))}
    </div>
  );
};
