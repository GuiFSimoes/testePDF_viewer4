import { Component } from '@angular/core';
import '@teamhive/pdf-viewer';
/* import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx'; */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private corsLink = 'https://cors-anywhere.herokuapp.com/';

  // tslint:disable-next-line: max-line-length
  private urlPDFFirebase = 'https://firebasestorage.googleapis.com/v0/b/studiopilates-a1b2.appspot.com/o/artigo.pdf?alt=media&token=53ffb50a-d248-4793-8633-b59bd7495111';
  private urlFile = 'file:///android_asset/www/assets/docs/documento.pdf';
  private urlFilePDF = 'http://www.ufjf.br/revistaveredas/files/2009/11/ARTIGO-Maira-Avelar-e-Janaina-Rabelo.pdf';
  private mimeType = 'application/pdf';

  public urlLocal = '';
  public exibir = false;
  public linkInput = '';

  constructor(/* private file: File, private transfer: FileTransfer */) { }

  abrirPDF() {

    this.exibir = true;
    if (this.linkInput !== '') {
      this.urlLocal = this.corsLink + this.linkInput;
    } else {
      this.urlLocal = this.corsLink + this.urlFilePDF;
    }
  }

}
