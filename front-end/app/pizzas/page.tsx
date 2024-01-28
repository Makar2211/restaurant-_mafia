import { CustomBtn, PizzaParams } from "@/components";
import { host } from "@/constants";
import { ItemsProps } from "@/types";
import { FetchPizza } from "@/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "mafia pizza",
  description: "catalog of pizzas",
};

export default async function PizzaKatalog() {
  const pizzaItems = await FetchPizza();

  return (
    <section className="layout">
      <div className="flex justify-between items-center w-[100%] h-[75px] border-2 px-10">
        <h2 className="block font-bold text-[30px]">Піци</h2>
        <PizzaParams />
      </div>
      <div className="flex items-center justify-between flex-wrap  px-12 pt-[100px] ">
        {pizzaItems.map((pizza: ItemsProps) => {
          const { imageURL, title, desc, price } = pizza;

          return (
            <div className="max-w-[450px] min-h-[840px] relative  mb-6 rounded-[10px] hover:shadow-2xl">
              <Link href={`/pizzas/${pizza._id}`}>
                <img
                  className="cursor-pointer"
                  src={host + imageURL}
                  alt={pizza.title}
                />
              </Link>
              <div className="p-5">
                <h3 className="text-black text-[24px] font-bold cursor-pointer leading-[30px] mb-[10px] max-h-[90px]">
                  {title}
                </h3>
                <div>{desc}</div>
                <span className="absolute bottom-[95px] left-[20px] right-0 font-bold text-[24px]">
                  {price} грн
                </span>
                <CustomBtn
                  title="Замовити"
                  style="w-[90%] absolute bottom-[20px]  left-[20px] right-0 text-[#8c9f3f] rounded font-bold border-[1px] border-[#8c9f3f] py-[18px] hover:bg-[#8c9f3f] hover:text-white "
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
