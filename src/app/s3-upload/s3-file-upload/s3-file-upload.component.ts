// Angular modules
import { Component }        from '@angular/core';
import { Input }            from '@angular/core';
import { OnDestroy }        from '@angular/core';

// External modules
import { Subscription }     from 'rxjs';

// Enums
// import { FileObject }       from '../../shared/enums/s3-upload.type';
// import { ContainerEvents }  from '../../shared/enums/s3-upload.type';
// import { FileObjectStatus } from '../../shared/enums/s3-upload.type';

// Services
import { S3Helper }         from '../../shared/helpers/s3.helper';

@Component({
  moduleId    : module.id,
  selector    : 'app-s3-file-upload',
  templateUrl : 's3-file-upload.component.html',
  styleUrls   : ['s3-file-upload.component.scss']
})
export class S3FileUploadComponent implements OnDestroy
{

  // @Input() fileObject : FileObject;
  @Input() oddRow     : boolean;

  // public FileObjectStatus           : any           = FileObjectStatus;
  public progress                   : number        = 0;
  public speed                      : number        = 0;
  public uploadError                : string;
  public containerEventSubscription : Subscription;
  public uploadHandle               : any;

  constructor
  (
    private s3Helper : S3Helper
  )
  {
    // this.containerEventSubscription = s3Helper.uploadContrainerEvent$.subscribe(
    //   containerEvent => this.handleContainerEvent(containerEvent)
    // );
  }

  public ngOnDestroy() : void
  {
    // prevent memory leak when component destroyed
    this.containerEventSubscription.unsubscribe();
  }

  // public upload() : void
  // {
  //   this.fileObject.status = FileObjectStatus.UPLOADING;
  //   this.uploadError       = undefined;
  //   this.progress          = 0;
  //   this.uploadHandle      = this.s3UploadService.upload(this.fileObject, this.handleS3UploadProgress());
  // }

  // public cancel() : void
  // {
  //   if (this.fileObject.status === FileObjectStatus.UPLOADING)
  //   {
  //     this.fileObject.status = FileObjectStatus.CANCELED;
  //     this.s3UploadService.cancel(this.uploadHandle);
  //   }
  // }

  // public clear() : void
  // {
  //   if (this.fileObject.status !== FileObjectStatus.UPLOADING)
  //   {
  //     this.fileObject.status = FileObjectStatus.DELETED;
  //     this.s3UploadService.publishFileUploadEvent(this.fileObject);
  //   }
  // }

  // private handleS3UploadProgress() : any
  // {
  //   return (error: Error, progress: number, speed: number) =>
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

  // private handleContainerEvent(containerEvent : ContainerEvents) : any
  // {
  //   if (containerEvent === ContainerEvents.Upload)
  //   {
  //     return this.fileObject.status === FileObjectStatus.NOT_STARTED && this.upload();
  //   }
  //   else if (containerEvent === ContainerEvents.Cancel)
  //   {
  //     return this.fileObject.status === FileObjectStatus.UPLOADING && this.cancel();
  //   }
  //   else if (containerEvent === ContainerEvents.Delete)
  //   {
  //     return this.clear();
  //   }
  // }
}
