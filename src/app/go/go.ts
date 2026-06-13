import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-go',
  imports: [],
  templateUrl: './go.html',
  styleUrl: './go.scss'
})

export class Go implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const websites = [
      'https://davingm.com',
      'https://radit.com',
      'https://sidik.site',
      'https://miftah.id'
    ];

    const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
    setTimeout(() => {
      window.location.href = randomWebsite;
    }, 1000);
  }
}


