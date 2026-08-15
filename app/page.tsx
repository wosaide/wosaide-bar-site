import { ProductHome } from "./_components/ProductHome";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ skipIntro?: string }>;
}) {
  const params = await searchParams;
  return <ProductHome locale="zh-Hans" skipIntro={params.skipIntro === "1"} />;
}
