import { Component } from '@angular/core';

@Component({
  selector: 'app-review-ratingcontent',
  standalone: false,
  templateUrl: './review-ratingcontent.component.html',
  styleUrl: './review-ratingcontent.component.css'
})
export class ReviewRatingcontentComponent {
  //////////just for testing //////////
  review = {
    booking_id: 101, // dynamically passed or filled
    rating: null,
    review: ''
  };

  submitReview() {
    // Call your backend API here
    console.log(this.review);
  }

}
