import WeightInput from "@/components/custom/weight-form/WeightInput";

function Page() {
  return (
    <WeightInput
      step={1}
      key={1}
      name="weight"
      label="What is your current weight?"
      placeholder={{ kg: "120", lb: "270" }}
      description="We don't share this information, so be honest :)"
    />
  );
}

export default Page;
