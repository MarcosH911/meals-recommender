"use client";

import Image from "next/image";
import useSWR from "swr";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import WeightFormContext from "@/contexts/WeightFormContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  name: string;
  apiPath: string;
}

function WeightInputSelect({ name, apiPath }: Props) {
  const { data: options, isLoading } = useSWR(apiPath);

  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <ScrollArea type="always" className="h-[min(40rem,calc(100vh-18rem))] mt-6">
      <div className="grid grid-cols-3 gap-2">
        {isLoading &&
          Array(33)
            .fill(true)
            .map((_, index) => (
              <AspectRatio key={index}>
                <div className="w-full h-full bg-slate-400 rounded-lg animate-pulse"></div>
              </AspectRatio>
            ))}
        {options?.data.map(
          (
            option: { text: string; key: string; imageUrl: string },
            index: number
          ) => (
            <AspectRatio key={index}>
              <div
                className={twMerge(
                  "relative border-transparent bg-slate-400 rounded-lg w-full h-full group shadow-md transition duration-150",
                  formValues.includeIngredients.includes(option.key) &&
                    "bg-slate-600"
                )}
              >
                <div className="bg-gradient-to-t from-slate-900/60 via-transparent to-transparent w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg">
                  <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition duration-300 from-slate-900/60 to-transparent rounded-lg"></div>
                </div>
                <label
                  htmlFor={"checkbox" + name + option.text + index}
                  className="absolute h-full w-full inset-0 cursor-pointer z-30"
                ></label>
                <Checkbox
                  id={"checkbox" + name + option.text + index}
                  onCheckedChange={() =>
                    setFormValues((values) => ({
                      ...values,
                      includeIngredients: values.includeIngredients.includes(
                        option.key
                      )
                        ? values.includeIngredients.filter(
                            (key) => key !== option.key
                          )
                        : [...values.includeIngredients, option.key],
                    }))
                  }
                  checked={formValues.includeIngredients.includes(option.key)}
                  className="absolute top-2 left-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-slate-900 z-20"
                />
                <div className="absolute w-[calc(100%-2rem)] h-[calc(100%-2rem)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
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
                  className="absolute bottom-1.5 text-lg left-1/2 -translate-x-1/2 z-20 text-white group-hover:-translate-y-1 transition duration-300"
                >
                  {option.text}
                </Label>
              </div>
            </AspectRatio>
          )
        )}
      </div>
    </ScrollArea>
  );
}

export default WeightInputSelect;
