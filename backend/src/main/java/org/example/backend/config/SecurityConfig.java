package org.example.backend.config;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.backend.entity.Result;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.io.IOException;
import java.io.PrintWriter;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
         http.authorizeHttpRequests((requests) ->{requests
                                .requestMatchers("/api/article/add").hasRole("expert")//只有专家才能访问
                                .requestMatchers("/api/client/fund","/api/tweet/add").hasRole("user")//只有客户才能访问
                                .requestMatchers("/api/user/register/**",
                                                "/image/**",
                                                "/api/user/sendCode/**",
                                                "/api/application/add",
                                                "/api/article/**",
                                                "/api/comment/article/list/**",
                                                "/api/comment/expert/list/**",
                                                "/api/comment/expert/recommend/**",
                                                "/api/comment/tweet/list/**",
                                                "/api/expert/**",
                                                "/api/speciality/**",
                                                "/api/tag/**",
                                                "/api/application/sendCode/**",
                                                "/api/tweet/**")
                                .permitAll()
                                .anyRequest().authenticated();
                        }
                ).formLogin(
                        conf -> {
                            conf.loginProcessingUrl("/api/user/login");
                            conf.successHandler(this::handleProcess);
                            conf.failureHandler(this::handleProcess);
                            conf.permitAll();
                        }
                ).csrf(AbstractHttpConfigurer::disable)
                .cors(
                        conf -> {
                            CorsConfiguration cors = new CorsConfiguration();

                            cors.addAllowedOrigin("http://localhost:5173");
                            cors.addAllowedOrigin("http://localhost:5174");
                            cors.addAllowedOrigin("http://101.132.129.104:5173");
                            cors.addAllowedOrigin("http://101.132.129.104:5174");
                            cors.addAllowedOrigin("http://202.120.8.117:5173");
                            cors.addAllowedOrigin("http://202.120.8.117:5174");
                            cors.setAllowCredentials(true);//允许携带cookie
                            cors.addAllowedMethod("*");
                            cors.addAllowedHeader("*");
                            cors.addExposedHeader("*");//暴露header
                            UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();//配置源
                            source.registerCorsConfiguration("/**", cors);//对所有接口生效
                            conf.configurationSource(source);
                        }
                ).exceptionHandling(
                        conf->{
                            conf.accessDeniedHandler(this::handleProcess);
                            conf.authenticationEntryPoint(this::handleProcess);
                        }
                ).logout(
                        conf->{
                            conf.logoutUrl("/api/user/logout");
                            conf.logoutSuccessHandler(this::handleProcess);
                        }
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){//密码编码器
        return new BCryptPasswordEncoder();
    }
    private void handleProcess(
            HttpServletRequest request,
            HttpServletResponse response,
            Object exceptionOrAuthentication) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        PrintWriter writer = response.getWriter();

        if (exceptionOrAuthentication instanceof AuthenticationException authException) {
            // 如果是认证异常，则判断具体是用户名密码错误还是未登录
            if (authException instanceof BadCredentialsException) {
                // 用户名密码错误
                writer.write(Result.error(401, "Username or password error").asJsonString());
            } else {
                // 未登录
                writer.write(Result.error(401, "Please login").asJsonString());
            }
        } else if (exceptionOrAuthentication instanceof AccessDeniedException) {
            // 权限不足
            writer.write(Result.error(403, "You do not have permission").asJsonString());
        } else if (exceptionOrAuthentication instanceof Authentication) {
            // 身份验证成功
            writer.write(Result.success((Authentication) exceptionOrAuthentication).asJsonString());
        } else {
            // 其他情况，返回通用错误信息
            writer.write(Result.error(500, "Unknown error").asJsonString());
        }
    }
    
}

