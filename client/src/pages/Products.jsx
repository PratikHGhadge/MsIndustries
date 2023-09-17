import Navbar from "../components/Navbar";
import ProductDetail from "../components/Products_page_Components/ProductDetail";
import ProductCard from "../components/Products_page_Components/ProductCard";
import Footer from "../components/Footer";

function Products() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-8 w-full mt-8 text-center ">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Our Product Range
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 xl:w-[70vw] xl:mx-auto">
        {ProductDetail.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
