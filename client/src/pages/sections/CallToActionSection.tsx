import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const advantagesData = [
  {
    icon: "/figmaAssets/component-1-23.svg",
    title: "Бесплатный анализ",
    description:
      "Разбор кредитной истории\nбез оплаты. Честная оценка\nперспектив одобрения",
  },
  {
    icon: "/figmaAssets/component-1-10.svg",
    title: "Стратегический подход",
    description:
      "Работаю по проверенной\nстратегии, а не методом\nпроб и ошибок",
  },
  {
    icon: "/figmaAssets/component-1-25.svg",
    title: "Прямые связи с\nбанками",
    description:
      "Подача заявок через\nсотрудников банков. Личные\nконтакты с управляющими",
  },
  {
    icon: "/figmaAssets/component-1-1.svg",
    title: "Индивидуальные\nрешения",
    description:
      "Работа очно и\nдистанционно. Подбор\nоптимальных условий для\nкаждого клиента",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-6 lg:px-80 py-24 bg-[#f8f9fb]">
      <div className="flex flex-col max-w-screen-xl items-start gap-16 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center w-full">
            <h2 className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#0e162b] text-[39.9px] text-center tracking-[0] leading-[48px]">
              Преимущества работы со мной
            </h2>
          </div>

          <div className="flex flex-col max-w-2xl items-center">
            <p className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#45556c] text-[16.4px] text-center tracking-[0] leading-7">
              Профессиональный подход к решению ваших финансовых задач
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {advantagesData.map((advantage, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl overflow-hidden border-[#f0f4f9] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] border border-solid"
            >
              <CardContent className="p-[33px] flex flex-col gap-8">
                <div className="flex w-14 h-14 items-center justify-center rounded-[14px] overflow-hidden shadow-[0px_4px_6px_-4px_#ff680033,0px_10px_15px_-3px_#ff680033] bg-[linear-gradient(135deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
                  <img className="w-7 h-7" alt="Icon" src={advantage.icon} />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#0e162b] text-[16.7px] tracking-[0] leading-7 whitespace-pre-line">
                    {advantage.title}
                  </h3>

                  <p className="[font-family:'Robloxian_2-Black',Helvetica] font-black text-[#45556c] text-[13.3px] tracking-[0] leading-[26px] whitespace-pre-line">
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
