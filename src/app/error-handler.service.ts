declare const revdebug: any; // Declare revdebug to suppress errors

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  handleError(error: any) {
    // Log the error to the console or send it to a logging service
    console.error('An error occurred:', error);
    // If revdebug is available, use it to report the error
    if (typeof revdebug !== 'undefined') {
      revdebug.exception(error);
    }
  }
}