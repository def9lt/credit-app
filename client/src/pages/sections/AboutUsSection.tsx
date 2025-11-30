import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TELEGRAM_LINK = "https://t.me/sup_resolve";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-[344px] py-12 sm:py-16 md:py-20 lg:py-24 bg-white flex flex-col w-full items-start">
      <Card className="items-start p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative w-full rounded-2xl md:rounded-3xl border-[#ff68001a] shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(175deg,rgba(43,15,15,1)_0%,rgba(61,51,29,1)_100%)] overflow-hidden border border-solid">
        <div className="absolute top-px right-px w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#ff68001a] rounded-full blur-[32px]" />

        <div className="left-px bottom-px w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#fa2b361a] absolute rounded-full blur-[32px]" />

        <CardContent className="flex flex-col w-full max-w-[1102px] mx-auto items-center gap-5 sm:gap-6 md:gap-8 relative p-0">
          <Badge className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 h-auto rounded-full border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
            <img
              className="relative w-3 h-3 sm:w-4 sm:h-4"
              alt="Component"
              src="/figmaAssets/component-1-7.svg"
            />

            <span className="w-fit bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[12px] sm:text-[13.3px] text-center tracking-[0.40px] leading-5 sm:leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Свяжитесь со мной
            </span>
          </Badge>

          <div className="flex flex-col items-center relative w-full">
            <h2 className="flex items-center justify-center w-full [font-family:'Robloxian_2-Black',Helvetica] font-black text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42.8px] text-center tracking-[0] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px]">
              +7 993 051-11-97
            </h2>
          </div>

          <Button 
            asChild
            className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 h-auto rounded-xl sm:rounded-[14px] overflow-hidden shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center w-fit [font-family:'Robloxian_2-Black',Helvetica] font-black text-white text-[13px] sm:text-[14px] md:text-[15px] text-center tracking-[0] leading-6 sm:leading-7 whitespace-nowrap">
                Связаться в Telegram
              </span>
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
