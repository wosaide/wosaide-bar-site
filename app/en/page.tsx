import { ProductHome } from "../_components/ProductHome";

export default async function EnglishHome({
  searchParams,
}: {
  searchParams: Promise<{ skipIntro?: string }>;
}) {
  const params = await searchParams;
  return <ProductHome locale="en" skipIntro={params.skipIntro === "1"} />;
}
