import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

function AuthButtonSubmit({ children }: Props) {
  return (
    <div className="pt-4">
      <Button className="w-full">{children}</Button>
    </div>
  );
}

export default AuthButtonSubmit;
