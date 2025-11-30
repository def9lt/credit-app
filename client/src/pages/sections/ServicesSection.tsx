import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  "До 90% от рыночной стоимости под низкие ставки",
  "Предоставление собственного залога для ускорения одобрения",
  "Помощь с оформлением ипотеки",
  "Подбор недвижимости под ваши требования",
];

const infoCards = [
  {
    label: "Сумма кредита",
    value: "До 90% стоимости",
  },
  {
    label: "Процентная ставка",
    value: "Низкие ставки",
  },
  {
    label: "Срок рассмотрения",
    value: "От 1 дня",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-[344px] bg-[linear-gradient(168deg,rgba(61,29,29,1)_0%,rgba(43,25,15,1)_55%,rgba(43,15,15,1)_100%)]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
        <div className="flex flex-col w-full lg:w-[584px] items-start gap-6">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 h-auto rounded-[33554400px] border border-solid border-[#fb2c3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
            <img
              className="w-4 h-4"
              alt="Component"
              src="/figmaAssets/component-1-17.svg"
            />
            <span className="text-[#ff6800] text-[13.4px] tracking-[0.40px] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Защищенные решения
            </span>
          </Badge>

          <div className="flex flex-col w-full">
            <h2 className="text-white text-[39.2px] tracking-[0] leading-[48px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Залоговое кредитование
            </h2>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[#cad5e2] text-[16.4px] tracking-[0] leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Залоговое кредитование — до 90% от рыночной стоимости
              <br />
              под низкие ставки. В отдельных случаях возможно
              <br />
              предоставление нашего собственного залога, если это
              <br />
              ускорит или усилит одобрение.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 pt-2 pb-4 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 w-full">
                <div className="flex flex-col w-6 h-7 items-start pt-1">
                  <img
                    className="w-6 h-6"
                    alt="Component"
                    src="/figmaAssets/component-1-6.svg"
                  />
                </div>
                <div className="text-[#cad5e2] text-[13px] tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  {feature}
                </div>
              </div>
            ))}
          </div>

          <Button className="inline-flex items-center justify-center px-8 py-4 h-auto rounded-[10px] shadow-[0px_4px_6px_-4px_#ff680033,0px_10px_15px_-3px_#ff680033] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:opacity-90">
            <span className="text-white text-[13.1px] text-center tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Подробнее о залоговых кредитах
            </span>
          </Button>
        </div>

        <div className="flex flex-col w-full lg:w-[584px] items-start relative">
          <Card className="w-full p-12 rounded-3xl border-[#ff68001a] shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(144deg,rgba(43,30,15,1)_0%,rgba(61,29,29,1)_100%)] border border-solid overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-6">
                {infoCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-2 p-6 w-full bg-[#fffefe0d] rounded-[14px] border border-solid border-[#fffefe1a] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]"
                  >
                    <div className="flex flex-col w-full">
                      <div className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[13.4px] tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                        {card.label}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-white text-[24.6px] tracking-[0] leading-9 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                        {card.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#ff68001a] rounded-[33554400px] blur-[32px]" />
          <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-[#fa2b361a] rounded-[33554400px] blur-[32px]" />
        </div>
      </div>
    </section>
  );
};
