"use client";

import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import WeightFormContext from "@/contexts/WeightFormContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  name: string;
  options: { text: string; key: string; imageUrl: string }[];
}

function WeightInputSelect({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <ScrollArea type="always" className="mt-6 h-[min(40rem,calc(100vh-18rem))]">
      <div className="grid grid-cols-3 gap-2">
        {options.map(
          (
            option: { text: string; key: string; imageUrl: string },
            index: number,
          ) => (
            <AspectRatio key={index}>
              <div
                className={twMerge(
                  "group relative h-full w-full rounded-lg border-transparent bg-slate-400 shadow-md transition duration-150",
                  formValues[name].includes(option.key) && "bg-slate-600",
                )}
              >
                <div className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-t from-slate-900/60 via-transparent to-transparent">
                  <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
                </div>
                <label
                  htmlFor={"checkbox" + name + option.text + index}
                  className="absolute inset-0 z-30 h-full w-full cursor-pointer"
                ></label>
                <Checkbox
                  id={"checkbox" + name + option.text + index}
                  onCheckedChange={() =>
                    setFormValues((values) => ({
                      ...values,
                      [name]: values[name].includes(option.key)
                        ? values[name].filter(
                            (key: string) => key !== option.key,
                          )
                        : [...values[name], option.key],
                    }))
                  }
                  checked={formValues[name].includes(option.key)}
                  className="absolute left-2 top-2 z-20 border-white data-[state=checked]:bg-white data-[state=checked]:text-slate-900"
                />
                <div className="absolute left-1/2 top-1/2 h-[calc(100%-2rem)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 p-4">
                  <Image
                    src={option.imageUrl}
                    alt={option.text}
                    fill
                    draggable={false}
                    sizes="112px"
                    // TODO: sizes
                  />
                </div>
                <Label
                  htmlFor={"checkbox" + name + option.text + index}
                  className="absolute bottom-1.5 left-1/2 z-20 -translate-x-1/2 text-lg text-white transition duration-300 group-hover:-translate-y-1"
                >
                  {option.text}
                </Label>
              </div>
            </AspectRatio>
          ),
        )}
      </div>
    </ScrollArea>
  );
}

export default WeightInputSelect;
