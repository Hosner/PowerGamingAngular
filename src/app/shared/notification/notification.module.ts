import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from "./notification.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [NotificationComponent],
    imports: [
        CommonModule,
        NgbModule,
        TranslateModule
    ],
    exports: [
        NotificationComponent
    ]
})
export class NotificationModule {
}
