import { TbBrandNextjs } from "react-icons/tb";
import {
  SiReact,
  SiGoogleanalytics,
  SiSemrush,
  SiMeta,
  SiGoogleads,
} from "react-icons/si";
import { Card } from "./ui/card";

export default function TeckStack() {
  return (
    <section className="col-span-2">
      <div className="px-5">
        <h2>🛠️ Tools and Technology</h2>
      </div>
      <Card className="flex flex-wrap justify-start items-center gap-2 p-5">
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-orange-300">
            <SiSemrush size={25} />
          </div>
          Semrush
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-blue-500">
            <SiMeta size={25} />
          </div>
          Meta Ads
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-yellow-300">
            <SiGoogleanalytics size={25} />
          </div>
          GA4
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-blue-300">
            <SiGoogleads size={25} />
          </div>
          Google Ads
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-white">
            <TbBrandNextjs size={25} />
          </div>
          Nextjs
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-sky-400">
            <SiReact size={25} />
          </div>
          Reactjs
        </div>
      </Card>
    </section>
  );
}
