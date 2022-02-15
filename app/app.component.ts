import { Component } from '@angular/core';
import { VERSION } from '@angular/material';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const NAME = 'name';
const ADDRESS_LINE_1 = 'addressLine1';
const ADDRESS_LINE_2 = 'addressLine2';
const CITY = 'city';
const STATE = 'state';
const POSTAL_CODE = 'postalCode';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // version = VERSION;

  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      NAME: ['', [Validators.required]],
      addressLine1: ['sdad'],
      [ADDRESS_LINE_2]: ['dsa'],
      [CITY]: ['', [Validators.required]],
      [STATE]: ['', [Validators.required]],
      [POSTAL_CODE]: ['', [Validators.required]],
    });

    this.addressForm.get(ADDRESS_LINE_1).valueChanges.subscribe(() => {
      console.log('Address line 1 changed');
    });
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
