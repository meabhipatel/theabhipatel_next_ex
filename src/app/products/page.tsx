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
  console.log("products --------->", products);
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex flex-wrap">
        {products?.map((item) => {
          return <ProductCard item={item} />;
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
    user: string;
    rating: number;
    comment: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    [key: string]: any;
  };
  images: {
    url: string;
    altText: string;
  }[];
  thumbnail: string;
}
