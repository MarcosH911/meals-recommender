import { useSearchParams } from "next/navigation";

function AuthErrorMessage() {
  const searchParams = useSearchParams();

  console.log(searchParams);

  if (!searchParams.has("error")) return null;

  return <div>{searchParams.get("error")}</div>;
}

export default AuthErrorMessage;
