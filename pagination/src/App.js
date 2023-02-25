import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getProduct = async () => {
    let res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    let data = await res.json();
    console.log("DATA:", data);
    if (data && data.products) {
      setProducts(data.products);
      setTotalPage(data.total);
    }
  };

  useEffect(() => {
    getProduct();
  }, [page]);

  const selectPage = (selectedPage) => {
    console.log(selectedPage);
    setPage(selectedPage);
  };

  const handlePrev = () => {
    if (page >= 2 && page <= 10) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page >= 1 && page <= 9) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div className="single__product">
                <img src={product.thumbnail} alt={product.id} />
                <span>{product.title}</span>
              </div>
            );
          })}
      </div>

      {products.length > 0 && (
        <div className="pagination">
          <span onClick={handlePrev} className={page === 1 ? "disable" : ""}>
            ◀
          </span>
          {[...Array(totalPage / 10)].map((_, i) => {
            return (
              <span
                onClick={() => selectPage(i + 1)}
                key={i}
                className={page === i + 1 ? "selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={handleNext} className={page === 10 ? "disable" : ""}>
            ▶
          </span>
        </div>
      )}
    </div>
  );
}
