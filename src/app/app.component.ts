import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Хочу выучить ангуляр компоненты', text: 'Все еще учу компонеты', id: 1 },
    { title: 'Следующий блок', text: 'будет про директивы и еще про пайпы', id: 2 },
  ];
}
