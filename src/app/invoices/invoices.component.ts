import { Component, ViewChild, ElementRef } from '@angular/core';
import { ErrorHandlerService } from '../error-handler.service'; // Import the error handler service

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  @ViewChild('multiplierInput') multiplierInput!: ElementRef; // Reference to the input element
  @ViewChild('invoiceTypeSelect') invoiceTypeSelect!: ElementRef; // Reference to the select element
  @ViewChild('statusMessage') statusMessageElement!: ElementRef; // Reference to the status message element

  isError: boolean = false; // Initialize error state

  constructor(private errorHandler: ErrorHandlerService) { }

  calculate() {
    try {
      const multiplier = this.multiplierInput.nativeElement.value; // Get input value
      const selectedInvoiceType = this.invoiceTypeSelect.nativeElement.value; // Get selected type
      this.isError=false
      const result = this.complexCalculation(multiplier, selectedInvoiceType); // Pass selected type
      console.log(`Calculation result: ${result}`);

      // Simulate further calculations
      const finalResult = this.finalCalculation(result, selectedInvoiceType); // Further processing that may throw an error
      console.log(`Final result: ${finalResult}`);

      // Update status message
      if (!this.isError) {
        this.statusMessageElement.nativeElement.style.color = 'green'; // Set color to green on success
        this.statusMessageElement.nativeElement.innerText = `Calculations completed successfully! Result: ${finalResult}`
      }
    } catch (error: any) { // Specify error type as any
      this.errorHandler.handleError(error); // Handle error using the error handler service
      // Update status message on error
      this.statusMessageElement.nativeElement.innerText = `An error occurred: ${error.message}`;
      this.statusMessageElement.nativeElement.style.color = 'red'; // Set color to red on error
    }
  }

  // Complex calculation that takes invoice type into account
  private complexCalculation(multiplier: string, invoiceType: string): number {
    const parsedMultiplier = parseFloat(multiplier);
    if (isNaN(parsedMultiplier) || parsedMultiplier <= 0) {
      const error = new Error('Multiplier must be a positive number!'); // Check for valid multiplier
      this.errorHandler.handleError(error); // Handle error using the error handler service

      return 0; // Return a default value
    }

    let adjustedMultiplier = parsedMultiplier; // Initialize adjustedMultiplier
    if (invoiceType === 'proforma') {
      adjustedMultiplier *= 10; // Multiply by 10 for proforma
    } else if (invoiceType === 'recurring') {

      const error = new Error('Cannot process recurring invoices!'); // Throw an error if recurring
      this.errorHandler.handleError(error); // Handle error using the error handler service

      this.isError = true;
      this.statusMessageElement.nativeElement.innerText = `An error occurred: ${error.message}`;
      this.statusMessageElement.nativeElement.style.color = 'red'; // Set color to red on error

      return 0; // Return a default value
    }

    // More complex logic that leads to unexpected behavior
    const intermediateValue = Math.sqrt(adjustedMultiplier) * Math.PI; // Some complex operation
    if (intermediateValue > 10) {
      const error = new Error('Intermediate value exceeded expected range!'); // Throw an error if the condition is met
      this.errorHandler.handleError(error); // Handle error using the error handler service

      this.isError = true;
      this.statusMessageElement.nativeElement.innerText = `An error occurred: ${error.message}`;
      this.statusMessageElement.nativeElement.style.color = 'red'; // Set color to red on error

      return 0; // Return a default value
    }

    return intermediateValue; // Return the intermediate result
  }

  // Final calculation that can throw an error based on invoice type
  private finalCalculation(value: number, invoiceType: string): number {
    const divisor = invoiceType === 'recurring' ? 0 : 10; // Set divisor to 0 if recurring
    if (divisor === 0) {
      const error = new Error('Division by zero error!'); // Throw an error for division by zero
      this.errorHandler.handleError(error); // Handle error using the error handler service

      this.isError = true;
      this.statusMessageElement.nativeElement.innerText = `An error occurred: ${error.message}`;
      this.statusMessageElement.nativeElement.style.color = 'red'; // Set color to red on error

      return 0; // Return a default value
    }
    return value / divisor; // This will throw an error if divisor is zero
  }

  async send() {
    console.log('Send button clicked'); // Log message when send button is clicked

    // Timeout function with proper typing
    const timeout = (ms: number): Promise<never> =>
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));

    // Fetch function with timeout and proper typing
    const fetchWithTimeout = async (url: string, options: RequestInit, timeoutMs: number): Promise<Response> => {
      // Use Promise.race to handle fetch with timeout
      return Promise.race<Response>([
        fetch(url, options),
        timeout(timeoutMs)
      ]);
    };

    try {
      const response: Response = await fetchWithTimeout('https://doc-send-fake-404/not-found', {
        method: 'POST', // Use POST method
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify({
          multiplier: this.multiplierInput.nativeElement.value, // Send multiplier value
          invoiceType: this.invoiceTypeSelect.nativeElement.value // Send selected invoice type
        })
      }, 5000); // Set timeout to 5000 ms

      if (!response.ok) {
        const error = new Error('Network response was not ok'); // Handle response errors

        this.statusMessageElement.nativeElement.innerText = `An error occurred: ${error.message}`; // Update status message
        this.statusMessageElement.nativeElement.style.color = 'red'; // Set color to red on error
        return; // Exit if there's an error
      }

      const data = await response.json(); // Parse response as JSON
      console.log('Success:', data); // Log success message with response data
      this.statusMessageElement.nativeElement.innerText = 'Sent successfully!'; // Update status message on success

      this.statusMessageElement.nativeElement.style.color = 'green'; // Set color to green on success
    } catch (error: any) {
      console.error('Error:', error); // Log any errors that occur during the fetch

      this.statusMessageElement.nativeElement.innerText = `An error occurred: ${error.message}`; // Update status message on error
      this.statusMessageElement.nativeElement.style.color = 'red'; // Set color to red on error
    }
  }
}
