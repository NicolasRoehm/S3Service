// Angular modules
import { Component }                from '@angular/core';
import { OnInit }                   from '@angular/core';
import { OnDestroy }                from '@angular/core';
import { Router }                   from '@angular/router';

// External modules
import { Subscription }             from 'rxjs';
import { TranslateService }         from '@ngx-translate/core';

// Helpers
import { S3Helper }                 from './shared/helpers/s3.helper';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{

  constructor
  (
    private s3Helper         : S3Helper,
    private router           : Router,
    private translateService : TranslateService,
  )
  {
    // This language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');
    // The lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('en');
  }

  public ngOnInit() : void
  {

  }

  public ngOnDestroy() : void
  {

  }

  // -------------------------------------------------------------------------------------------
  // NOTE: Upload management -------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------

  public upload() : void
  {
    // this.s3Helper.s3Service.upload(null, this.handleS3UploadProgress());
  }

  // private handleS3UploadProgress() : any
  // {
  //   return (error : Error, progress : number, speed : number) =>
  //   {
  //     if (error)
  //     {
  //       this.progress          = 0;
  //       this.speed             = 0;
  //       this.uploadError       = error.message;
  //       this.fileObject.status = FileObjectStatus.FAILED;
  //     }
  //     else
  //     {
  //       this.progress = progress || this.progress;
  //       this.speed    = speed    || this.speed;
  //       if (this.progress === 100)
  //       {
  //         if(this.fileObject.status !== FileObjectStatus.UPLOADED)
  //         {
  //           this.fileObject.status = FileObjectStatus.UPLOADED;
  //           this.s3UploadService.publishFileUploadEvent(this.fileObject);
  //         }
  //         this.fileObject.status = FileObjectStatus.UPLOADED;
  //       }
  //     }
  //   };
  // }

}
