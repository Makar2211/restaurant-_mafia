import { SwiperHome } from "@/components/HomeSwiper";

export default function Home() {
  const fakeData = Array.from({ length: 6 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <main className="layout">
        <h2 className="text-center text-[35px] mb-16">Меню доставки</h2>
        <SwiperHome />
      </main>
    </>
  );
}
