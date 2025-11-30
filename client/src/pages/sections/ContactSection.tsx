import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TELEGRAM_LINK = "https://t.me/sup_resolve";

const features = [
  {
    icon: "/figmaAssets/component-1-2.svg",
    text: "Финансирование под залог от частных инвесторов",
  },
  {
    icon: "/figmaAssets/component-1.svg",
    text: "Быстрое рассмотрение заявки и выдача средств",
  },
  {
    icon: "/figmaAssets/component-1-4.svg",
    text: "Возможность получения при проблемной кредитной истории",
  },
  {
    icon: "/figmaAssets/component-1-6.svg",
    text: "Гибкие условия погашения",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f9fb] flex flex-col w-full items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full max-w-[1232px] px-4 sm:px-6 md:px-8">
        <Card className="w-full lg:w-1/2 bg-white rounded-2xl md:rounded-3xl border-[#f0f4f9] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]">
          <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-[#f8f9fb] rounded-xl sm:rounded-2xl"
                >
                  <div className="flex w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 items-center justify-center rounded-xl sm:rounded-[14px] bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
                    <img
                      className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#314157] text-[12px] sm:text-[13px] tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-1.5 sm:gap-2 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-[#ff680033] bg-[linear-gradient(177deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)] border border-solid">
              <div className="flex flex-col items-start w-full">
                <p className="bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(245,73,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[12px] sm:text-[13.3px] tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Специальное предложение
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#0e162b] text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-7 sm:leading-8 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Работаем с проблемной КИ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col w-full lg:w-1/2 items-start gap-4 sm:gap-5 md:gap-6">
          <div className="flex flex-col w-full">
            <h2 className="text-[#0e162b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40.1px] tracking-[0] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Частное финансирование
            </h2>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[#45556c] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.4px] tracking-[0] leading-6 sm:leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Есть финансирование под залог от частных инвесторов, в том
              числе при проблемной кредитной истории.
            </p>
          </div>

          <div className="flex flex-col py-1 sm:py-2 w-full">
            <p className="text-[#45556c] text-[12px] sm:text-[13px] md:text-[13.1px] tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Это альтернативное решение для тех, кто получил отказ в банках или
              нуждается в быстром получении средств. Работаем с надежными
              инвесторами, обеспечивая прозрачность и безопасность сделки.
            </p>
          </div>

          <Button 
            asChild
            className="h-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-[10px] shadow-[0px_4px_6px_-4px_#ff680033,0px_10px_15px_-3px_#ff680033] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]"
          >
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <span className="text-white text-[12px] sm:text-[13.1px] text-center tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                Узнать условия финансирования
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
