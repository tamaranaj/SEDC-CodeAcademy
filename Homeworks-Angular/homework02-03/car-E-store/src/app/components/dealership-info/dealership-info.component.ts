import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dealership-info',
  standalone: true,
  imports: [],
  templateUrl: './dealership-info.component.html',
  styleUrl: './dealership-info.component.css'
})
export class DealershipInfoComponent {
  @Input({required: true}) founded: number = 0
  @Input({required: true}) description: string = ''
}
