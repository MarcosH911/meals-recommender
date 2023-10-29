import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSlider from "@/components/custom/weight-form/weight-inputs/WeightInputSlider";
import { ScrollArea } from "@/components/ui/scroll-area";

function Page() {
  return (
    <WeightInputWrapper
      step={11}
      name="exerciseDistribution"
      label="How much time do you want to exercise each day?"
      description="(minutes)"
    >
      <ScrollArea type="auto" className="h-[min(40rem,calc(100vh-18rem))]">
        <WeightInputSlider
          name="exerciseDistribution"
          options={[
            { key: "monday", label: "Monday", min: 0, max: 120, step: 10 },
            { key: "tuesday", label: "Tuesday", min: 0, max: 120, step: 10 },
            {
              key: "wednesday",
              label: "Wednesday",
              min: 0,
              max: 120,
              step: 10,
            },
            { key: "thursday", label: "Thursday", min: 0, max: 120, step: 10 },
            { key: "friday", label: "Friday", min: 0, max: 120, step: 10 },
            { key: "saturday", label: "Saturday", min: 0, max: 120, step: 10 },
            { key: "sunday", label: "Sunday", min: 0, max: 120, step: 10 },
          ]}
        />
      </ScrollArea>
    </WeightInputWrapper>
  );
}

export default Page;
