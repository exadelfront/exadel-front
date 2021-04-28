import {Component, OnInit, Output} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';
import {objectKeys} from 'codelyzer/util/objectKeys';

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
    this.filteredPosts = this.posts.splice(0, this.posts.length);
  }

  fetchPosts(): void {
    this.postsService.fetchEvents()
      .subscribe(posts => {
        this.posts = posts;
        this.postsCopy = this.posts;

        const countriesArr: string [] = this.posts.map(el => el.countries).join(',').split(',');
        this.countries = countriesArr.filter((el: string, i: number) => countriesArr.indexOf(el) === i).sort();

        const subjectsArr: string [] = this.posts.map(el => el.subjects).join(',').split(',');
        this.subjects = subjectsArr.filter((el: string, i: number) => subjectsArr.indexOf(el) === i).sort();

        const internshipTypeArr: string [] = this.posts.map(el => el.internshipType);
        this.internshipType = internshipTypeArr.filter((el: string, i: number) => internshipTypeArr.indexOf(el) === i).sort();

        const formatArr: string [] = this.posts.map(el => el.format);
        this.format = formatArr.filter((el: string, i: number) => formatArr.indexOf(el) === i).sort();
      });


  }


  filterPosts(event: any): void {

    const name = event.name;
    const selectedValue = event.selectedValue;
    const isChecked = event.isChecked;


    if (!isChecked) {
      this.filtration[name].push(selectedValue);
    } else {
      const i = this.filtration[name].indexOf(selectedValue);
      this.filtration[name].splice(i, 1);
    }

   console.log(this.filtration);

    let choosen = [];
    let choosenCountries = [];
    let choosenSubjects = [];
    let choosenInternshipType = [];
    let choosenFormat = [];


    Object.values(this.filtration).forEach((el: [] , i: number) => {
      const key = Object.keys(this.filtration)[i];

      for (let e of el){
        choosen = this.postsCopy.filter(post => post[key].includes(e));
        console.log(choosen);

        if (key === 'countries'){
          choosenCountries = choosenCountries.concat(choosen);
          console.log(choosenCountries);

        } else if (key === 'subjects'){
          choosenSubjects = choosenSubjects.concat(choosen);
          console.log(choosenSubjects);

        } else if (key === 'internshipType'){
          choosenInternshipType = choosenInternshipType.concat(choosen);
          console.log(choosenInternshipType);

        } else if (key === 'format') {
          choosenFormat = choosenFormat.concat(choosen);
          console.log(choosenFormat);
        }
      }
    });

      if (this.filteredPosts.length === 0){

          this.filteredPosts = choosen;
          this.posts = this.filteredPosts;

      } else {

        if (choosenCountries.length > 0 && choosenSubjects.length === 0 && choosenFormat.length === 0 && choosenInternshipType.length === 0) {
          this.filteredPosts = choosenCountries;
          this.posts = this.filteredPosts;

        } else if (choosenCountries.length === 0 && choosenSubjects.length > 0 && choosenFormat.length === 0 && choosenInternshipType.length === 0){
          this.filteredPosts = choosenSubjects;
          this.posts = this.filteredPosts;

        } else if (choosenCountries.length === 0 && choosenSubjects.length === 0 && choosenFormat.length > 0 && choosenInternshipType.length === 0){
          this.filteredPosts = choosenFormat;
          this.posts = this.filteredPosts;

        } else if (choosenCountries.length === 0 && choosenSubjects.length === 0 && choosenFormat.length === 0 && choosenInternshipType.length > 0){
          this.filteredPosts = choosenInternshipType;
          this.posts = this.filteredPosts;

        } else if (choosenCountries.length === 0 && choosenSubjects.length === 0 && choosenFormat.length === 0 && choosenInternshipType.length === 0){
          this.filteredPosts = this.postsCopy;
          this.posts = this.filteredPosts;

        } else {

          this.filteredPosts.forEach((el, i) => {
            if (choosenCountries.length > 0 && !choosenCountries.includes(el)) {
                this.filteredPosts.splice(i, 1);
                this.posts = this.filteredPosts;
            } else if (choosenSubjects.length > 0 && !choosenSubjects.includes(el)) {
              this.filteredPosts.splice(i, 1);
              this.posts = this.filteredPosts;
            } else if (choosenFormat.length > 0 && !choosenFormat.includes(el)) {
              this.filteredPosts.splice(i, 1);
              this.posts = this.filteredPosts;
            } else if (choosenInternshipType.length > 0 && !choosenInternshipType.includes(el)) {
              this.filteredPosts.splice(i, 1);
              this.posts = this.filteredPosts;
            }

          })
        }
      }


  }

}




  //
  //   if (name === 'location') {
  //
  //     if (!isChecked) {
  //       const filterLocation = this.postsCopy.filter(post => post.countries.includes(selectedValue));
  //       for (let item of filterLocation) {
  //         this.filteredPosts.push(item);
  //       }
  //
  //       this.posts = this.filteredPosts;
  //
  //     } else {
  //
  //       const unfilterLocation = this.postsCopy.filter(post => post.countries.includes(selectedValue));
  //
  //       for (let item of unfilterLocation) {
  //         const index = this.posts.indexOf(item);
  //         this.posts.splice(index, 1);
  //       }
  //     }
  //







