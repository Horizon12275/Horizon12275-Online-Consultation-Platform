package org.example.backend.MyWs;


import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component//主处理程序
public class MyWsHandler extends AbstractWebSocketHandler {


    private static final Map<String,SessionBean> sessionMap;
    private static final AtomicInteger clientId;
    private static final StringBuffer stringBuffer;
    static {
        sessionMap=new ConcurrentHashMap<>();
        clientId=new AtomicInteger(0);
        stringBuffer=new StringBuffer();
    }
    @Override//连接建立后
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        SessionBean sessionBean=new SessionBean(session,clientId.getAndIncrement());
        sessionMap.put(session.getId(),sessionBean);
        System.out.println(sessionMap.get(session.getId()).getUserId()+"建立连接");
        stringBuffer.append(sessionMap.get(session.getId()).getUserId()).append("进入群里").append("\n");
        sendMsg(sessionMap);

    }

    @Override//处理消息
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        super.handleTextMessage(session, message);
        System.out.println(sessionMap.get(session.getId()).getUserId()+"说："+message.getPayload());
        stringBuffer.append(sessionMap.get(session.getId()).getUserId()).append("说：").append(message.getPayload()).append("\n");
        sendMsg(sessionMap);
    }

    @Override//处理异常
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        super.handleTransportError(session, exception);
        if(session.isOpen()){
            session.close();
        }
        sessionMap.remove(session.getId());
    }

    @Override//连接关闭后
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        sessionMap.remove(session.getId());
        System.out.println(sessionMap.get(session.getId()).getUserId()+"断开连接");
        stringBuffer.append(sessionMap.get(session.getId()).getUserId()).append("离开群里").append("\n");
        sendMsg(sessionMap);
    }

    public void sendMsg(Map<String,SessionBean> sessionMap) throws Exception {
        for (String key:sessionMap.keySet()){
            WebSocketSession session=sessionMap.get(key).getSession();
            session.sendMessage(new TextMessage("群消息："+stringBuffer.toString()));
        }
    }
}
