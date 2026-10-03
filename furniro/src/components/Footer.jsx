import Features from "./Features";
const cols = [
  { title: "Links", items: ["Home", "Shop", "About", "Contact"] },
  { title: "Help", items: ["Payment Options", "Returns", "Privacy Policies"] },
];
export default function Footer() {
  return (<>
    <Features />
    <footer className="mx-auto max-w-[1440px] px-5 py-12 lg:px-24">
      <div className="grid gap-10 border-b pb-10 md:grid-cols-4">
        <div><h3 className="text-2xl font-bold">Furniro.</h3><p className="mt-4 text-gray-500">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p></div>
        {cols.map((c) => (
          <div key={c.title}><h4 className="mb-6 text-gray-500">{c.title}</h4>
            <ul className="space-y-4 font-medium">{c.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
        ))}
        <div><h4 className="mb-6 text-gray-500">Newsletter</h4>
          <div className="flex gap-3"><input placeholder="Enter your email" className="border-b border-black text-sm outline-none" /><button className="border-b border-black text-sm font-medium uppercase">Subscribe</button></div></div>
      </div>
      <p className="pt-8">2023 Furniro. All rights reserved</p>
    </footer>
  </>);
}
