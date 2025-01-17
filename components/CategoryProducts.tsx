"use client";
import { CATEGORIES_QUERYResult, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ProductCard from "./ProductCard";
import NoProductsAvailable from "./NoProductsAvailable";

interface Props {
  categories: CATEGORIES_QUERYResult;
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);
      const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  return (
    <div className="flex flex-col gap-6 py-8 lg:flex-row">
      {/* Category Section (Left side) */}
      <div className="lg:w-1/4 flex flex-col gap-6 border-r pr-6">
        {/* Category Label (Left aligned) */}
        <div className="text-left text-gray-600 font-semibold text-lg mb-4">
          <span>Select a category to view products</span>
        </div>

        {/* Horizontal Categories */}
        <div className="flex flex-wrap items-center gap-4 border-b pb-4">
          {categories?.map((item) => (
            <Button
              key={item?._id}
              onClick={() => setCurrentSlug(item?.slug?.current as string)}
              className={`px-4 py-2 font-medium rounded-lg transition-all ${
                item?.slug?.current === currentSlug
                  ? "bg-gray-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {item?.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Product Section (Right side) */}
      <div className="lg:w-3/4">
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] bg-gray-50 rounded-lg shadow">
            <div className="text-center space-y-2">
              <Loader2 className="animate-spin text-gray-600 w-6 h-6 mx-auto" />
              <p className="text-lg font-medium text-gray-700">
                Loading products...
              </p>
            </div>
          </div>
        ) : products.length ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product: Product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </motion.div>
        ) : (
          <NoProductsAvailable
            selectedTab={currentSlug}
            className="w-full mt-10"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
