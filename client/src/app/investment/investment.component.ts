// investment.component.ts

import { Component, OnInit } from '@angular/core';
import { FlaskapiService } from '../flaskapi.service'; // Update the path

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  formData: any = {
    gender: '',
    age: 0,
    salary: 0,
    amount_to_be_invested: 0,
    num_children: 0,
    domain_of_expertise: ''
  };

  predictionResult: string | undefined; // Add this line to declare predictionResult

  constructor(private flaskApiService: FlaskapiService) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit() { // Corrected the function name to onSubmit
    // Handle form submission using the flaskApiService
    this.flaskApiService.predict(this.formData).subscribe(
      response => {
        console.log(response);
        // Handle the prediction response as needed
        this.predictionResult = response.prediction;
      },
      error => {
        console.error(error);
        // Handle errors if necessary
      }
    );
  }
}
