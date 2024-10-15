import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../entities/post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  
  constructor(private postService:PostsService, private titleService:Title) { }
  
  ngOnInit() {
    this.titleService.setTitle("Muhammed Arslan | Blog")
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}