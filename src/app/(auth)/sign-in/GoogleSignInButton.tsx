"use client";

import handleSignInWithGoogle from "@/lib/server-actions/auth/google/handleSignInWithGoogle";

function GoogleSignInButton() {
  return <button onClick={() => handleSignInWithGoogle()}>Hola</button>;
}

export default GoogleSignInButton;
