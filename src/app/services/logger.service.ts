import { Injectable } from '@angular/core';

export enum LogLevel {
  OFF = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // Default log level, can be changed in runtime
  private logLevel: LogLevel = LogLevel.INFO;

  // Set log level
  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  // Log debug messages
  debug(message: string): void {
    if (this.logLevel >= LogLevel.DEBUG) {
      console.debug('DEBUG:', message);
    }
  }

  // Log info messages
  info(message: string): void {
    if (this.logLevel >= LogLevel.INFO) {
      console.info('INFO:', message);
    }
  }

  // Log warning messages
  warn(message: string): void {
    if (this.logLevel >= LogLevel.WARN) {
      console.warn('WARN:', message);
    }
  }

  // Log error messages
  error(message: string): void {
    if (this.logLevel >= LogLevel.ERROR) {
      console.error('ERROR:', message);
    }
  }
}
