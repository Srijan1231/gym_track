import { Hero } from "@/components/Hero/Hero";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Navigation/Nav";

export default function Home() {
  return (
    <Layout>
      <div className=" p-3">
        {/* Navigation */}
        <Nav />
        <div className=" mt-2  ">
          <Hero />
        </div>
      </div>
    </Layout>
  );
}
