import {Component, OnInit, Output} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Output() posts: Post[] = [];
  postsCopy: Post[] = [];
  filteredPosts: Post[] = [];
  filtration: { countries: [], subjects: [], internshipType: [], format: [] } = {
    countries: [],
    subjects: [],
    internshipType: [],
    format: []
  };

  @Output() countries: string[];
  @Output() subjects: string[];
  @Output() internshipType: string[];
  @Output() format: string[];


  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.fetchEvents()
      .subscribe(posts => {
        this.posts = posts;
        this.postsCopy = this.posts;

        const countriesArr: string [] = this.posts.map(el => el.countries).join(',').split(',');
        this.countries =  Array.from(new Set(countriesArr)).sort();

        const subjectsArr: string [] = this.posts.map(el => el.subjects).join(',').split(',');
        this.subjects = Array.from(new Set(subjectsArr)).sort();

        const internshipTypeArr: string [] = this.posts.map(el => el.internshipType);
        this.internshipType = Array.from(new Set(internshipTypeArr)).sort();

        const formatArr: string [] = this.posts.map(el => el.format);
        this.format = Array.from(new Set(formatArr)).sort();
      });


  }


  filterPosts(event: any): void {

    const choosen: Post[] = [];
    const choosenCountries: Post[] = [];
    const choosenSubjects: Post[] = [];
    const choosenInternshipType: Post[] = [];
    const choosenFormat: Post[] = [];
    const choosenArray = [choosenCountries, choosenSubjects, choosenInternshipType, choosenFormat];

    this.checkFilters(event);

    this.choosePosts(choosen, choosenCountries, choosenSubjects, choosenInternshipType, choosenFormat);


    for (let i = 0; i < choosenArray.length; i++) {
      if (choosenArray[i].length === 0) {
        choosenArray.splice(i, 1);
        --i;
      }
    }

    this.showPosts(choosenArray);

  }


  checkFilters(event): void {

    if (!event.isChecked) {
      this.filtration[event.name].push(event.selectedValue);
    } else {
      const i = this.filtration[event.name].indexOf(event.selectedValue);
      this.filtration[event.name].splice(i, 1);
    }

  }


  choosePosts(choosen, choosenCountries, choosenSubjects, choosenInternshipType, choosenFormat): void {

    Object.values(this.filtration).forEach((el: [], i: number) => {
      const key = Object.keys(this.filtration)[i];

      for (const e of el) {
        choosen = this.postsCopy.filter(post => post[key].includes(e));

        if (key === 'countries') {
          this.checkDuplicate(choosen, choosenCountries);

        } else if (key === 'subjects') {
          this.checkDuplicate(choosen, choosenSubjects);

        } else if (key === 'internshipType') {
          this.checkDuplicate(choosen, choosenInternshipType);

        } else if (key === 'format') {
          this.checkDuplicate(choosen, choosenFormat);
        }

      }

    });

  }


  checkDuplicate(choosen: Post[], choosenArray: Post[]): void {

    choosen.forEach(el => {
      if (!choosenArray.includes(el)) {
        choosenArray.push(el);
      }
    });

  }


  showPosts(choosenArray): void {

    if (choosenArray.length === 0) {
      this.showAllPosts();

    } else if (choosenArray.length === 1) {
      this.showPostsByOneFilter(choosenArray);

    } else if (choosenArray.length === 2) {
      this.showPostsBySeveralFilters(choosenArray);

    } else if (choosenArray.length === 3) {
      this.showPostsBySeveralFilters(choosenArray);

    } else if (choosenArray.length === 4) {
      this.showPostsBySeveralFilters(choosenArray);

    }

  }


  showAllPosts(): void {

    this.filteredPosts = [];
    this.posts = this.postsCopy;
  }


  showPostsByOneFilter(choosenArray): void {

    this.filteredPosts = choosenArray[0];
    this.posts = this.filteredPosts;

  }


  showPostsBySeveralFilters(choosenArray): void {

    const [firstArr, ...rest] = choosenArray;

    for (let i = 1; i < choosenArray.length; i++) {
      for (let j = 0; j < firstArr.length; j++) {
        if (!choosenArray[i].includes(firstArr[j])) {
          firstArr.splice(j, 1);
          --j;
        }
      }
    }

    this.filteredPosts = firstArr;
    this.posts = this.filteredPosts;

  }


}




