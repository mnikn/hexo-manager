import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../core/model/article';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  public isVisible = false;
  public validateForm: FormGroup;
  public article: Article;
  public title: string;
  public tags: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      tags: [null, []]
    });
  }

  public onOk(): void {
    this.validateForm.controls.title.markAsDirty();
    this.article.title = this.title;
    this.article.tags = this.tags.split(',');
    this.isVisible = false;
  }

  public onCancel(): void {
    this.isVisible = false;
  }

  public showModal(article: Article): void {
    this.article = article;
    this.title = this.article.title;
    this.tags = this.article.tags.join(',');
    this.isVisible = true;
    console.log(this.title);
  }
}
