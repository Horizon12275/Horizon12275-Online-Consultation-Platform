const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: 9000,
  path: '/myapp',
  ssl: {},
  proxied: true, // 是否使用反向代理
  key: 'peerjs', // 服务器的key
  ip_limit: 5000, // 限制ip数量
  concurrent_limit: 5000, // 限制并发数量
  allow_discovery: true, // 是否允许客户端请求整个服务器的id列表
  cleanup_out_msgs: 1000, // 清理输出消息
});

let peers = {};

peerServer.on('connection', (client) => {
  peers[client.id] = client;
  console.log('A new peer connected with id:', client.id);
  console.log('Current peers:', Object.keys(peers));
});

peerServer.on('disconnect', (client) => {
  delete peers[client.id];
  console.log('A peer disconnected with id:', client.id);
  console.log('Current peers:', Object.keys(peers));
});