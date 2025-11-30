import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="px-4 md:px-[344px] py-24 bg-white flex flex-col w-full items-start">
      <Card className="items-start p-16 relative w-full rounded-3xl border-[#ff68001a] shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(175deg,rgba(43,15,15,1)_0%,rgba(61,51,29,1)_100%)] overflow-hidden border border-solid">
        <div className="absolute top-px right-px w-96 h-96 bg-[#ff68001a] rounded-[33554400px] blur-[32px]" />

        <div className="left-px bottom-px w-96 h-96 bg-[#fa2b361a] absolute rounded-[33554400px] blur-[32px]" />

        <CardContent className="flex flex-col w-full max-w-[1102px] mx-auto items-center gap-8 relative p-0">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 h-auto rounded-[33554400px] border border-solid border-[#fa2b3633] bg-[linear-gradient(90deg,rgba(251,44,54,0.1)_0%,rgba(255,105,0,0.1)_100%)]">
            <img
              className="relative w-4 h-4"
              alt="Component"
              src="/figmaAssets/component-1-7.svg"
            />

            <span className="w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(255,100,103,1)_0%,rgba(255,137,4,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[13.3px] text-center tracking-[0.40px] leading-6 whitespace-nowrap [font-family:'Robloxian_2-Black',Helvetica] font-black">
              Свяжитесь со мной
            </span>
          </Badge>

          <div className="flex flex-col items-center relative w-full">
            <h2 className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Robloxian_2-Black',Helvetica] font-black text-white text-[42.8px] text-center tracking-[0] leading-[48px]">
              +7 993 051-11-97
            </h2>
          </div>

          <Button className="px-10 py-5 h-auto rounded-[14px] overflow-hidden shadow-[0px_4px_6px_-4px_#ff68004c,0px_10px_15px_-3px_#ff68004c] bg-[linear-gradient(90deg,rgba(231,0,11,1)_0%,rgba(255,105,0,1)_100%)] inline-flex items-center justify-center hover:opacity-90 transition-opacity">
            <span className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Robloxian_2-Black',Helvetica] font-black text-white text-[15px] text-center tracking-[0] leading-7 whitespace-nowrap">
              Связаться в Telegram
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
