// 养基宝去开屏广告
// 改写 /content/v1/ad/config 的响应：关掉开屏开关（splash.switch）
// 并清空开屏广告位 ID（splash.ad_id），App 就不会再向穿山甲请求开屏创意。
// 其它字段（信息流配置等）原样保留；解析失败时原样放行，不影响正常使用。
let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data && obj.data.splash) {
      obj.data.splash.switch = false;
      obj.data.splash.ad_id = "";
      body = JSON.stringify(obj);
    }
  } catch (e) {}
}
$done({ body });
