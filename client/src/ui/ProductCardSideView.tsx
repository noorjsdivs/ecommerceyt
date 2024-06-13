import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { store } from "../lib/store";
import { ProductProps } from "../../type";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ProductCardSideView = ({ product }: { product?: ProductProps }) => {
  const { addToFavorite, favoriteProduct } = store();

  const [existingProduct, setExistingProduct] = useState<ProductProps | null>(
    null
  );

  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const handleFavorite = () => {
    if (product) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? `${product?.name.substring(0, 10)} removed successfully!`
            : `${product?.name.substring(0, 10)} added successfully!`
        );
      });
    }
  };

  return (
    <div className="absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span
        onClick={handleFavorite}
        className="w-11 h-11 inline-flex relative text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200"
      >
        {existingProduct ? <FaStar /> : <FaRegStar />}
        {/* <span className="text-xs absolute -left-28 bg-black text-white px-2 py-1 rounded-sm hidden">
      Add to wishlist
    </span> */}
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <LuArrowLeftRight />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <FaRegEye />
      </span>
    </div>
  );
};

export default ProductCardSideView;
