function GoogleSignInButton() {
  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="1009145564434-nok0toe3eiofp17h4dfnu9b4sn0oe3dn.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-nonce=""
        data-auto_prompt="false"
      ></div>

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_black"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}

export default GoogleSignInButton;
