package org.example.backend.MyWs;

import com.alibaba.fastjson2.JSON;
import jakarta.websocket.*;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.example.backend.entity.Client;
import org.example.backend.entity.Consultation;
import org.example.backend.entity.Message;

import org.example.backend.entity.User;
import org.example.backend.DTO.WsMessage;
import org.example.backend.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 消息提醒计数WebSocket
 */
@ServerEndpoint("/ws/{receiverId}")//接收者id 如果当前用户是专家 则为客户id 如果当前用户是客户 则为专家id
@Component
@Slf4j
public class MyWsServer {
    private static UserRepository userRepository;
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        MyWsServer.userRepository = userRepository;
    }
    private static ClientRepository clientRepository;
    @Autowired
    public void setClientRepository(ClientRepository clientRepository) {
        MyWsServer.clientRepository = clientRepository;
    }
    private static ExpertRepository expertRepository;
    @Autowired
    public void setExpertRepository(ExpertRepository expertRepository) {
        MyWsServer.expertRepository = expertRepository;
    }
    private static MessageRepository messageRepository;
    @Autowired
    public void setMessageRepository(MessageRepository messageRepository) {
        MyWsServer.messageRepository = messageRepository;
    }
    private static ConsultationRepository consultationRepository;
    @Autowired
    public void setConsultationRepository(ConsultationRepository consultationRepository) {
        MyWsServer.consultationRepository = consultationRepository;
    }
    private static final ConcurrentHashMap<Integer, Session> sessionPool = new ConcurrentHashMap<>();//用户id和session的映射
    private int getUid(Session session) {//根据session获取用户id
        return userRepository.findUserByEmail(session.getUserPrincipal().getName()).getId();
    }
    private User.Role getRole(Session session) {//根据session获取用户角色
        return userRepository.findUserByEmail(session.getUserPrincipal().getName()).getRole();
    }
    /**
     * 链接成功调用的方法
     */
    @OnOpen

    public void onOpen(Session session) throws IOException{
        log.info(session.getUserPrincipal().toString());
        int uid = getUid(session);
        sessionPool.put(uid, session);//将用户id和session绑定
        log.info("与USER {} 建立连接", uid);

    }
    /**
     * 链接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session) {
        int uid = getUid(session);
        sessionPool.remove(uid);//移除用户id和session的绑定
        log.info("关闭与USER {} 的连接", uid);
    }
    /**
     * 收到客户端消息后调用的方法
     */
    @OnMessage
    public void onMessage(String message, @PathParam(value = "receiverId") int receiverId,Session session) throws IOException {
        //未来在这里加入鉴权逻辑 鉴定客户是否有资格咨询专家
        Consultation consultation = null;
        int senderId = getUid(session);
        if (getRole(session) == User.Role.expert){ //如果当前用户是专家 则接收者是客户 把客户id转换为用户id
            consultation = consultationRepository.getConsultationByClientIdAndExpertId(receiverId,expertRepository.findExpertByUserId(senderId).getId());
            receiverId = clientRepository.findClientById(receiverId).getUser().getId();
        }
        else { //如果当前用户是客户 则接收者是专家 把专家id转换为用户id
            consultation = consultationRepository.getConsultationByClientIdAndExpertId(clientRepository.getClientByUserId(senderId).getId(), receiverId);
            receiverId = expertRepository.findExpertById(receiverId).getUser().getId();
        }
        if (consultation == null) {
            session.getBasicRemote().sendText(JSON.toJSONString(new WsMessage<String>("error", "您没有资格咨询该专家！")));
        }

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
            consultation.setTime(LocalDateTime.now());//更新最后一次咨询时间
            consultationRepository.save(consultation);//保存咨询记录
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