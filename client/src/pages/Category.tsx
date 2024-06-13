import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductProps } from "../../type";
import { getData } from "../lib";
import CategoryFilters from "../ui/CategoryFilters";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";
import Loading from "../ui/Loading";

const Category = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:8000/categories/${id}`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const formatId = (id: string) => {
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h2 className="text-4xl text-center font-semibold mb-5">
            {formatId(id!)}
          </h2>
          <div className="flex items-start gap-10">
            <CategoryFilters id={id} />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {loading ? (
                <div>
                  <p>Loading...</p>
                </div>
              ) : (
                products?.map((item: ProductProps) => (
                  <ProductCard item={item} key={item?._id} />
                ))
              )}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Category;
