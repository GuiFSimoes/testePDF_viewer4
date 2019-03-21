import { Component } from '@angular/core';
import '@teamhive/pdf-viewer';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // tslint:disable-next-line: max-line-length
  private urlPDFFirebase = 'https://firebasestorage.googleapis.com/v0/b/studiopilates-a1b2.appspot.com/o/artigo.pdf?alt=media&token=53ffb50a-d248-4793-8633-b59bd7495111';
  private urlFile = 'file:///android_asset/www/assets/docs/documento.pdf';
  private urlFileGit = 'file:///android_asset/www/assets/docs/documento.pdf';
  private mimeType = 'application/pdf';

  public urlLocal = '';
  public exibir = false;

  constructor(private file: File, private transfer: FileTransfer) { }

  abrirPDF() {
    const filePathSave = this.file.dataDirectory + 'artigo_nuvem.pdf';
    this.exibir = true;
    this.urlLocal = '';

    const trans = this.transfer.create();
    trans.download(this.urlPDFFirebase, filePathSave)
      .then((result) => {
        const arq = result.toURL();
      }).catch((err) => {
        console.log('falha: ', err);
      });
  }

}
