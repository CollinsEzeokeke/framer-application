import { Suspense } from "react";
import LoadoingCounter from "./loading";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Suspense fallback={<LoadoingCounter />}>
    <Hero />
    </Suspense>
    </>
  );
}
