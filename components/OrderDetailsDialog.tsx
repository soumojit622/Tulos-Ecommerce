import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import { FC } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";
import { FileText } from "lucide-react"; // Adding icons for status and invoice download

interface Props {
  order: MY_ORDERS_QUERYResult[number] | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsDialog: FC<Props> = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl bg-white p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-blu-800">
            Order Details - {order?.orderNumber}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-4 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <strong className="font-medium">Customer:</strong>{" "}
              {order?.customerName}
            </div>
            <div>
              <strong className="font-medium">Email:</strong> {order?.email}
            </div>
            <div>
              <strong className="font-medium">Date:</strong>{" "}
              {order?.orderDate &&
                new Date(order?.orderDate).toLocaleDateString()}
            </div>
            <div>
              <strong className="font-medium">Status:</strong>{" "}
              <span className="capitalize text-green-600 font-semibold">
                {order?.status}
              </span>
            </div>
            <div>
              <strong className="font-medium">Invoice Number:</strong>{" "}
              {order?.invoice?.number ?? "N/A"}
            </div>
          </div>

          {order?.invoice && (
            <Button variant="outline" className="mt-4 w-full sm:w-auto">
              {order?.invoice?.hosted_invoice_url && (
                <Link href={order?.invoice?.hosted_invoice_url} target="_blank">
                  <FileText className="mr-2 inline-block" />
                  Download Invoice
                </Link>
              )}
            </Button>
          )}
        </div>

        <Table className="mt-6">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-sm font-medium text-gray-600">
                Product
              </TableHead>
              <TableHead className="text-sm font-medium text-gray-600 text-center">
                Quantity
              </TableHead>
              <TableHead className="text-sm font-medium text-gray-600 text-center">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order?.products?.map((product, index) => (
              <TableRow key={index} className="border-b">
                <TableCell className="flex items-center gap-4 py-4">
                  {product?.product?.images && (
                    <Image
                      src={urlFor(product?.product?.images[0]).url()}
                      alt="Product Image"
                      width={50}
                      height={50}
                      className="border rounded-sm w-14 h-14 object-contain"
                    />
                  )}
                  {product?.product && (
                    <p className="text-sm text-gray-800">
                      {product?.product?.name}
                    </p>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {product?.quantity}
                </TableCell>
                {product?.product?.price && product?.quantity && (
                  <TableCell className="text-center">
                    <PriceFormatter
                      amount={product?.product?.price * product?.quantity}
                      className="font-semibold text-black"
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 flex justify-end">
          <div className="w-full sm:w-1/2 lg:w-1/3 space-y-2">
            {order?.amountDiscount !== 0 && (
              <div className="flex items-center justify-between text-gray-800">
                <strong>Subtotal:</strong>
                <PriceFormatter
                className="mr-5"
                  amount={
                    (order?.totalPrice as number) +
                    (order?.amountDiscount as number)
                  }
                />
              </div>
            )}
            {order?.amountDiscount !== 0 && (
              <div className="flex items-center justify-between text-gray-800">
                <strong>Discount:</strong>
                <PriceFormatter className="mr-5" amount={order?.amountDiscount} />
              </div>
            )}

            <div className="flex items-center justify-between text-lg font-semibold text-black">
              <strong>Total:</strong>
              <PriceFormatter
                amount={order?.totalPrice}
                className="text-black font-bold mr-5"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;
