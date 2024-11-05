import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";
import Script from 'next/script';
const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
     <Script
        src="https://sf1-scmcdn-cn.feishucdn.com/obj/feishu-static/op/fe/devtools_frontend/remote-debug-0.0.1-alpha.6.js"
        strategy="beforeInteractive" // 你可以根据需要选择加载策略
      />
      <Home />
      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}
