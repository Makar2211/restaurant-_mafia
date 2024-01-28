"use client";
import { pizzaParams } from "@/constants";
import { pizzaPage } from "@/redux/PizzaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import React, { useState } from "react";

export const PizzaParams = () => {
  const count = useAppSelector((state) => state.pizza.pizzaPage);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center relative">
      {pizzaParams.map((pizza, index) => (
        <Link href={pizza.url}>
          <div
            key={index}
            className={`cursor-pointer  px-[25px] ${
              index === count ? "active" : ""
            }`}
            onClick={() => dispatch(pizzaPage(index))}
          >
            {pizza.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
