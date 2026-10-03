import ProductGrid from "../components/ProductGrid";
export default function Shop() {
  return (<>
    <section className="grid h-72 place-items-center bg-sand bg-cover text-center" style={{ backgroundImage: "url(/images/shop-banner.jpg)" }}>
      <div><h1 className="text-5xl font-medium">Shop</h1><p className="mt-2 font-medium">Home &gt; Shop</p></div>
    </section>
    <ProductGrid />
  </>);
}
