import React from "react";
import Stock from "./Stock"; // Google
import Stock2 from "./Stock2"; // Apple
import Stock3 from "./Stock3"; // Facebook
import Stock4 from "./Stock4"; // Amazon
import "./App.css"; // cleanup
import { Helmet } from "react-helmet";
import firebase from "./firebase";

// Global site tag (gtag.js) - Google Analytics
<Helmet>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}"
  ></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}');

      // デバッグモード(Google Analytics Debugger) = ON
      // gtag('config', '${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}',{ 'debug_mode':true });
    `}
  </script>
</Helmet>;

function App() {
  return (
    // 横幅：768px ≦ 2列 行：自動
    <div className="container mx-auto">
      <div className="bg-gradient-to-br from-pink-400 to-pink-100">
        <div className="flex justify-center flex-wrap text-3xl font-bold text-white">
          Stock Market Dashboard
        </div>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-3 m-3">
          <div className="shadow-lg">
            <Stock />
          </div>
          <div className="shadow-lg">
            <Stock2 />
          </div>
          <div className="shadow-lg">
            <Stock3 />
          </div>
          <div className="shadow-lg">
            <Stock4 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
