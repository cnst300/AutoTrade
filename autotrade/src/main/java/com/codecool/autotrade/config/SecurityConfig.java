package com.codecool.autotrade.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import static com.codecool.autotrade.model.Permission.*;
import static com.codecool.autotrade.model.Role.ADMIN;
import static com.codecool.autotrade.model.Role.SELLER;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class    SecurityConfig {

    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll()


                        .requestMatchers("/staff/**").hasAnyRole(ADMIN.name(), SELLER.name())

                        .requestMatchers(HttpMethod.GET, "/seller").hasAnyAuthority(ADMIN_READ.name(), SELLER_READ.name())
                        .requestMatchers(HttpMethod.POST, "/seller/**").hasAnyAuthority(ADMIN_CREATE.name(), SELLER_CREATE.name())
                        .requestMatchers(HttpMethod.PUT, "/seller/**").hasAnyAuthority(ADMIN_UPDATE.name(), SELLER_UPDATE.name())

                        .requestMatchers("/admin/**").hasRole(ADMIN.name())

                        .requestMatchers(HttpMethod.GET, "/admin/**").hasAnyAuthority(ADMIN_READ.name())
                        .requestMatchers(HttpMethod.POST, "/admin/**").hasAnyAuthority(ADMIN_CREATE.name())
                        .requestMatchers(HttpMethod.PUT, "/admin/**").hasAnyAuthority(ADMIN_UPDATE.name())
                        .requestMatchers(HttpMethod.DELETE, "/admin/**").hasAnyAuthority(ADMIN_DELETE.name())
                )
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .logout((logout) -> logout.logoutSuccessUrl("/auth/logout").addLogoutHandler(logoutHandler)
                        .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()));

        return http.build();
    }
}
