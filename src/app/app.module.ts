// Angular modules
import { NgModule }                from '@angular/core';
import { HttpModule }              from '@angular/http';
import { HttpClient }              from '@angular/common/http';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }           from '@angular/platform-browser';

// External modules
import { TranslateModule }         from '@ngx-translate/core';
import { TranslateLoader }         from '@ngx-translate/core';
import { TranslateHttpLoader }     from '@ngx-translate/http-loader';

// Helpers
import { S3Helper }                from './shared/helpers/s3.helper';

// Internal modules
import { SharedModule }            from './shared/shared.module';
import { AppRoutingModule }        from './app-routing.module';

// Services
import { S3Service }               from 's3-service'; // NOTE: Do not import the service into your project

// Components
import { AppComponent }            from './app.component';

@NgModule({
  imports: [
    // Angular modules
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,

    // External modules
    TranslateModule.forRoot({
      loader :
      {
        provide    : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps       : [HttpClient]
      }
    }),

    // Internal modules
    SharedModule,
    AppRoutingModule
  ],
  declarations :
  [
    AppComponent
  ],
  providers    :
  [
    S3Service, // NOTE: Do not import the service into your project
    S3Helper   // TODO: Helper to import into your project
  ],
  bootstrap    :
  [
    AppComponent
  ]
})
export class AppModule { }

export function createTranslateLoader(http : HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
