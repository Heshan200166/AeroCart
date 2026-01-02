package com.aerocart.exception;

/**
 * Global Exception Handler
 * 
 * Centralized exception handling for the application
 */
public class GlobalException extends RuntimeException {
    
    private String code;
    private String message;
    private int status;

    public GlobalException(String code, String message, int status) {
        super(message);
        this.code = code;
        this.message = message;
        this.status = status;
    }

    public GlobalException(String message) {
        super(message);
        this.message = message;
        this.status = 500;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
