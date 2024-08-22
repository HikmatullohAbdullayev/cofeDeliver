import { useQuery } from "@tanstack/react-query";
import axiosData from '../axios';
import ProductCards from "./ProductCards";

function ProductsSection() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await axiosData.get('');
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return <div className="text-red-500">Xatolik yuz berdi!</div>;
  }

  return (
    <div>
      <h3>Bizning qahvalarimiz</h3>
      <div className="grid  grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-[20px] ">

      {
        data.map((item) =>(
          <ProductCards key={item.id} item={item}  />
        ))
      }
      </div>
    </div>
  );
}

export default ProductsSection;
