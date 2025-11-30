import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="px-[344px] py-24 bg-white flex flex-col w-full items-start">
      <Card className="items-start p-16 relative self-stretch w-full rounded-3xl border-[#ff68001a] shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(164deg,rgba(43,32,15,1)_0%,rgba(61,29,29,1)_50%,rgba(43,29,15,1)_100%)] flex flex-col overflow-hidden border border-solid">
        <CardContent className="p-0 w-full">
          <div className="absolute top-px right-px w-96 h-96 bg-[#ff68001a] rounded-[33554400px] blur-[32px]" />

          <div className="left-px bottom-px w-96 h-96 bg-[#fa2b361a] absolute rounded-[33554400px] blur-[32px]" />

          <div className="flex flex-col w-[1102px] items-start gap-12 relative">
            <div className="flex flex-col items-center gap-6 relative self-stretch w-full">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 h-auto rounded-[33554400px] border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
                <img
                  className="relative w-4 h-4"
                  alt="Component"
                  src="/figmaAssets/component-1-5.svg"
                />

                <span className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[13px] text-center tracking-[0.40px] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Эксклюзивные возможности
                </span>
              </Badge>

              <div className="items-center flex flex-col relative self-stretch w-full">
                <h1 className="self-stretch text-white text-[38.6px] text-center tracking-[0] leading-[48px] relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Кредитные каникулы
                </h1>
              </div>

              <div className="flex flex-col max-w-screen-md w-[768px] items-center relative">
                <p className="w-fit text-[#cad5e2] text-[16.4px] text-center tracking-[0] leading-7 relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Кредитные каникулы до 12 месяцев без процентов и вреда для
                  кредитной
                  <br />
                  истории. За год работы — ни одного отказа.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-8 relative self-stretch w-full">
              {features.map((feature, index) => (
                <div key={index} className="relative self-stretch w-[346px]">
                  <div className="flex w-16 h-16 items-center justify-center absolute top-0 left-[calc(50.00%_-_32px)] rounded-2xl bg-[linear-gradient(135deg,rgba(251,44,54,0.2)_0%,rgba(255,105,0,0.2)_100%)]">
                    <img
                      className="relative w-8 h-8"
                      alt="Component"
                      src={feature.icon}
                    />
                  </div>

                  <div className="w-full items-center absolute top-[88px] left-0 flex flex-col">
                    <h3 className="w-fit text-white text-[20.6px] text-center tracking-[0] leading-8 whitespace-nowrap relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="flex flex-col w-full items-center absolute top-[132px] left-0">
                    <p className="w-fit text-[#cad5e2] text-[13.1px] text-center tracking-[0] leading-6 relative flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center relative self-stretch w-full">
              <Button className="px-8 py-4 h-auto rounded-[10px] overflow-hidden shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
                <span className="w-fit text-white text-[13px] text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Оформить кредитные каникулы
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
