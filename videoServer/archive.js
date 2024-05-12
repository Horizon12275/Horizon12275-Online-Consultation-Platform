const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: 9000,
  path: '/myapp',
  ssl: {},
  proxied: true, // 是否使用反向代理
  ip_limit: 5000, // 限制ip数量
  concurrent_limit: 5000, // 限制并发数量
  allow_discovery: true, // 是否允许客户端请求整个服务器的id列表
  cleanup_out_msgs: 1000, // 清理输出消息
});