import { fetchPortfolioItems } from "@/utils";
import PortfolioClient from "@/components/common/portfolio/PortfolioClient";
import { Suspense } from "react";
import LoadingFallback from "@/components/common/LoadingFallback";

export default async function PortfolioSection() {
  // Fetch portfolio items from Sanity
  const portfolioItems = await fetchPortfolioItems();

  // Use suspense while waiting on fetch request
  return (
    <>
      <Suspense fallback={<LoadingFallback contentName={"portfolio items"} />}>
        <PortfolioClient items={portfolioItems} />
      </Suspense>
    </>
  );
}
