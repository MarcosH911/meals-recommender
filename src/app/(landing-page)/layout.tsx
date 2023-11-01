import createServerClient from "@/utils/supabase/createServerClient";
import { cookies } from "next/headers";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

async function Layout({ children }: Props) {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  const { data: session } = await supabase.auth.getSession();

  return (
    <div className="relative">
      <div className="fixed top-0 h-16 w-full border-b border-slate-300 bg-slate-200">
        {!session ? (
          <div className="absolute right-10 flex h-full items-center justify-center gap-8">
            <Link href="/sign-in">
              <button>Sign In</button>
            </Link>
            <Link href="/sign-up">
              <button>Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className="absolute right-10 flex h-full items-center justify-center gap-8">
            <button>Sign Out</button>
          </div>
        )}
      </div>
      <div className="h-full pt-16">{children}</div>
    </div>
  );
}

export default Layout;
