package org.example.backend.MyWs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.socket.WebSocketSession;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SessionBean {
    private WebSocketSession session;
    private int userId;
}
