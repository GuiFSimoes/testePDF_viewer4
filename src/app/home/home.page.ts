import { Component } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private document: DocumentViewer) {}

  abrirPDF() {
    const options: DocumentViewerOptions = {
      title: 'Meu PDF'
    };
    this.document.viewDocument('assets/docs/documento.pdf', 'application/pdf', options);
  }

}
