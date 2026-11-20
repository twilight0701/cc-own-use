# 养基宝去广告（Loon）

这是基于 `203_1795160507255.zip` 和 `208_1795171181780.har` 两份抓包整理的 Loon 插件，当前目录仅放置 Loon 配置。

插件对广告配置使用响应脚本，将 `splash.switch` 和信息流开关改为 `false` 并清空对应广告 ID；同时拦截抓包中确认的广告上报和试玩广告资源：

- `app-api.yangjibao.com/content/v1/ad/config`：抓包显示服务端仍下发开屏广告配置，脚本会在返回给 App 前关闭开屏广告。
- `app-api.yangjibao.com/content/v1/ad/events`：广告事件上报。
- `lf-cdn-tos.bytescm.com/.../playable-component-sdk/package.ugen.json`：试玩广告 SDK 资源。
- `guanggao-prod.cn-shanghai.log.aliyuncs.com`：抓包中使用的广告日志服务域名。

新抓包中广告配置仍启用开屏广告，但信息流广告开关关闭；广告事件上报和试玩 SDK 资源也仍出现。`/unify_ad` 的响应只包含空的气泡通知字段，因此没有拦截该接口，避免误伤普通通知。

没有拦截 `app-api.yangjibao.com` 整个域名；基金行情、持仓、账户及会员信息等 API 与广告接口共用该域名。`/app_config` 也保留，因为响应中包含多项普通功能和入口配置，不能仅凭广告字段就整体丢弃。

将整个 `Loon` 文件夹（插件、`yangjibao-ad.js` 和本说明）上传到仓库后，再把 `yangjibao-adblock.plugin` 导入 Loon。插件脚本地址目前指向仓库 `main` 分支的 Raw 文件；若默认分支不是 `main`，请同步修改插件中的分支名。HTTPS 路径规则需要 Loon 的 MITM 证书已安装并受系统信任；若养基宝当前版本使用证书锁定，脚本可能无法读取响应。修改后请在 Loon 更新插件并完全退出、重开养基宝，以重新获取广告配置。本规则尚未在手机上实测。

推送到 GitHub 后，可通过仓库的 Raw 文件链接导入此插件。Shadowrocket 目录本次未创建。
