import {Component} from '@angular/core';
import {ModalService} from "../servicios/modal.service";
import {DataService} from "../servicios/data.service";


/**
 * Componente de notificacion
 */
@Component({
    selector: 'app-notificacion',
    templateUrl: './notification.component.html'
})

export class NotificationComponent {

    constructor(public _modalService: ModalService,
                public _dataService: DataService
    ) {
    }

}
