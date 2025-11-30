import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:pl-[344px] 2xl:pr-[344px] bg-[linear-gradient(168deg,rgba(43,25,15,1)_0%,rgba(61,29,29,1)_50%,rgba(43,30,15,1)_100%)]">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start opacity-40 pointer-events-none overflow-hidden">
        <div className="flex flex-col w-full h-full items-start">
          <img className="w-[60px] h-[60px]" alt="Component" />
        </div>
      </div>

      <div className="relative flex flex-col items-start gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl">
        <Badge className="h-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
          <span className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[11px] sm:text-[12px] md:text-[13.1px] tracking-[0.40px] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
            Премиальный кредитный консалтинг
          </span>
        </Badge>

        <h1 className="self-stretch text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[61.9px] tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.80px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[72px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
          ПОМОЩЬ В КРЕДИТОВАНИИ ДЛЯ ФИЗИЧЕСКИХ И ЮР. ЛИЦ
        </h1>

        <div className="flex flex-col w-full max-w-screen-md items-start pt-1 sm:pt-2 pb-0 px-0">
          <p className="text-[#cad5e2] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19.9px] tracking-[0] leading-6 sm:leading-7 md:leading-8 [font-family:'Robloxian_2-Black',Helvetica] font-black">
            Разберу вашу кредитную историю бесплатно и сразу скажу
            реальные перспективы. Работаю по стратегии, а не 'на удачу'.
            Прямые связи с управляющими и менеджерами — подача заявок
            через сотрудников банков, очно или дистанционно.
          </p>
        </div>

        <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4 pt-4 sm:pt-6 pb-0 px-0 self-stretch w-full">
          <Button className="h-auto gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-[17px] rounded-lg sm:rounded-[10px] shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] w-full xs:w-auto">
            <span className="text-white text-[12px] sm:text-[13.1px] text-center tracking-[0] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Получить консультацию
            </span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <Button
            variant="outline"
            className="h-auto px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-[#fffefe1a] rounded-lg sm:rounded-[10px] border border-solid border-[#fffefe33] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] hover:bg-[#fffefe1a] w-full xs:w-auto"
          >
            <span className="text-white text-[12px] sm:text-[13px] text-center tracking-[0] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Узнать подробнее
            </span>
          </Button>
        </div>
      </div>

      <div className="absolute w-full left-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,105,0,0)_0%,rgba(255,105,0,0.5)_50%,rgba(255,105,0,0)_100%)]" />
    </section>
  );
};
