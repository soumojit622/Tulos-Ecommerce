import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Logo from "./Logo";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NoAccessToCart = () => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gradient-to-b from-purple-50 to-gray-50 p-6">
      <Card className="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <Logo className="text-gray-600 text-3xl font-extrabold">Tulos</Logo>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 text-lg font-medium">
            Log in to view your cart items and checkout. Don&apos;t miss out on your favorite products!
          </p>
          <SignInButton mode="modal">
            <Button className="w-full font-semibold bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:bg-gray-800 transition duration-300" size="lg">
              Sign in
            </Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center">
          <p className="text-gray-500 text-sm">
            Don&apos;t have an account?
          </p>
          <SignUpButton mode="modal">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-100 transition-all duration-300" size="lg">
              Create an account
            </Button>
          </SignUpButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccessToCart;
