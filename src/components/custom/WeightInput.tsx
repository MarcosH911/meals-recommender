import { motion } from "framer-motion";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import type { UseFormReturn } from "react-hook-form";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { twMerge } from "tailwind-merge";

interface Props {
  form: UseFormReturn<
    {
      weight: number;
      desiredWeight: number;
      speed: number;
    },
    any,
    undefined
  >;
  name: "weight" | "desiredWeight" | "speed";
  label: string;
  placeholder?: { kg: string; lb: string };
  description?: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function WeightInput({
  form,
  name,
  label,
  placeholder,
  description,
  setStep,
}: Props) {
  const [units, setUnits] = useState<"lb" | "kg">("lb");

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-3xl font-medium">{label}</FormLabel>
            {name === "speed" ? (
              <>
                <div className="h-2"></div>
                <FormControl>
                  <Slider
                    defaultValue={[1]}
                    min={1}
                    max={5}
                    step={1}
                    className="cursor-pointer"
                    onValueChange={([value]) => form.setValue("speed", value)}
                  />
                </FormControl>
                <div className="pt-1 pb-2 flex justify-between px-1.5">
                  {Array(5)
                    .fill(true)
                    .map((_, i) => (
                      <p key={i}>{i + 1}</p>
                    ))}
                </div>
                <FormDescription>
                  {form.getValues().speed === 1 && (
                    <p>
                      <strong>Slow but steady:</strong> Choose this option for a
                      gradual and sustainable weight loss journey.
                    </p>
                  )}
                  {form.getValues().speed === 2 && (
                    <p>
                      <strong>Steady progress:</strong> Opt for this level to
                      maintain a balanced pace towards your weight loss goals.
                    </p>
                  )}
                  {form.getValues().speed === 3 && (
                    <p>
                      <strong>Moderate pace:</strong> This option strikes a
                      balance between speed and sustainability.
                    </p>
                  )}
                  {form.getValues().speed === 4 && (
                    <p>
                      <strong>Accelerated results:</strong> Select this for
                      faster weight loss with commitment and discipline.
                    </p>
                  )}
                  {form.getValues().speed === 5 && (
                    <p>
                      <strong>Rapid transformation:</strong> For those ready to
                      embrace an intense weight loss journey, choose this level.
                    </p>
                  )}
                </FormDescription>
              </>
            ) : (
              <>
                <div className="py-2 flex gap-2">
                  <Button
                    variant={units === "lb" ? "secondary" : "ghost"}
                    onClick={(e) => {
                      e.preventDefault();
                      setUnits("lb");
                    }}
                  >
                    lb
                  </Button>
                  <Button
                    variant={units === "kg" ? "secondary" : "ghost"}
                    onClick={(e) => {
                      e.preventDefault();
                      setUnits("kg");
                    }}
                  >
                    kg
                  </Button>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={
                      units === "lb"
                        ? placeholder && placeholder.lb
                        : placeholder && placeholder.kg
                    }
                    type="number"
                    min={0}
                    max={999}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </>
            )}
          </FormItem>
        )}
      />
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStep((step) => step - 1);
          }}
          className={twMerge(name === "weight" && "invisible")}
        >
          Previous
        </Button>
        <Button
          onClick={(e) => {
            name != "speed" && e.preventDefault();
            setStep((step) => step + 1);
          }}
          // disabled={
          //   (name === "weight" && !form.getValues().weight) ||
          //   (name === "desiredWeight" && !form.)
          // }
        >
          {name === "speed" ? "Submit" : "Next"}
        </Button>
      </div>
    </motion.div>
  );
}
export default WeightInput;
