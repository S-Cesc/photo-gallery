import { Component, Input, OnDestroy } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonIcon } from "@ionic/angular/standalone";
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs';
import { IErrorMessage } from '../../interfaces/IMessage';

@Component({
  standalone: true,
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  imports: [IonIcon, IonTitle, IonToolbar, IonHeader]
})
export class ContentHeaderComponent  implements OnDestroy {

  @Input({ required: true }) title!: string;

  noError = false;

  private subscription: Subscription;

  constructor(private messageService: MessageService) { 
      // subscribe to home component messages
      this.subscription = this.messageService.onMessage().subscribe(message => {
      if (message.tag == "error") {
        const errMessage = message as IErrorMessage;
        this.noError = true;
      } else if (message.tag == "dismissError") {
        this.noError = false;
      }
    });
  }
  
  ngOnDestroy(): void {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
