import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMessage } from '../interfaces/IMessage';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<IMessage<any>>();

    sendMessage(message: IMessage<any>) {
        this.subject.next(message);
    }

    onMessage(): Observable<IMessage<any>> {
        return this.subject.asObservable();
    }
}
