import { useEffect, useState } from "react";
import { CategoryProps } from "../../type";
import { getData } from "../lib";
import { Link } from "react-router-dom";

interface Props {
  id: string | undefined;
}

const CategoryFilters = ({ id }: Props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = "http://localhost:8000/categories";
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  console.log("id", id);

  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
          Select Categories
        </p>
        <div className="flex flex-col gap-y-2 min-w-40">
          {categories?.map((item: CategoryProps) => (
            <Link
              to={`/category/${item?._base}`}
              key={item?._id}
              className={`text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                item?._base === id
                  ? "text-greenText decoration-greenText"
                  : "text-lightText"
              }`}
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
