import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-40 pl-[344px] pr-[680px] bg-[linear-gradient(168deg,rgba(43,25,15,1)_0%,rgba(61,29,29,1)_50%,rgba(43,30,15,1)_100%)]">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start opacity-40">
        <div className="flex flex-col w-[1920px] h-[868px] items-start pl-0 pr-[1860px] pt-0 pb-[808px]">
          <img className="w-[60px] h-[60px]" alt="Component" />
        </div>
      </div>

      <div className="relative flex flex-col items-start gap-6 w-full max-w-4xl">
        <Badge className="h-auto px-4 py-2 rounded-[33554400px] border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
          <span className="bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[13.1px] tracking-[0.40px] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
            Премиальный кредитный консалтинг
          </span>
        </Badge>

        <h1 className="self-stretch text-white text-[61.9px] tracking-[-1.80px] leading-[72px] [font-family:'Robloxian_2-Black',Helvetica] font-black">
          ПОМОЩЬ В<br />
          КРЕДИТОВАНИИ ДЛЯ
          <br />
          ФИЗИЧЕСКИХ И ЮР. ЛИЦ
        </h1>

        <div className="flex flex-col max-w-screen-md w-[768px] items-start pt-2 pb-0 px-0">
          <p className="text-[#cad5e2] text-[19.9px] tracking-[0] leading-8 [font-family:'Robloxian_2-Black',Helvetica] font-black">
            Разберу вашу кредитную историю бесплатно и сразу скажу
            <br />
            реальные перспективы. Работаю по стратегии, а не &#39;на удачу&#39;.
            <br />
            Прямые связи с управляющими и менеджерами — подача заявок
            <br />
            через сотрудников банков, очно или дистанционно.
          </p>
        </div>

        <div className="flex items-start gap-4 pt-6 pb-0 px-0 self-stretch w-full">
          <Button className="h-auto gap-2 px-8 py-[17px] rounded-[10px] shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)]">
            <span className="text-white text-[13.1px] text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Получить консультацию
            </span>
            <ArrowRightIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="h-auto px-8 py-4 bg-[#fffefe1a] rounded-[10px] border border-solid border-[#fffefe33] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] hover:bg-[#fffefe1a]"
          >
            <span className="text-white text-[13px] text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Узнать подробнее
            </span>
          </Button>
        </div>
      </div>

      <div className="absolute w-full left-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,105,0,0)_0%,rgba(255,105,0,0.5)_50%,rgba(255,105,0,0)_100%)]" />
    </section>
  );
};
