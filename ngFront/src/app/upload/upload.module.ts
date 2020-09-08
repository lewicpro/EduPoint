import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule, MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';


@NgModule({
  imports: [
    CommonModule,
     MatButtonModule,
      MatDialogModule,
       MatListModule,
         HttpClientModule,
          BrowserAnimationsModule,
           MatProgressBarModule,
            MatDialog,
  ],
  declarations: [DialogComponent],
  providers: [UploadService, DialogComponent]
})
export class UploadModule { }
