import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const creditTypes = [
  {
    icon: "/figmaAssets/component-1-12.svg",
    gradient:
      "bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]",
    title: "Ипотека",
    description: "Помощь в получении ипотеки на выгодных\nусловиях",
  },
  {
    icon: "/figmaAssets/component-1-13.svg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(255,105,0,1)_0%,rgba(153,63,0,1)_100%)]",
    title: "Автокредиты",
    description: "Кредиты на покупку автомобилей всех\nмарок",
  },
  {
    icon: "/figmaAssets/component-1-9.svg",
    gradient:
      "bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%),linear-gradient(180deg,rgba(15,23,43,1)_0%,rgba(49,77,145,1)_100%)]",
    title: "Потребительские кредиты",
    description: "Нецелевые кредиты на любые нужды",
  },
  {
    icon: "/figmaAssets/component-1-16.svg",
    gradient:
      "bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]",
    title: "Рефинансирование",
    description: "Объединение кредитов под более низкий\nпроцент",
  },
  {
    icon: "/figmaAssets/component-1-21.svg",
    gradient:
      "bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]",
    title: "Кредитные карты",
    description: "Оформление карт с выгодными условиями",
  },
  {
    icon: "/figmaAssets/component-1-3.svg",
    gradient:
      "bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]",
    title: "Залоговые кредиты",
    description: "Кредиты под залог недвижимости и\nтранспорта",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f8f9fb] py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-[#0e162b] text-[38.6px] text-center tracking-[0] leading-[48px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Виды кредитов
            </h2>
          </div>

          <div className="flex flex-col max-w-2xl items-center">
            <p className="text-[#45556c] text-[16.4px] text-center tracking-[0] leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Работаю со всеми видами кредитов: потребительские, авто, ипотека,
              <br />
              рефинансирование
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-[19px] gap-y-6">
          {creditTypes.map((credit, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl border-[#f0f4f9] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] border border-solid overflow-hidden"
            >
              <CardContent className="p-[33px] flex flex-col gap-6">
                <div
                  className={`flex w-16 h-16 items-center justify-center rounded-[14px] ${credit.gradient}`}
                >
                  <img
                    className="w-8 h-8"
                    alt={credit.title}
                    src={credit.icon}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-[#0e162b] text-[16px] tracking-[0] leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                    {credit.title}
                  </h3>

                  <p className="text-[#45556c] text-[13px] tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black whitespace-pre-line">
                    {credit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
