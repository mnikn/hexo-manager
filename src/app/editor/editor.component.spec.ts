import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { ArticleDataService } from '../core/service/article-data.service';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { ComponentModule } from '../core/component/component.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SIMPLEMDE_CONFIG, SimplemdeModule } from 'ng2-simplemde';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditorComponent, ToolBarComponent],
      imports: [
        CommonModule,
        RouterModule,
        RouterTestingModule,
        EditorRoutingModule,
        ComponentModule,
        NgZorroAntdModule,
        TranslateModule,
        SimplemdeModule.forRoot({
          provide: SIMPLEMDE_CONFIG,
          useValue: {}
        }),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [ArticleDataService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
