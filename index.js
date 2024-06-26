<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
    />
    <title>LIFF: LINE Front-end Framework</title>
    <script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
  </head>
  <body id="body">
    <section id="profile">
      <img
        id="pictureUrl"
        src="https://bucket.ex10.tech/images/0350ceb0-04c4-11ef-808f-0242ac12000b/originalContentUrl.png"
      />
      <p id="userId"></p>
      <p id="displayName"></p>
      <p id="statusMessage"></p>
      <p id="email"></p>
    </section>

    <section id="environment">
      <h4>Environment</h4>
      <p id="Language"></p>
      <p id="Version"></p>
      <p id="isInClient"></p>
      <p id="isLoggedIn"></p>
      <p id="OS"></p>
      <p id="LINEVersion"></p>
      <p id="isApiAvailable"></p>
      <p id="ContextType"></p>
    </section>

    <section id="feature">
      <p id="code"></p>
      <p id="friendShip"></p>
    </section>

    <section id="button">
      <button id="btnOpenWindow">Open Window</button>
      <button id="btnScanCode">Scan Code</button>
      <button id="btnSend">Send Message</button>
      <button id="btnShare">Share Target Picker</button>
      <button id="btnLogIn">Log In</button>
      <button id="btnLogOut">Log Out</button>
    </section>
  </body>
</html>
