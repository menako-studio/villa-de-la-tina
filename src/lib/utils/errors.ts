/**
 * Error Handling Utilities
 * 
 * Centralized error handling following best practices
 * Provides consistent error messages and logging across the application
 */

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, true);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404, true);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401, true);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super(message, 403, true);
  }
}

/**
 * Error logger for development and monitoring
 */
export function logError(error: unknown, context?: string): void {
  if (typeof window === 'undefined') {
    // Server-side logging
    console.error(`[${context || 'Error'}]`, error);
  } else {
    // Client-side logging (can be extended to send to monitoring service)
    console.error(`[${context || 'Error'}]`, error);
  }
}

/**
 * Get user-friendly error message
 */
export function getUserFriendlyMessage(error: unknown): string {
  if (error instanceof ValidationError) {
    return error.message;
  }

  if (error instanceof AppError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi.';
}

/**
 * Handle API errors
 */
export async function handleApiError(response: Response): Promise<never> {
  const contentType = response.headers.get('content-type');
  let data: any = {};

  try {
    if (contentType?.includes('application/json')) {
      data = await response.json();
    } else {
      data = { message: await response.text() };
    }
  } catch {
    data = { message: 'Gagal memproses respons server' };
  }

  const error = new AppError(
    data.message || data.error || 'API request failed',
    response.status,
    true
  );

  throw error;
}

/**
 * Safe async wrapper for error handling
 */
export function asyncHandler(
  fn: (...args: any[]) => Promise<any>
) {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      logError(error);
      throw error;
    }
  };
}
