"use client";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import Loading from "@/components/Loading";
import NoAccessToCart from "@/components/NoAccessToCart";
import PriceFormatter from "@/components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import paypalLogo from "@/images/paypalLogo.png";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubtotalPrice,
    resetCart,
    getGroupedItems,
  } = useCartStore();
  const { user } = useUser();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const cartProducts = getGroupedItems();

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully!");
    }
  };

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };
      const checkoutUrl = await createCheckoutSession(cartProducts, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pb-20 md:pb-10">
      {isSignedIn ? (
        <Container>
          {cartProducts?.length ? (
            <>
              <div className="flex items-center gap-3 py-6">
                <ShoppingBag className="text-gray-800 w-6 h-6" />
                <h1 className="text-3xl font-bold text-gray-800">
                  Shopping Cart
                </h1>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-10 gap-y-8">
                {/* Products */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="border bg-white rounded-lg shadow-md">
                    {cartProducts?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="border-b p-4 last:border-b-0 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5"
                        >
                          <div className="flex items-center gap-4 w-full sm:w-auto">
                            {product?.images && (
                              <Link
                                href={`/product/${product?.slug?.current}`}
                                className="border rounded-md overflow-hidden group hover:shadow-lg"
                              >
                                <Image
                                  src={urlFor(product?.images[0]).url()}
                                  alt="productImage"
                                  width={120}
                                  height={120}
                                  loading="lazy"
                                  className="object-cover w-24 h-24 sm:w-32 sm:h-32"
                                />
                              </Link>
                            )}
                            <div className="flex-1">
                              <h2 className="font-semibold text-lg text-gray-800 line-clamp-1">
                                {product?.name}
                              </h2>
                              <p className="text-sm text-gray-500">
                                {product?.intro}
                              </p>
                              <p className="text-sm">
                                Variant:{" "}
                                <span className="font-semibold">
                                  {product.variant}
                                </span>
                              </p>
                              <p className="text-sm">
                                Status:{" "}
                                <span className="font-semibold">
                                  {product?.status}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center sm:flex-col sm:gap-2 gap-4">
                            <PriceFormatter
                              amount={(product?.price as number) * itemCount}
                              className="font-bold text-lg text-gray-800"
                            />
                            <QuantityButtons product={product} />
                            <Trash
                              className="w-5 h-5 text-red-600 cursor-pointer hover:text-red-800"
                              onClick={() => handleDeleteProduct(product?._id)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Button
                    onClick={handleResetCart}
                    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
                  >
                    Reset Cart
                  </Button>
                </div>
                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <PriceFormatter amount={getSubtotalPrice()} />
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Discount</span>
                        <PriceFormatter
                          amount={getSubtotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex justify-between text-gray-800 font-bold">
                        <span>Total</span>
                        <PriceFormatter amount={getTotalPrice()} />
                      </div>
                      <Button
                        disabled={loading}
                        onClick={handleCheckout}
                        className="w-full mt-4 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white"
                        size="lg"
                      >
                        Proceed to Checkout With Stripe
                      </Button>

                      <Link
                        href={"/"}
                        className="flex items-center justify-center py-2 mt-2 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        <Image
                          src={paypalLogo}
                          alt="PayPal Logo"
                          className="w-20"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
