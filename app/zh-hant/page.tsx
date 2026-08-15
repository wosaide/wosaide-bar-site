import { ProductHome } from "../_components/ProductHome";

export default async function TraditionalChineseHome({
  searchParams,
}: {
  searchParams: Promise<{ skipIntro?: string }>;
}) {
  const params = await searchParams;
  return <ProductHome locale="zh-Hant" skipIntro={params.skipIntro === "1"} />;
}
