import { Component } from '@angular/core';
import { DiscussionPostComponent } from "../../components/discussion-post/discussion-post.component";
import { PostFilterComponent } from '../../components/post-filter/post-filter.component';
@Component({
  selector: 'app-home-page',
  imports: [DiscussionPostComponent, PostFilterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
