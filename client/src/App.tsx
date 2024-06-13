import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BannerCategories from "./ui/BannerCategories";
import Blog from "./ui/Blog";
import Categories from "./ui/Categories";
import DiscountBanner from "./ui/DiscountBanner";
import Highlights from "./ui/Highlights";
import HomeBanner from "./ui/HomeBanner";
import ProductList from "./ui/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const data: any = useLoaderData();
  useEffect(() => {
    setProducts(data?.data);
  }, [data]);

  return (
    <div>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList products={products} />
      <DiscountBanner />
      <Blog />
    </div>
  );
}

export default App;
