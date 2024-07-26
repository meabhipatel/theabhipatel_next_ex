import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Theabhipatel",
  description: "This is my Products page..",
};

const url = "https://dummyjson.com/products";

const fetchProducts = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.products as IProduct[];
  } catch (error) {
    return [];
  }
};

const Projects = async () => {
  const products = await fetchProducts();
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-wrap justify-center text-slate-200/90">
        {products?.map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
      ;
    </>
  );
};

export default Projects;

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    [key: string]: any;
  };
  images: string[];
  thumbnail: string;
}
