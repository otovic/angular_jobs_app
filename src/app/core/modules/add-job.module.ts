import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobComponent } from '../../components/ui/add-job/add-job.component';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@NgModule({
    declarations: [
        AddJobComponent
    ],
    providers: [
        UtilsService
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        AddJobComponent,
    ],
})
export class AddJobModule { }
