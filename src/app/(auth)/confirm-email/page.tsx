interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

function Page({ searchParams }: Props) {
  if (!searchParams?.email) {
    return <div>Check your email</div>;
  }

  return <div>We sent you an email to {searchParams.email}</div>;
}

export default Page;
