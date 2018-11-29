export class S3Object
{
  public Key       : string;
  public Name      : string;
  public Extension : string;
  public Output    : AWS.S3.GetObjectOutput;
  public Blob      : Blob;

  public static getFileName(fileKey : string) : string
  {
    var arr : string[] = [];
    var key : string   = fileKey;

    arr = key.split('/');

    return arr[arr.length - 1];
  }

  public static getFileExtension(fileName : string) : string
  {
    var arr : string[] = [];
    if(!fileName)
      return null;

    arr = fileName.split('.');

    return arr[arr.length - 1];
  }

  constructor() {}
}
