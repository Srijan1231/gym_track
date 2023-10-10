import { Hero } from "@/components/Hero/Hero";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Navigation/Nav";

export default function Home() {
  return (
    <Layout>
      <div className="   lg:m-0 md:m-0 dark:mt-2">
        <Hero />
      </div>
    </Layout>
  );
}
