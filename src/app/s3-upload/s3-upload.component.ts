// Angular modules
import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';
import { OnDestroy }        from '@angular/core';

// External modules
import { Subscription }     from 'rxjs';

// Enums
// import { FileObject }       from '../../shared/enums/s3-upload.type';
// import { ContainerEvents }  from '../../shared/enums/s3-upload.type';
// import { FileObjectStatus } from '../../shared/enums/s3-upload.type';

// Helpers
import { S3Helper } from '../shared/helpers/s3.helper';

@Component({
  moduleId    : module.id,
  selector    : 'app-s3-upload',
  templateUrl : 's3-upload.component.html',
  styleUrls   : ['s3-upload.component.scss']
})
export class S3UploadComponent implements OnInit, OnDestroy
{
  // NOTE: Upload
  // public files         : FileObject[] = [];
  public uploadStarted : boolean      = false;

  constructor
  (
    // public  snackBar        : MatSnackBar,
    // private loaderHelper    : LoaderHelper,
    // private translate       : TranslateService,
    private s3Helper : S3Helper,
  )
  {
    // TODO: Demistify
    // this.s3UploadService.fileUploadEvent$.subscribe(
    //   fileObject => this.handleFileUploadEvent(fileObject)
    // );
  }

  public ngOnInit() : void
  {
    // this.uploadSub = this.uploadSubscription();
  }

  public ngOnDestroy() : void
  {
    // this.uploadSub.unsubscribe();
  }

  public fileChangeEvent(fileInput : any) : void
  {
    if (fileInput.target.files && fileInput.target.files.length)
    {
      // NOTE: Prevent multiple upload
      // if(fileInput.target.files.length > 1 || this.files.length === 1)
      // {
      //   this.snackBar.open(this.translate.instant('ONE_FILE_AT_A_TIME'), 'x');
      //   return;
      // }

      for (let i = 0; i < fileInput.target.files.length; i++)
      {
        let fileToUpload = fileInput.target.files[i];

        // NOTE: Prevent some extension(s)
        // let arr : string[] = fileToUpload.name.split('.');
        // let ext = arr[arr.length - 1];
        // if(ext !== 'pdf')
        // {
        //   this.snackBar.open(this.translate.instant('INVALID_FILE_TYPE'),'x');
        //   return;
        // }

        // NOTE: Prevent too large file size (1 MB)
        // if(fileToUpload.size > 1000000)
        // {
        //   this.snackBar.open(this.translate.instant('TOO_LARGE_FILE_SIZE'),'x');
        //   return;
        // }

        // TODO: push file to files
        // let customName : string = null;
        // customName = this.localeControl.value + '.pdf';
        // let fileObject = new FileObject(uploadedFile, customName); // fileInput.target.files[i]
        // this.files.push(fileObject);
      }
    }
    fileInput.target.value = null;
  }

  public uploadAll() : void
  {
    // this.s3UploadService.publishUploadContainerEvent(ContainerEvents.Upload);
  }

  public cancelAll() : void
  {
    // this.s3UploadService.publishUploadContainerEvent(ContainerEvents.Cancel);
  }

  public clearAll() : void
  {
    // this.s3UploadService.publishUploadContainerEvent(ContainerEvents.Delete);
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE: Emitted ------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // private handleFileUploadEvent(fileObject : FileObject) : void
  // {
  //   if (fileObject.status === FileObjectStatus.UPLOADED)
  //   {
  //     // this.getFileVersion(this.localeControl.value);
  //     this.snackBar.open(this.translate.instant('SUCCESS_UPLOAD_PDF'), 'x');
  //   }

  //   if (fileObject.status === FileObjectStatus.DELETED)
  //   {
  //     for (let i = 0; i < this.files.length; i++)
  //     {
  //       if (this.files[i] === fileObject)
  //       {
  //         this.files.splice(i, 1);
  //       }
  //     }
  //   }
  // }

}
