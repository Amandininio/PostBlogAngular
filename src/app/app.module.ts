import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListItemsComponent } from './post-list-items/post-list-items.component';
import { PostFormComponent } from './post-list-items/post-form/post-form.component';
import { SinglePostComponent } from './post-list-items/single-post/single-post.component';
import { PostsService } from './services/posts.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'posts', canActivate: [AuthGuardService], component: PostListItemsComponent},
  { path: 'posts/:id', canActivate: [AuthGuardService], component: SinglePostComponent},
  { path: 'newpost', canActivate: [AuthGuardService], component: PostFormComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListItemsComponent,
    PostFormComponent,
    SinglePostComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
