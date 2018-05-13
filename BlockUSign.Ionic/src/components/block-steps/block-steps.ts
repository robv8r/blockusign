import { Component, Input } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DocumentService } from '../../services/document.service';


/**
 * Generated class for the BlockStepsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'block-steps',
  templateUrl: 'block-steps.html'
})
export class BlockStepsComponent {


  @Input() activeStep;

  text: string;

  constructor(private nav: NavController, private documentService: DocumentService) {
    console.log('Hello BlockStepsComponent Component');
    this.text = 'Hello World';
  }

  route(page){
    this.nav.push(page, {
      guid: this.documentService.currentDoc.guid
    });
  }

}
