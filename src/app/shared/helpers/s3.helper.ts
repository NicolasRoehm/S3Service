// Angular modules
import { Injectable } from '@angular/core';

// External modules
import { S3Service }  from 's3-service'; // TODO: Change the location to '@caliatys/s3-service'

// Consts
import { S3Const }    from '../consts/s3.const';

@Injectable()
export class S3Helper
{
  // Services
  public s3Service : S3Service = new S3Service(S3Const);

  // Consts
  public s3Const               = S3Const;
}
