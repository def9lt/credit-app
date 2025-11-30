import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TELEGRAM_LINK = "https://t.me/sup_resolve";

const features = [
  {
    icon: "/figmaAssets/component-1-19.svg",
    title: "До 12 месяцев",
    description: "Отсрочка платежей без начисления\nпроцентов",
  },
  {
    icon: "/figmaAssets/component-1-18.svg",
    title: "100% одобрение",
    description: "За год работы не было ни одного отказа",
  },
  {
    icon: "/figmaAssets/component-1-20.svg",
    title: "Без вреда КИ",
    description: "Каникулы не влияют на кредитную историю",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-[344px] py-12 sm:py-16 md:py-20 lg:py-24 bg-white flex flex-col w-full items-start">
      <Card className="items-start p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 relative self-stretch w-full rounded-2xl md:rounded-3xl border-[#ff68001a] shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(164deg,rgba(43,32,15,1)_0%,rgba(61,29,29,1)_50%,rgba(43,29,15,1)_100%)] flex flex-col overflow-hidden border border-solid">
        <CardContent className="p-0 w-full">
          <div className="absolute top-px right-px w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#ff68001a] rounded-full blur-[32px]" />

          <div className="left-px bottom-px w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#fa2b361a] absolute rounded-full blur-[32px]" />

          <div className="flex flex-col w-full items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
            <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 relative self-stretch w-full">
              <Badge className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 h-auto rounded-full border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
                <img
                  className="relative w-3 h-3 sm:w-4 sm:h-4"
                  alt="Component"
                  src="/figmaAssets/component-1-5.svg"
                />

                <span className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[11px] sm:text-[13px] text-center tracking-[0.40px] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Эксклюзивные возможности
                </span>
              </Badge>

              <div className="items-center flex flex-col relative self-stretch w-full">
                <h1 className="self-stretch text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38.6px] text-center tracking-[0] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px] relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Кредитные каникулы
                </h1>
              </div>

              <div className="flex flex-col w-full max-w-[90%] sm:max-w-[85%] md:max-w-screen-md items-center relative">
                <p className="w-full text-[#cad5e2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.4px] text-center tracking-[0] leading-6 sm:leading-7 relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Кредитные каникулы до 12 месяцев без процентов и вреда для
                  кредитной истории. За год работы — ни одного отказа.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-4 md:gap-6 lg:gap-8 relative self-stretch w-full">
              {features.map((feature, index) => (
                <div key={index} className="relative w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col items-center min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
                  <div className="flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 items-center justify-center rounded-xl md:rounded-2xl bg-[linear-gradient(135deg,rgba(251,44,54,0.2)_0%,rgba(255,105,0,0.2)_100%)]">
                    <img
                      className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      alt="Component"
                      src={feature.icon}
                    />
                  </div>

                  <div className="w-full items-center mt-4 sm:mt-5 md:mt-6 flex flex-col">
                    <h3 className="w-fit text-white text-[16px] sm:text-[18px] md:text-[20.6px] text-center tracking-[0] leading-7 sm:leading-8 whitespace-nowrap relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="flex flex-col w-full items-center mt-2 sm:mt-3">
                    <p className="w-full text-[#cad5e2] text-[12px] sm:text-[13.1px] text-center tracking-[0] leading-5 sm:leading-6 relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                      {feature.description.replace('\n', ' ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center relative self-stretch w-full">
              <Button 
                asChild
                className="px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-lg sm:rounded-[10px] overflow-hidden shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]"
              >
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <span className="w-fit text-white text-[12px] sm:text-[13px] text-center tracking-[0] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
                    Оформить кредитные каникулы
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
