<a href="https://www.npmjs.com/package/@caliatys/s3-service" target="_blank">
  <img alt="npm version" src="https://img.shields.io/npm/v/@caliatys/s3-service.svg?style=flat-square"/>
</a>

# Manage your S3 buckets with AWS
This Angular Library, which currently supports Angular 6.x and 7.x, is a wrapper around the [aws-sdk](https://github.com/aws/aws-sdk-js) libraries to easily manage your S3 buckets.

## Demo

```sh
git clone https://github.com/Caliatys/S3Service
cd S3Service/
npm install
```

Don't forget to edit the parameters located in [src/app/shared/consts/s3.const.ts](https://github.com/Caliatys/S3Service/blob/master/src/app/shared/consts/s3.const.ts).

```sh
ng build s3-service --prod
ng serve
```

## Installation

Add `@caliatys/s3-service` module as dependency to your project.
```sh
npm install @caliatys/s3-service --save
```

Copy/paste [src/app/shared/consts/s3.const.ts](https://github.com/Caliatys/S3Service/blob/master/src/app/shared/consts/s3.const.ts) and replace the parameters with your resource identifiers.
```typescript
export const S3Const = {
  bucket : 'XXXXXXXXXXXXXXX'
};
```

Copy/paste [src/app/shared/helpers/s3.helper.ts](https://github.com/Caliatys/S3Service/blob/master/src/app/shared/helpers/s3.helper.ts). This file is used to simplify the implementation of the `S3Service` in your application while keeping a single instance of it.
```typescript
// Angular modules
import { Injectable } from '@angular/core';

// External modules
import { S3Service }  from '@caliatys/s3-service';

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
```

Include `S3Helper` into the providers of [app.module.ts](https://github.com/Caliatys/S3Service/blob/master/src/app/app.module.ts) :
```typescript
...
import { S3Helper } from './shared/helpers/s3.helper';

@NgModule({
  ...
  providers :
  [
    S3Helper
    ...
  ],
  ...
})
export class AppModule { }
```

## Models

### S3Object

```typescript
export class S3Object
{
  public Key       : string;
  public Name      : string;
  public Extension : string;
  public Output    : AWS.S3.GetObjectOutput;
  public Blob      : Blob;
}
```

## Methods

### Get object
Retrieves objects from Amazon S3.
```typescript
this.s3Helper.s3Service.getObject('objectKey.json').then(res => {}).catch(err => {});
```

### Put object
Adds an object to a bucket.
```typescript
this.s3Helper.s3Service.putObject(item, 'objectKey.json').then(res => {}).catch(err => {});
```

### Copy object
Creates a copy of an object that is already stored in Amazon S3.
```typescript
this.s3Helper.s3Service.copyObject('objectKey.json', 'newKey.json').then(res => {}).catch(err => {});
```

### Delete object
```typescript
this.s3Helper.s3Service.deleteObject('objectKey.json').then(res => {}).catch(err => {});
```

### Delete objects
```typescript
let del : AWS.S3.Delete;
del.Objects = [];
del.Objects.push({ Key : 'objectKey1.json' });
del.Objects.push({ Key : 'objectKey2.json', VersionId : 'XXXXXXXXX' });
this.s3Helper.s3Service.deleteObjects(del).then(res => {}).catch(err => {});
```

### List objects
```typescript
this.s3Helper.s3Service.listObjects().then(res => {}).catch(err => {});
// or
this.s3Helper.s3Service.listObjectsV2().then(res => {}).catch(err => {});
```

### List object versions
```typescript
this.s3Helper.s3Service.listObjectVersions('objectPrefix').then(res => {}).catch(err => {});
```

### Restore object
```typescript
this.s3Helper.s3Service.restoreObject('objectKey.json').then(res => {}).catch(err => {});
```

## Helpers

### Get folder objects
```typescript
this.s3Helper.s3Service.getFolderObjects('image-folder').then(res => {}).catch(err => {});
```

### Copy folder objects

```typescript
this.s3Helper.s3Service.copyFolderObjects('from-folder', 'to-folder').then(res => {}).catch(err => {});
```

## Dependencies

**Important** : This project uses the following dependencies :
```json
"peerDependencies"  : {
  "@angular/common" : "^6.0.0 || ^7.0.0",
  "@angular/core"   : "^6.0.0 || ^7.0.0",
  "rxjs"            : "^6.0.0",
  "rxjs-compat"     : "^6.0.0",
  "aws-sdk"         : "^2.247.1"
},
"devDependencies"   : {
  "@types/node"     : "10.12.0"
}
```

If it's an empty Angular application :

- Add `"types": ["node"]` to the [tsconfig.app.json](https://github.com/Caliatys/S3Service/blob/master/src/tsconfig.app.json) file that the angular-cli creates in the `src` directory.
- Add `(window as any).global = window;` to the [polyfills.ts](https://github.com/Caliatys/S3Service/blob/master/src/polyfills.ts) file, as mentioned here : [angular/angular-cli#9827 (comment)](https://github.com/angular/angular-cli/issues/9827#issuecomment-386154063)

## Roadmap

### In progress
- Readme
- Methods & helpers

### Planning
- Upload methods

### Contributions

Contributions are welcome, please open an issue and preferably submit a pull request.

## Development

S3Service is built with [Angular CLI](https://github.com/angular/angular-cli).