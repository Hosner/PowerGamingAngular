import {Injectable} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

/**
 * Servicio de modales
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
    /**
     * Opciones por defecto del modal
     * */
    public options: NgbModalOptions = {
        backdrop: "static",
        keyboard: false,
        centered: true
    };

    private modalRef: NgbModalRef;

    constructor(private ngbModal: NgbModal) {
    }
    /**
     * Abrir el modal con la template o componente que se necesite
     * */
    open(template: any, options?: NgbModalOptions): Promise<any> {
      this.modalRef = this.ngbModal.open(template, options ? options : this.options);
        return this.modalRef.result;
    }
    /**
     * Cerrar el modal
     * */
    close() {
        this.modalRef.close();
    }

}
