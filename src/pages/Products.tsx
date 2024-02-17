import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/features/productApi";


const Products = () => {
  const { data, isError, isLoading } = useGetProductsQuery("")
  if (isLoading) {
    return <p>Loading.....</p>
  }
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
