"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { Form } from "@/components/ui/form";
import WeightInput from "@/components/custom/WeightInput";
import { Progress } from "@/components/ui/progress";
import { AnimatePresence } from "framer-motion";

const formSchema = z
  .object({
    weight: z
      .number()
      .min(1, { message: "Please, be honest with your weight." })
      .max(999, { message: "Please, be honest with your weight." }),
    desiredWeight: z
      .number()
      .min(1, { message: "Please, be realistic with your desired weight." })
      .max(999, { message: "Please, be realistic with your desired weight." }),
    speed: z.number().int().min(0).max(5),
  })
  .refine((obj) => obj.weight >= obj.desiredWeight, {
    message: "Sorry, we can only help you with losing weight.",
  });

function WeightForm() {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      speed: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Progress value={step * 25} className="mb-10" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WeightInput
                form={form}
                name="weight"
                label="What is your current weight?"
                placeholder={{ kg: "105", lb: "230" }}
                description="We don't share this information, so be honest :)"
                setStep={setStep}
                key={step}
              />
            )}
            {step === 2 && (
              <WeightInput
                form={form}
                name="desiredWeight"
                label="What is your desired weight?"
                placeholder={{ kg: "75", lb: "170" }}
                description="Push yourself to the limit!"
                setStep={setStep}
                key={step}
              />
            )}
            {step === 3 && (
              <WeightInput
                form={form}
                name="speed"
                label="How fast do you want to achieve your goal?"
                setStep={setStep}
              />
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
}

export default WeightForm;
