import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TELEGRAM_LINK = "https://t.me/sup_resolve";

const featureCards = [
  {
    icon: "/figmaAssets/component-1-14.svg",
    title: "Целевые и нецелевые кредиты",
    description:
      "Все программы кредитования для бизнеса. Работа с крупными суммами",
  },
  {
    icon: "/figmaAssets/component-1-28.svg",
    title: "Профессиональная поддержка",
    description: "Собственный юридический и бухгалтерский отдел, аналитики",
  },
  {
    icon: "/figmaAssets/component-1-11.svg",
    title: "Помощь по 115-ФЗ / 161-ФЗ",
    description:
      "Решение вопросов блокировок и ограничений. Работаю с компаниями старше 1 года",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-[linear-gradient(168deg,rgba(61,29,29,1)_0%,rgba(43,25,15,1)_55%,rgba(43,15,15,1)_100%)] relative overflow-hidden">
      <div className="flex flex-col w-full h-full items-start absolute top-0 left-0 opacity-40 pointer-events-none">
        <div className="flex flex-col w-full h-full items-start">
          <img className="w-[60px] h-[60px]" alt="Component" />
        </div>
      </div>

      <div className="relative max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col w-full items-center gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Badge className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 h-auto rounded-full border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
            <img
              className="w-3 h-3 sm:w-4 sm:h-4"
              alt="Component"
              src="/figmaAssets/component-1-22.svg"
            />
            <span className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[12px] sm:text-[13.5px] text-center tracking-[0.40px] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Бизнесс решения
            </span>
          </Badge>

          <h2 className="text-white text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40.9px] text-center tracking-[0] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px] [font-family:'Robloxian_2-Black',Helvetica] font-black px-2">
            Финансовые решения для ИП, ООО и физических лиц
          </h2>

          <div className="flex flex-col max-w-screen-md w-full items-center px-2">
            <p className="text-[#cad5e2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.6px] text-center tracking-[0] leading-6 sm:leading-7 [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Все программы кредитования, целевые и нецелевые. Работаю с крупными
              суммами. Собственный юридический и бухгалтерский отдел, аналитики.
              Возможна помощь в решении вопросов по 115-ФЗ / 161-ФЗ.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap w-full items-stretch justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#fffefe0d] rounded-xl sm:rounded-2xl border border-solid border-[#fffefe1a] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]"
            >
              <CardContent className="p-5 sm:p-6 md:p-7 lg:p-[33px]">
                <div className="flex w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 items-center justify-center mb-4 sm:mb-5 md:mb-6 rounded-lg sm:rounded-[10px] bg-[linear-gradient(135deg,rgba(251,44,54,0.2)_0%,rgba(255,105,0,0.2)_100%)]">
                  <img className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" alt="Component" src={card.icon} />
                </div>

                <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20.4px] tracking-[0] leading-7 sm:leading-8 mb-3 sm:mb-4 md:mb-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  {card.title}
                </h3>

                <p className="text-[#cad5e2] text-[12px] sm:text-[13px] md:text-[13.4px] tracking-[0] leading-5 sm:leading-6 [font-family:'Robloxian_2-Black',Helvetica] font-black">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col w-full items-center">
          <Button 
            asChild
            className="px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-lg sm:rounded-[10px] shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]"
          >
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <span className="text-white text-[12px] sm:text-[13.1px] text-center tracking-[0] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
                Консультация для бизнеса
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
