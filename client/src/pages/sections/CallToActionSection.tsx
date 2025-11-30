import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const advantagesData = [
  {
    icon: "/figmaAssets/component-1-23.svg",
    title: "Бесплатный анализ",
    description:
      "Разбор кредитной истории без оплаты. Честная оценка перспектив одобрения",
  },
  {
    icon: "/figmaAssets/component-1-10.svg",
    title: "Стратегический подход",
    description:
      "Работаю по проверенной стратегии, а не методом проб и ошибок",
  },
  {
    icon: "/figmaAssets/component-1-25.svg",
    title: "Прямые связи с банками",
    description:
      "Подача заявок через сотрудников банков. Личные контакты с управляющими",
  },
  {
    icon: "/figmaAssets/component-1-1.svg",
    title: "Индивидуальные решения",
    description:
      "Работа очно и дистанционно. Подбор оптимальных условий для каждого клиента",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-80 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f9fb]">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <div className="flex flex-col items-center w-full">
            <h2 className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#0e162b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[39.9px] text-center tracking-[0] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px]">
              Преимущества работы со мной
            </h2>
          </div>

          <div className="flex flex-col max-w-2xl items-center px-2">
            <p className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#45556c] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.4px] text-center tracking-[0] leading-6 sm:leading-7">
              Профессиональный подход к решению ваших финансовых задач
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
          {advantagesData.map((advantage, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border-[#f0f4f9] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] border border-solid"
            >
              <CardContent className="p-5 sm:p-6 md:p-7 lg:p-[33px] flex flex-col gap-5 sm:gap-6 md:gap-8">
                <div className="flex w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 items-center justify-center rounded-xl sm:rounded-[14px] overflow-hidden shadow-[0px_4px_6px_-4px_#ff680033,0px_10px_15px_-3px_#ff680033] bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
                  <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" alt="Icon" src={advantage.icon} />
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#0e162b] text-[14px] sm:text-[15px] md:text-[16.7px] tracking-[0] leading-6 sm:leading-7">
                    {advantage.title}
                  </h3>

                  <p className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#45556c] text-[12px] sm:text-[13px] md:text-[13.3px] tracking-[0] leading-5 sm:leading-6 md:leading-[26px]">
                    {advantage.description}
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
