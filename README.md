# 养基宝去广告（Loon）

这是基于 `203_1795160507255.zip` 抓包整理的 Loon 插件，当前目录仅放置 Loon 配置。

插件拦截抓包中确认的广告相关请求：

- `app-api.yangjibao.com/content/v1/ad/config`：返回包含开屏广告开关的广告配置。
- `app-api.yangjibao.com/content/v1/ad/events`：广告事件上报。
- `app-api.yangjibao.com/unify_ad`：统一广告接口。
- `lf-cdn-tos.bytescm.com/.../playable-component-sdk/package.ugen.json`：试玩广告 SDK 资源。
- `guanggao-prod.cn-shanghai.log.aliyuncs.com`：抓包中使用的广告日志服务域名。

没有拦截 `app-api.yangjibao.com` 整个域名；基金行情、持仓、账户及会员信息等 API 与广告接口共用该域名。`/app_config` 也保留，因为响应中包含多项普通功能和入口配置，不能仅凭广告字段就整体丢弃。

将 `yangjibao-adblock.plugin` 导入 Loon 后启用。HTTPS 路径规则需要 Loon 的 MITM 证书已安装并受系统信任；若养基宝当前版本使用证书锁定，相关 URL Rewrite 可能无法生效。规则只依据本次抓包观察到的路径，尚未在手机上实测，请检查应用启动、行情和广告展示后再决定是否继续启用。

推送到 GitHub 后，可通过仓库的 Raw 文件链接导入此插件。Shadowrocket 目录本次未创建。
