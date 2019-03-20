import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './current-fx-rates.html',
  styleUrls: ['./current-fx-rates.scss']
})
export class CurrentFxRates {
  currenciesForm: FormGroup;
  lastDate: any;
  filteredDate: any;
  ccyAmt: any[] = [];
  currency: any[];
  res: number;

  constructor(http: HttpClient,
    private apiService: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.currenciesForm = this.formBuilder.group({
      eur: new FormControl(1),
      Currency: new FormControl(),
      result: new FormControl({ disabled: true }),
    })
    this.getCurrencies();

    this.currenciesForm.controls.Currency.valueChanges.subscribe(s => {
      this.calculate();
    })
    this.currenciesForm.controls.eur.valueChanges.subscribe(s => {
      this.calculate();
    })
  }

  getCurrencies() {
    this.apiService.getCurrentFxRates().subscribe(s => {
      this.lastDate = s['fxRate'][0].dt;
      this.filteredDate = s['fxRate'].filter(x => x.dt == this.lastDate);
      this.filterDate()
    },
      error => {
        alert(error.error);
      })
  }
  filterDate() {
    this.filteredDate.forEach(element => {
      this.ccyAmt.push(element.ccyAmt[1])
    });
    this.currency = this.ccyAmt
    this.currenciesForm.controls.Currency.setValue(this.currency[30])
  }
  calculate() {
    if (this.currenciesForm.controls.eur.value && this.currenciesForm.controls.Currency.value) {
      var eur = Number(this.currenciesForm.controls.eur.value)
      var currency = Number(this.currenciesForm.controls.Currency.value.amt)
      this.res = eur * currency
      this.currenciesForm.controls.result.setValue(this.res.toFixed(4) + " " + this.currenciesForm.controls.Currency.value.ccy)
    }
  }
}