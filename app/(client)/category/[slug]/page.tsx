import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getAllCategories } from "@/sanity/helpers/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const categories = await getAllCategories();

  return (
    <Container className="py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <Title className="text-4xl font-extrabold text-gray-800">
          Explore Products
        </Title>
        <p className="mt-2 text-lg text-gray-600">
          Discover our curated collection in the{" "}
          {/* <span className="font-semibold text-green-600 capitalize">
            {slug && slug}
          </span>{" "} */}
          category.
        </p>
      </div>

      {/* Products Section */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <CategoryProducts categories={categories} slug={slug} />
      </div>
    </Container>
  );
};

export default CategoryPage;
