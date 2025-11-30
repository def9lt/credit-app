import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    icon: "/figmaAssets/component-1-14.svg",
    title: "Целевые и нецелевые\nкредиты",
    description:
      "Все программы кредитования для\nбизнеса. Работа с крупными суммами",
  },
  {
    icon: "/figmaAssets/component-1-28.svg",
    title: "Профессиональная\nподдержка",
    description: "Собственный юридический и\nбухгалтерский отдел, аналитики",
  },
  {
    icon: "/figmaAssets/component-1-11.svg",
    title: "Помощь по 115-ФЗ / 161-ФЗ",
    description:
      "Решение вопросов блокировок и\nограничений. Работаю с компаниями\nстарше 1 года",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 px-4 bg-[linear-gradient(168deg,rgba(61,29,29,1)_0%,rgba(43,25,15,1)_55%,rgba(43,15,15,1)_100%)] relative">
      <div className="flex flex-col w-full h-full items-start absolute top-0 left-0 opacity-40">
        <div className="flex flex-col w-[1920px] h-[844px] items-start pl-0 pr-[1860px] pt-0 pb-[784px] relative">
          <img className="relative w-[60px] h-[60px]" alt="Component" />
        </div>
      </div>

      <div className="relative max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col w-full items-center gap-6 mb-[190px]">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 h-auto rounded-[33554400px] border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
            <img
              className="w-4 h-4"
              alt="Component"
              src="/figmaAssets/component-1-22.svg"
            />
            <span className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[13.5px] text-center tracking-[0.40px] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Бизнесс решения
            </span>
          </Badge>

          <h2 className="text-white text-[40.9px] text-center tracking-[0] leading-[48px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
            Финансовые решения для ИП, ООО и физических лиц
          </h2>

          <div className="flex flex-col max-w-screen-md w-[768px] items-center">
            <p className="text-[#cad5e2] text-[16.6px] text-center tracking-[0] leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Все программы кредитования, целевые и нецелевые. Работаю с
              крупными
              <br />
              суммами. Собственный юридический и бухгалтерский отдел, аналитики.
              <br />
              Возможна помощь в решении вопросов по 115-ФЗ / 161-ФЗ.
            </p>
          </div>
        </div>

        <div className="flex w-full items-start justify-center gap-8 mb-[80px]">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-[389.33px] bg-[#fffefe0d] rounded-2xl border border-solid border-[#fffefe1a] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]"
            >
              <CardContent className="p-[33px]">
                <div className="flex w-12 h-12 items-center justify-center mb-6 rounded-[10px] bg-[linear-gradient(135deg,rgba(251,44,54,0.2)_0%,rgba(255,105,0,0.2)_100%)]">
                  <img className="w-6 h-6" alt="Component" src={card.icon} />
                </div>

                <h3 className="text-white text-[20.4px] tracking-[0] leading-8 mb-6 [font-family:'Robloxian_2-Black',Helvetica] font-black whitespace-pre-line">
                  {card.title}
                </h3>

                <p className="text-[#cad5e2] text-[13.4px] tracking-[0] leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black whitespace-pre-line">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col w-full items-center">
          <Button className="px-8 py-4 h-auto rounded-[10px] shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
            <span className="text-white text-[13.1px] text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Консультация для бизнеса
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
