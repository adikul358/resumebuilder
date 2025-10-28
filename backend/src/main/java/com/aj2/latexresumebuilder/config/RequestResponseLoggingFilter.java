package com.aj2.latexresumebuilder.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;

@Slf4j
@Component
public class RequestResponseLoggingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        // Wrap request and response to cache content
        ContentCachingRequestWrapper wrappedRequest = new ContentCachingRequestWrapper(httpRequest);
        ContentCachingResponseWrapper wrappedResponse = new ContentCachingResponseWrapper(httpResponse);

        long startTime = System.currentTimeMillis();

        try {
            // Log request
            logRequest(wrappedRequest);

            // Continue with the filter chain
            chain.doFilter(wrappedRequest, wrappedResponse);

        } finally {
            long duration = System.currentTimeMillis() - startTime;

            // Log response
            logResponse(wrappedResponse, duration);

            // IMPORTANT: Copy cached response content to actual response
            wrappedResponse.copyBodyToResponse();
        }
    }

    private void logRequest(ContentCachingRequestWrapper request) {
        StringBuilder requestLog = new StringBuilder();
        requestLog.append("\n========== REQUEST ==========\n");
        requestLog.append("Method: ").append(request.getMethod()).append("\n");
        requestLog.append("URI: ").append(request.getRequestURI()).append("\n");

        if (request.getQueryString() != null) {
            requestLog.append("Query String: ").append(request.getQueryString()).append("\n");
        }

        // Log headers
        requestLog.append("Headers:\n");
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);

            // Mask sensitive headers
            if (headerName.equalsIgnoreCase("Authorization")) {
                headerValue = maskToken(headerValue);
            }
            requestLog.append("  ").append(headerName).append(": ").append(headerValue).append("\n");
        }

        // Log request body
        byte[] content = request.getContentAsByteArray();
        if (content.length > 0) {
            String body = getContentAsString(content, request.getCharacterEncoding());
            // Mask password in body
            body = maskSensitiveData(body);
            requestLog.append("Body: ").append(body).append("\n");
        }

        requestLog.append("=============================\n");
        log.info(requestLog.toString());
    }

    private void logResponse(ContentCachingResponseWrapper response, long duration) {
        StringBuilder responseLog = new StringBuilder();
        responseLog.append("\n========== RESPONSE ==========\n");
        responseLog.append("Status: ").append(response.getStatus()).append("\n");
        responseLog.append("Duration: ").append(duration).append(" ms\n");

        // Log response headers
        responseLog.append("Headers:\n");
        response.getHeaderNames().forEach(headerName -> {
            String headerValue = response.getHeader(headerName);
            responseLog.append("  ").append(headerName).append(": ").append(headerValue).append("\n");
        });

        // Log response body
        byte[] content = response.getContentAsByteArray();
        if (content.length > 0) {
            String body = getContentAsString(content, response.getCharacterEncoding());
            // Mask token in response
            body = maskSensitiveData(body);
            responseLog.append("Body: ").append(body).append("\n");
        }

        responseLog.append("==============================\n");
        log.info(responseLog.toString());
    }

    private String getContentAsString(byte[] content, String encoding) {
        try {
            return new String(content, encoding != null ? encoding : "UTF-8");
        } catch (UnsupportedEncodingException e) {
            return "[Unable to decode content]";
        }
    }

    private String maskToken(String value) {
        if (value != null && value.startsWith("Bearer ")) {
            String token = value.substring(7);
            if (token.length() > 20) {
                return "Bearer " + token.substring(0, 10) + "..." + token.substring(token.length() - 10);
            }
        }
        return value;
    }

    private String maskSensitiveData(String body) {
        if (body == null) return null;

        // Mask password fields
        body = body.replaceAll("(\"password\"\\s*:\\s*\")([^\"]+)(\")", "$1***MASKED***$3");

        // Mask token fields (but show first/last few chars for debugging)
        body = body.replaceAll("(\"token\"\\s*:\\s*\")([^\"]{10})([^\"]+)([^\"]{10})(\")", "$1$2...$4$5");

        return body;
    }
}