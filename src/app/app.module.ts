import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ToastyModule } from 'ng2-toasty';
import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ContainerComponent } from './container/container.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BooksService } from './services/books.service';
import { ListItemComponent } from './list-item/list-item.component';
import { ToastMessageService } from './services/toast-message.service';
import { ToolbarTitleService } from './services/toolbar-title.service';
import { CookieService } from './services/cookie.service';
import { AuthService } from './services/auth.service';
import { SplashLoaderComponent } from './spalsh-loader/spalsh-loader.component';
import { CommunicatorService } from './services/communicator.service';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { OAuthGuard } from './services/oauth-guard.service';
import { CallbackComponent } from './callback/callback.component';
import { HttpInterceptorService } from './interceptor/http.interceptor.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    ContainerComponent,
    ListItemComponent,
    SplashLoaderComponent,
    DataLoaderComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule, TableModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    SlimLoadingBarModule.forRoot(),

  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorService,
    //   multi: true
    // },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ToastMessageService,
    OAuthGuard,
    SlimLoadingBarService,
    ToolbarTitleService,
    CookieService,
    CommunicatorService,
    AuthService,
    BooksService],

  bootstrap: [AppComponent]
})
export class AppModule { }
