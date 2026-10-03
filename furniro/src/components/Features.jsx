import { LuTrophy } from "react-icons/lu";
import { FiShield, FiTruck, FiHeadphones } from "react-icons/fi";
import { features } from "../data/products";
const map = { trophy: LuTrophy, shield: FiShield, ship: FiTruck, support: FiHeadphones };
export default function Features() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-24">
        {features.map((f) => { const I = map[f.icon]; return (
          <div key={f.id} className="flex items-center gap-4"><I className="text-5xl" />
            <div><h4 className="text-xl font-semibold">{f.title}</h4><p className="text-gray-500">{f.text}</p></div></div>
        ); })}
      </div>
    </section>
  );
}
