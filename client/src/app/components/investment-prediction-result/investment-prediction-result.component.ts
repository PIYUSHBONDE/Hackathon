import { Component,ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-investment-prediction-result',
  templateUrl: './investment-prediction-result.component.html',
  styleUrls: ['./investment-prediction-result.component.css']
})
export class InvestmentPredictionResultComponent implements OnInit {
  predictionResult: string | undefined;

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

  

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const navigationExtras: NavigationExtras = this.router.getCurrentNavigation()?.extras || {};
    // console.log('navigationExtras:', navigationExtras);
    // this.predictionResult = navigationExtras.state ? navigationExtras.state['predictionResult'] : null;
    // console.log('predictionResult:', this.predictionResult);
    this.route.paramMap.subscribe(params => {
      this.predictionResult = params.get('predictionResult')!;
      console.log('predictionResult:', this.predictionResult);
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

  goBack() {
    // Implement the logic to navigate back
    this.router.navigate(['/predict-investment']); // Change this to the appropriate route
  }
}
