"use client";

import handleSignOut from "@/lib/server-actions/auth/handleSignOut";

function SignOutButton() {
  return <button onClick={() => handleSignOut()}>Sign out</button>;
}

export default SignOutButton;
