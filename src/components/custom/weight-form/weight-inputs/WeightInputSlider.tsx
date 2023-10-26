"use client";

import { useContext } from "react";

import WeightFormContext from "@/contexts/WeightFormContext";
import { Slider } from "@/components/ui/slider";
import { Label } from "@radix-ui/react-label";

interface Props {
  options: {
    key?: string;
    label?: string;
    min: number;
    max: number;
    step: number;
  }[];
  name: string;
}

function WeightInputSlider({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div className="pt-6">
      {options.map((option, index) => (
        <div key={index}>
          {option.label && (
            <div className="-mb-2 mt-4">
              <Label className="font-medium">{option.label}</Label>
            </div>
          )}
          <Slider
            autoFocus
            min={option.min}
            max={option.max}
            step={option.step}
            className="cursor-pointer mt-6"
            value={
              option.key
                ? [Number(formValues[name][option.key])]
                : [Number(formValues[name])]
            }
            defaultValue={[0]}
            onValueChange={([value]) => {
              if (option.key) {
                setFormValues((values) => ({
                  ...values,
                  [name]: { [option.key!]: value.toString() },
                }));
              } else {
                setFormValues((values) => ({
                  ...values,
                  [name]: value.toString(),
                }));
              }
            }}
          />
          <div className="pb-1 pt-3 flex justify-between -mx-1">
            {Array((option.max - option.min) / option.step + 1)
              .fill(true)
              .map((_, i) => (
                <p key={i} className="w-7 text-center">
                  {option.min + i * option.step}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeightInputSlider;
