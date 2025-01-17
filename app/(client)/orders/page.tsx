import Container from "@/components/Container";
import OrdersComponent from "@/components/OrdersComponent";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMyOrders } from "@/sanity/helpers/queries";
import { auth } from "@clerk/nextjs/server";
import { FileX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const OrdersPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const orders = await getMyOrders(userId);

  return (
    <Container className="py-10 min-h-screen">
      {orders?.length ? (
        <Card className="w-full shadow-2xl border border-gray-200 rounded-lg overflow-hidden bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-6">
            <CardTitle className="text-3xl font-bold tracking-tight">Order List</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ScrollArea className="w-full">
              <Table className="border-separate border-spacing-2">
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="w-auto text-gray-700 font-semibold text-center">Order Number</TableHead>
                    <TableHead className="hidden md:table-cell text-gray-700 font-semibold text-center">Date</TableHead>
                    <TableHead className="text-gray-700 font-semibold text-center">Customer</TableHead>
                    <TableHead className="hidden sm:table-cell text-gray-700 font-semibold text-center">Email</TableHead>
                    <TableHead className="text-gray-700 font-semibold text-center">Total</TableHead>
                    <TableHead className="text-gray-700 font-semibold text-center">Status</TableHead>
                    <TableHead className="hidden sm:table-cell text-gray-700 font-semibold text-center">Invoice Number</TableHead>
                  </TableRow>
                </TableHeader>
                <OrdersComponent orders={orders} />
                <ScrollBar orientation="horizontal" />
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-xl">
          <FileX className="h-24 w-24 text-gray-500 mb-6" />
          <Title className="text-3xl font-semibold text-gray-800">No orders found</Title>
          <p className="mt-2 text-lg text-gray-600 text-center max-w-md">
            It looks like you haven&apos;t placed any orders yet. Start shopping to see your orders here!
          </p>
          <Button asChild className="mt-6 bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 rounded-lg py-3 px-8 shadow-lg">
            <Link href={"/"}>Browse Products</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default OrdersPage;
