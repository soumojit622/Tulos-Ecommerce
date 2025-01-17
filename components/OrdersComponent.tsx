"use client";
import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import React, { useState } from "react";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { format } from "date-fns";
import PriceFormatter from "./PriceFormatter";
import OrderDetailsDialog from "./OrderDetailsDialog";
import { CheckCircle, AlertCircle } from "lucide-react"; // Icons for better UX

const OrdersComponent = ({ orders }: { orders: MY_ORDERS_QUERYResult }) => {
  const [selectedOrder, setSelectedOrder] = useState<
    MY_ORDERS_QUERYResult[number] | null
  >(null);

  return (
    <>
      <TableBody>
        <TooltipProvider>
          {orders?.map((order) => (
            <Tooltip key={order?.orderNumber}>
              <TooltipTrigger asChild>
                <TableRow
                  className="cursor-pointer hover:bg-gray-100 h-16 transition-all duration-200 ease-in-out transform"
                  onClick={() => setSelectedOrder(order)}
                >
                  <TableCell className="font-medium text-gray-800 text-center">
                    {order.orderNumber?.slice(-10) ?? "N/A"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-700 text-center">
                    {order?.orderDate &&
                      format(new Date(order.orderDate), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell className="text-gray-800 text-center">
                    {order?.customerName}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-600 text-center">
                    {order?.email}
                  </TableCell>
                  <TableCell className="text-gray-800 text-center">
                    <PriceFormatter
                      amount={order?.totalPrice}
                      className="font-semibold text-black"
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    {order?.status && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${order?.status === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} flex items-center justify-center gap-2`}
                      >
                        {order?.status === "paid" ? (
                          <CheckCircle className="inline-block mr-1 text-green-800 text-sm sm:text-base" />
                        ) : (
                          <AlertCircle className="inline-block mr-1 text-yellow-800 text-sm sm:text-base" />
                        )}
                        <span className="hidden sm:inline">
                          {order?.status}
                        </span>
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="hidden md:table-cell text-gray-600 text-center">
                    {order?.invoice ? order?.invoice?.number : "----"}
                  </TableCell>
                </TableRow>
              </TooltipTrigger>
              <TooltipContent className="text-sm p-2 bg-gray-800 text-white rounded-lg">
                Click to see order details
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </TableBody>

      {/* Order Details Dialog */}
      <OrderDetailsDialog
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default OrdersComponent;
