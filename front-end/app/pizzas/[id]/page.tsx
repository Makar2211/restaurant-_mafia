import { CustomBtn } from "@/components";
import { host } from "@/constants";
import { Metadata } from "next";

import { MdOutlinePedalBike } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

async function getData(_id: string) {
  const response = await fetch(`http://localhost:4444/pizzas/${_id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) {
    throw new Error("Такой страницы не существует");
  }

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

interface Props {
  params: {
    id: string;
  };
}

export default async function FullPagePizza({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <div className="block pt-[100px] px-[30px]">
      <div className="flex justify-start items-start ">
        <img src={`${host + post.imageURL}`} alt={post.title} />
        <div className="w-[100%] pl-[30px]">
          <div className="text-[40px] font-[900] mb-5">{post.title}</div>
          <div className="mb-[15px] text-[22px] text-[#6b6b6b] font-[500]">
            Інгредієнти
          </div>
          <div className="w-[80%] text-[18px] font-semibold mb-4">
            {post.desc}
          </div>
          <hr />
          <div className="w-[100%] px-7 py-5 bg-[#f4f4f4] h-[300px]">
            <div className="text-[30px] font-bold mb-6">{post.price} грн</div>
            <CustomBtn
              title="Замовити"
              style="w-[230px] mb-8 text-white bg-[#8c9f3f] rounded font-bold border-[1px] border-[#8c9f3f] py-[18px] hover:bg-[#91b306]"
            />
            <div className="flex justify-start items-center mb-2">
              <MdOutlinePedalBike className="w-7 h-7" />
              <div className="ml-4 font-bold">
                Безкоштовна доставка при замовленні від 950 грн
              </div>
            </div>
            <hr />
            <div className="flex justify-start items-center mt-2">
              <BiShoppingBag className="w-7 h-7" />
              <div className="ml-4 font-bold">
                Знижка 0%, якщо забираєте замовлення з ресторану, крім 1+1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
