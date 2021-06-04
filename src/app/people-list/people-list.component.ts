import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass']
})
export class PeopleListComponent implements OnInit {

  public user =  [
    {name: 'At auctor urna nunc id cursus metus aliquam. Sit amet aliquam id diam maecenas ultricies mi eget'}
  ];
  public users =  [
    {name: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'},
    {name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
    {name: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
