import { twMerge } from "tailwind-merge";
import { ProductProps } from "../../type";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import { store } from "../lib/store";
import PriceTag from "./PriceTag";

const AddToCardBtn = ({
  className,
  title,
  product,
  showPrice = true,
}: {
  className?: string;
  title?: string;
  product?: ProductProps;
  showPrice?: boolean;
}) => {
  const newClassName = twMerge(
    "bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const { addToCart, cartProduct, decreaseQuantity } = store();
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully!`);
    } else {
      console.error("Product is undefined");
    }
  };
  const handleDeleteProduct = () => {
    if (existingProduct) {
      if (existingProduct?.quantity > 1) {
        decreaseQuantity(existingProduct?._id);
        toast.success(
          `${product?.name.substring(0, 10)} decreased successfully!`
        );
      } else {
        toast.error("You can not decrease less than 1");
      }
    } else {
      if (product) {
        decreaseQuantity(product?._id);
        toast.success(
          `${product?.name.substring(0, 10)} decreased successfully!`
        );
      }
    }
  };

  const [existingProduct, setExistingProduct] = useState<ProductProps | null>(
    null
  );

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const getRegularPrice = () => {
    if (existingProduct) {
      if (product) {
        return product?.regularPrice * existingProduct?.quantity;
      }
    } else {
      return product?.regularPrice;
    }
  };

  const getDiscountedPrice = () => {
    if (existingProduct) {
      if (product) {
        return product?.discountedPrice * existingProduct?.quantity;
      }
    } else {
      return product?.discountedPrice;
    }
  };

  return (
    <>
      {showPrice && (
        <div>
          <PriceTag
            regularPrice={getRegularPrice()}
            discountedPrice={getDiscountedPrice()}
          />
        </div>
      )}
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-base hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-base hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button className={newClassName} onClick={handleAddToCart}>
          {title ? title : "Add to cart"}
        </button>
      )}
    </>
  );
};

export default AddToCardBtn;
