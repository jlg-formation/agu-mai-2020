import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Clé de 13', Validators.required),
    price: new FormControl('12.34', Validators.required),
    qty: new FormControl('1', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/stock');
  }
}
