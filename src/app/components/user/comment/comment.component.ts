import { Component, OnInit } from '@angular/core';
import {IComment} from '../../../interfaces/icomment';
import {CommentService} from '../../../services/user/comment.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../services/token-storage.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SongService} from '../../../services/songs/song.service';
import {ISong} from '../../../interfaces/isong';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments_song: IComment[];
  commentForm: FormGroup;
  newComment: IComment;
  user_id: number;
  song: ISong;
  page: number = 1;
  constructor(private commentService: CommentService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit(): void {
    let id: number;
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      id = Number(paraMap.get('id'));
    });
    this.user_id = +localStorage.getItem('userId');
    this.commentForm = this.fb.group({
      content: ['', [Validators.required]]
    });
    this.songService.getSongById(id).subscribe(resp => {
      this.song = resp;
    });
    this.getAllCommentFromSong(id);
  }

  getAllCommentFromSong(songId: number) {
    return this.commentService.getAllCommentBySongId(songId).subscribe(data => {
        this.comments_song = data;
        console.log(this.comments_song)
    });
  }

  addComment() {
    if (this.commentForm.valid) {
      this.newComment = this.commentForm.value;
      this.commentService.createCommentInSong(this.user_id,this.song.id,this.newComment).subscribe(next => {
        this.commentForm.reset("");
        console.log(next);
        this.getAllCommentFromSong(this.song.id);
      });
    }
  }
}
