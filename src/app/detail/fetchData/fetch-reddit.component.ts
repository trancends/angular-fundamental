import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'fetch-reddit',
  template: `
    <h2>this is data from reddit</h2>
    @for (post of redditData(); track post.data.id) {
      <li>{{ post.data.title }}</li>
    }
  `,
  imports: [JsonPipe],
})
export class FetchRedditComponent {
  private http = inject(HttpClient);

  redditData = toSignal(
    this.http
      .get('https://www.reddit.com/r/gifs/new/.json?limit=10')
      .pipe(map((res: any) => res.data.children)),
  );
}
