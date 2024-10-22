import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../entities/post';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostsService,
    private titleService: Title,
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get("BLOG").subscribe((translation: string) => {
      this.titleService.setTitle(`Muhammed Arslan | ${translation}`);
    });

    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}