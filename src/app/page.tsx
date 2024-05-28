import qs from "qs";
import { HeroSection } from "@/components/custom/HeroSection";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { FeatureSection } from "@/components/custom/FeaturesSection";
import { getHomePageData, getGlobalData } from "@/data/loaders";


function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  // const globalData = await getGlobalData();
  
  // console.dir(globalData, { depth: null });

  const { blocks } = strapiData;
  // console.dir(blocks, { depth: null });
  if (!blocks) return <p>No sections found</p>;

  return <main>{blocks.map(blockRenderer)}</main>;
}
