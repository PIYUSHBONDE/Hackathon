import { Component, ElementRef, OnInit } from '@angular/core';
import { FlaskapiService } from '../../flaskapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // Add FormGroup and Validators
  predictForm: FormGroup;
  submitted: boolean = false;

  predictionResult: string | undefined;

  // Declare the properties for the navbar elements
  navbarContainer: ElementRef;
  aboutLink: ElementRef;
  savedPredictionsLink: ElementRef;
  predictDatasetLink: ElementRef;
  contactUsLink: ElementRef;
  navBrand: ElementRef;
  home: ElementRef;
  featureLink: ElementRef;
  samplesLink: ElementRef;
  moreInfoLink: ElementRef;

  constructor(private flaskApiService: FlaskapiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.predictForm = this.formBuilder.group({
      gender: ['', Validators.required],
      age: [0, Validators.required],
      salary: [0, Validators.required],
      amount_to_be_invested: [0, Validators.required],
      num_children: [0, Validators.required],
      domain_of_expertise: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.savedPredictionsLink.nativeElement.setAttribute(
      'style',
      'color: rgb(179, 179, 179) !important'
    );
    this.moreInfoLink.nativeElement.setAttribute(
      'style',
      'color: rgb(179, 179, 179) !important'
    );
    this.aboutLink.nativeElement.setAttribute(
      'style',
      'display: none !important'
    );
    this.predictDatasetLink.nativeElement.setAttribute(
      'style',
      'color: white !important'
    );

    this.contactUsLink.nativeElement.setAttribute(
      'style',
      'display: none !important'
    );
    this.featureLink.nativeElement.setAttribute(
      'style',
      'display: none !important'
    );
    this.samplesLink.nativeElement.setAttribute(
      'style',
      'display: none !important'
    );
    this.navbarContainer.nativeElement.classList.add('bg-dark');
    this.navBrand.nativeElement.setAttribute(
      'style',
      'color: white !important'
    );

    this.home.nativeElement.setAttribute(
      'style',
      'color: rgb(179, 179, 179) !important'
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.predictForm.valid) {
      // Handle form submission using the flaskApiService
      this.flaskApiService.predict(this.predictForm.value).subscribe(
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
}
