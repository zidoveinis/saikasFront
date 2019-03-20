import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentFxRates } from './current-fx-rates.component';

const routes: Routes = [
    {
        path: '',
        component: CurrentFxRates
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurrentFxRatesRoutingModule {}
