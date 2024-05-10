package org.example.backend.MyWs;

import com.alibaba.fastjson2.JSON;
import jakarta.websocket.*;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.example.backend.entity.Message;

import org.example.backend.entity.User;
import org.example.backend.DTO.WsMessage;
import org.example.backend.repository.MessageRepository;
import org.example.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 消息提醒计数WebSocket
 */
@ServerEndpoint("/ws/{receiverId}")
@Component
@Slf4j
public class MyWsServer {
    private static UserRepository userRepository;
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        MyWsServer.userRepository = userRepository;
    }
    private static MessageRepository messageRepository;
    @Autowired
    public void setMessageRepository(MessageRepository messageRepository) {
        MyWsServer.messageRepository = messageRepository;
    }
    private static final ConcurrentHashMap<Integer, Session> sessionPool = new ConcurrentHashMap<>();//一个用户建立一个连接 如果想实现一个用户同时和多个用户聊天 需要修改
    private int getUid(Session session) {
        return userRepository.findUserByEmail(session.getUserPrincipal().getName()).getId();
    }
    /**
     * 链接成功调用的方法
     */
    @OnOpen

    public void onOpen(Session session) throws IOException{
        log.info(session.getUserPrincipal().toString());
        int uid = getUid(session);
        sessionPool.put(uid, session);//将用户id和session绑定
        log.info("开启与{}的连接", uid);
    }
    /**
     * 链接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session) {
        int uid = getUid(session);
        sessionPool.remove(uid);//移除用户id和session的绑定
        log.info("关闭与{}的连接", uid);
    }
    /**
     * 收到客户端消息后调用的方法
     */
    @OnMessage
    public void onMessage(String message, @PathParam(value = "receiverId") int receiverId,Session session) throws IOException {
        int senderId = getUid(session);
        log.info("接收到来自{}发给{}的消息:{}", senderId, receiverId, message);
        WsMessage<String> wsMessage = JSON.parseObject(message, WsMessage.class);
        if (wsMessage.getType().equals("message")) {
            message = wsMessage.getData();
            Session receiverSession = sessionPool.get(receiverId);
            Message msg = new Message();
            msg.setContent(message);
            msg.setSender(new User());
            msg.getSender().setId(senderId);
            msg.getSender().setEmail(userRepository.findUserById(senderId).getEmail());
            msg.setReceiver(new User());
            msg.getReceiver().setId(receiverId);
            msg.getReceiver().setEmail(userRepository.findUserById(receiverId).getEmail());
            msg.setSendTime(LocalDateTime.now());
            msg.setSeen(false);
            if (receiverSession != null) {//如果接收者在线 则发送消息
                receiverSession.getBasicRemote().sendText(JSON.toJSONString(new WsMessage<Message>("message", msg)));//发送消息
            }
            messageRepository.save(msg);//保存消息
        }

        else if(wsMessage.getType().equals("seen")) {//打开聊天框
            List<Message> messages = messageRepository.getMessagesBySenderIdAndReceiverIdAndSeenFalse(receiverId, senderId);
            for (Message msg : messages) {
                msg.setSeen(true);
                messageRepository.save(msg);
            }
            if(sessionPool.get(receiverId) != null)
                sessionPool.get(receiverId).getBasicRemote().sendText(JSON.toJSONString(new WsMessage<Integer>("seen", senderId)));//打开聊天框
        }
    }

    /**
     * 发送错误时的处理
     */
    @OnError
    public void onError(Session session, Throwable error) {
        log.error("发生错误");
        log.info( error.getMessage());
    }
}