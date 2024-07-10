import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    <h1>Detail</h1>
    <p>Skill id: {{ id }}</p>
  `,
})
export class DetailComponent implements OnInit {
  id = 0;
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
}
