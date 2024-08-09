import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dealership-info',
  standalone: true,
  imports: [],
  templateUrl: './dealership-info.component.html',
  styleUrl: './dealership-info.component.css'
})
export class DealershipInfoComponent {
  photo: string = 'https://www.cog-classics.com/cache/opel-kadett-52-1943-700-2-85.jpg'
  @Input({required: true}) founded: number = 0
  @Input({required: true}) description: string = ''
}
