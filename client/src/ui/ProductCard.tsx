import { MdOutlineStarOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "../../type";
import AddToCardBtn from "./AddToCardBtn";
import ProductCardSideView from "./ProductCardSideView";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import FormattedPrice from "./FormattedPrice";
interface Props {
  item: ProductProps;
  setSearchText?: any;
}

const ProductCard = ({ item, setSearchText }: Props) => {
  const navigation = useNavigate();

  const handleProduct = () => {
    navigation(`/product/${item?._id}`);
    setSearchText && setSearchText("");
  };

  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer">
      <div className="w-full h-60 relative p-2 group">
        <span
          onClick={open}
          className="bg-black text-skyText absolute left-0 right-0 w-16 text-xs text-center py-1 rounded-md font-semibold inline-block z-10"
        >
          save {percentage.toFixed(0)}%
        </span>
        <img
          src={item?.images[0]}
          onClick={handleProduct}
          alt="product-image"
          className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"
        />
        <ProductCardSideView product={item} />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className=" text-xs uppercase font-semibold text-lightText">
          {item?.overView}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">{item?.name}</h2>
        <div className="text-base text-lightText flex items-center">
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
        </div>

        <AddToCardBtn product={item} />
      </div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-black z-50 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Hurry up!
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">
                    You are going to save{" "}
                    <span className="text-skyText">
                      <FormattedPrice
                        amount={item?.regularPrice - item?.discountedPrice}
                      />{" "}
                    </span>
                    from this product.
                  </p>
                  <p className="text-sm/6 text-white/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, consequatur?
                  </p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
