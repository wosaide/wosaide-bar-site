import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "../_components/SiteShell";

export const metadata: Metadata = {
  title: "加入讨论群",
  description: "扫码加入 WOS Aide Bar 用户讨论群。",
};

export default function CommunityPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <SiteShell locale="zh-Hans">
      <main className="community-page" lang="zh-Hans">
        <section className="wrap community-layout">
          <div className="community-copy">
            <p className="community-kicker">WOS Aide Community</p>
            <h1>一起讨论，<br />一起把工具做得更好。</h1>
            <p className="community-lede">
              分享检索经验、反馈问题、提出功能建议，也可以看看其他研究者如何使用 WOS Aide Bar。
            </p>

            <ol className="community-steps">
              <li><span>01</span>打开微信</li>
              <li><span>02</span>使用“扫一扫”</li>
              <li><span>03</span>发送加入申请</li>
            </ol>

            <Link className="community-back" href="/?replay=1">
              ← 返回首页
            </Link>
          </div>

          <div className="community-qr-card">
            <div className="community-qr-heading">
              <div>
                <span>WeChat</span>
                <strong>WOS Aide Bar 讨论群</strong>
              </div>
              <b>扫码加入</b>
            </div>

            <Image
              alt="WOS Aide Bar 微信讨论群二维码"
              height={1192}
              priority
              src={`${basePath}/brand/wechat-community-qr.png`}
              width={1036}
            />

            <p className="community-expiry">
              当前二维码已超过微信标注的有效期。页面结构已就绪，更新二维码图片后即可正式使用。
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
