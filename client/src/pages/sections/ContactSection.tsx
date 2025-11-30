import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/figmaAssets/component-1-2.svg",
    text: "Финансирование под\nзалог от частных\nинвесторов",
    className: "pt-6 pb-6",
  },
  {
    icon: "/figmaAssets/component-1.svg",
    text: "Быстрое рассмотрение\nзаявки и выдача средств",
    className: "pt-6 pb-12",
  },
  {
    icon: "/figmaAssets/component-1-4.svg",
    text: "Возможность получения\nпри проблемной\nкредитной истории",
    className: "pt-6 pb-6",
  },
  {
    icon: "/figmaAssets/component-1-6.svg",
    text: "Гибкие условия\nпогашения",
    className: "pt-6 pb-12",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="py-24 bg-[#f8f9fb] flex flex-col w-full items-center">
      <div className="flex items-center justify-center gap-16 w-full max-w-[1232px] px-4">
        <Card className="w-[584px] bg-white rounded-3xl border-[#f0f4f9] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]">
          <CardContent className="p-10 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start gap-4 px-6 ${feature.className} bg-[#f8f9fb] rounded-2xl`}
                >
                  <div className="flex w-12 h-12 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
                    <img
                      className="w-6 h-6"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#314157] text-[13px] tracking-[0] leading-6 flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black whitespace-pre-line">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-2 p-6 rounded-2xl border-[#ff680033] bg-[linear-gradient(177deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)] border border-solid">
              <div className="flex flex-col items-start w-full">
                <p className="bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(245,73,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[13.3px] tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Специальное предложение
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#0e162b] text-[20.3px] tracking-[0] leading-8 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  Работаем с проблемной КИ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col w-[584px] items-start gap-6">
          <div className="flex flex-col w-full">
            <h2 className="text-[#0e162b] text-[40.1px] tracking-[0] leading-[48px] flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Частное финансирование
            </h2>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[#45556c] text-[16.4px] tracking-[0] leading-7 flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Есть финансирование под залог от частных инвесторов, в том
              <br />
              числе при проблемной кредитной истории.
            </p>
          </div>

          <div className="flex flex-col px-0 py-2 w-full">
            <p className="text-[#45556c] text-[13.1px] tracking-[0] leading-6 flex items-center justify-center [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Это альтернативное решение для тех, кто получил отказ в банках или
              <br />
              нуждается в быстром получении средств. Работаем с надежными
              <br />
              инвесторами, обеспечивая прозрачность и безопасность сделки.
            </p>
          </div>

          <Button className="h-auto px-8 py-4 rounded-[10px] shadow-[0px_4px_6px_-4px_#ff680033,0px_10px_15px_-3px_#ff680033] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
            <span className="text-white text-[13.1px] text-center tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Узнать условия финансирования
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
