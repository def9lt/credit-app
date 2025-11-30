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
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-[344px] bg-[linear-gradient(168deg,rgba(61,29,29,1)_0%,rgba(43,25,15,1)_55%,rgba(43,15,15,1)_100%)]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 items-start gap-4 sm:gap-5 md:gap-6">
          <Badge className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 h-auto rounded-full border border-solid border-[#fb2c3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
            <img
              className="w-3 h-3 sm:w-4 sm:h-4"
              alt="Component"
              src="/figmaAssets/component-1-17.svg"
            />
            <span className="text-[#ff6800] text-[12px] sm:text-[13.4px] tracking-[0.40px] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Защищенные решения
            </span>
          </Badge>

          <div className="flex flex-col w-full">
            <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[39.2px] tracking-[0] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Залоговое кредитование
            </h2>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[#cad5e2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.4px] tracking-[0] leading-6 sm:leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Залоговое кредитование — до 90% от рыночной стоимости
              под низкие ставки. В отдельных случаях возможно
              предоставление нашего собственного залога, если это
              ускорит или усилит одобрение.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:gap-4 pt-2 pb-4 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3 w-full">
                <div className="flex flex-col w-5 h-6 sm:w-6 sm:h-7 items-start pt-0.5 sm:pt-1 flex-shrink-0">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    alt="Component"
                    src="/figmaAssets/component-1-6.svg"
                  />
                </div>
                <div className="text-[#cad5e2] text-[12px] sm:text-[13px] tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  {feature}
                </div>
              </div>
            ))}
          </div>

          <Button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-lg sm:rounded-[10px] shadow-[0px_4px_6px_-4px_#ff680033,0px_10px_15px_-3px_#ff680033] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:opacity-90">
            <span className="text-white text-[12px] sm:text-[13.1px] text-center tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Подробнее о залоговых кредитах
            </span>
          </Button>
        </div>

        <div className="flex flex-col w-full lg:w-1/2 items-start relative mt-8 lg:mt-0">
          <Card className="w-full p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl border-[#ff68001a] shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(144deg,rgba(43,30,15,1)_0%,rgba(61,29,29,1)_100%)] border border-solid overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6">
                {infoCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-1.5 sm:gap-2 p-4 sm:p-5 md:p-6 w-full bg-[#fffefe0d] rounded-xl sm:rounded-[14px] border border-solid border-[#fffefe1a] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]"
                  >
                    <div className="flex flex-col w-full">
                      <div className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[12px] sm:text-[13.4px] tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                        {card.label}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24.6px] tracking-[0] leading-7 sm:leading-8 lg:leading-9 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                        {card.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#ff68001a] rounded-full blur-[32px] hidden lg:block" />
          <div className="absolute -left-4 -bottom-4 sm:-left-6 sm:-bottom-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#fa2b361a] rounded-full blur-[32px] hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
