import Image from "next/image";

import CategorySelector from "@/components/common/categorySelector";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/productsList";
import { db } from "@/db";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px5">
          <Image
            src="/banner-01.svg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-auto"
          />
        </div>

        <ProductList products={products} title="Mais vendidos" />

        <div>
          <CategorySelector categories={categories} />
        </div>

        <div className="px5">
          <Image
            src="/banner-02.svg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
