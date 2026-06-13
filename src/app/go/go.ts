import { Component, OnInit,ChangeDetectionStrategy  } from "@angular/core";
@Component({
  selector: 'app-go',
  imports: [],
  templateUrl: './go.html',
  styleUrl: './go.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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

    // Durasi sebelum memulai animasi exit (tampilkan animasi utama terlebih dahulu)
    const redirectDelay = 1500; // ms
    // Durasi animasi exit harus sinkron dengan SCSS (.exiting)
    const exitAnimationDuration = 700; // ms

    const container = document.querySelector('.redirect-container') as HTMLElement | null;

    setTimeout(() => {
      if (container) {
        // tambahkan kelas exit yang memiliki animasi, lalu tunggu selesai
        container.classList.add('exiting');
        const onAnimEnd = () => {
          window.location.href = randomWebsite;
        };
        container.addEventListener('animationend', onAnimEnd, { once: true });

        // fallback: jika event tidak dipicu, paksa redirect setelah durasi exit
        setTimeout(() => {
          window.location.href = randomWebsite;
        }, exitAnimationDuration + 100);
      } else {
        window.location.href = randomWebsite;
      }
    }, redirectDelay);
  }
}


