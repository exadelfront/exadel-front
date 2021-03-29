import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  date: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostCardsService {
  postCards: Post[] = [
    {
      title: 'JavaScript Internship',
      tags: ['JS', 'Java', 'something'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum ',
      imageUrl: '../../assets/images/Rectangle75.png',
      date: 'October  11, 2023',
      id: 1,
    },
    {
      title: 'C# Meetup',
      tags: ['some', 'lorem'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum ',
      imageUrl: '../../assets/images/Rectangle75.png',
      date: 'December 8, 2021',
      id: 2,
    },
    {
      title: '.Net Internship ',
      tags: ['.NET', 'backend'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum ',
      imageUrl: '../../assets/images/Rectangle75.png',
      date: 'December 25, 2021',
      id: 3,
    },
  ];

  getPostById(id: number): Post {
    return this.postCards.find(post => post.id === id);
  }
}
