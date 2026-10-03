import { categories } from "../data/products";
export default function BrowseRange() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-24">
      <h2 className="text-center text-3xl font-bold">Browse The Range</h2>
      <p className="mb-14 mt-2 text-center text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid gap-5 sm:grid-cols-3">
        {categories.map((c) => (
          <div key={c.id} className="text-center">
            <img src={c.img} alt={c.name} className="h-[480px] w-full rounded-xl bg-sand object-cover" />
            <h3 className="mt-6 text-2xl font-semibold">{c.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
