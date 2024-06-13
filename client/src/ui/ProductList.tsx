import { Link } from "react-router-dom";
import { ProductProps } from "../../type";
import Container from "./Container";
import Pagination from "./Pagination";
import Title from "./Title";

interface Props {
  products: ProductProps[];
}

const ProductList = ({ products }: Props) => {
  const itemsPerPage = 12;
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Top Sells Products" />
          <Link
            to={"/product"}
            className="font-medium relative group overflow-hidden"
          >
            View All Products
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>

      <Pagination items={products} itemsPerPage={itemsPerPage} />
    </Container>
  );
};

export default ProductList;
