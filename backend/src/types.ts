// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Counter types
export interface CounterResponse {
  count: number;
}

// Health check types
export interface HealthResponse {
  status: string;
  uptime: number;
  timestamp: string;
}

// Server info types
export interface ServerInfo {
  message: string;
  status: string;
  timestamp: string;
}

// Hello API types
export interface HelloResponse {
  message: string;
  data: {
    userAgent?: string;
    timestamp: string;
  };
} 