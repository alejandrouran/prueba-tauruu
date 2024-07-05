import { NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, HttpClientModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  value: string = '';
  longText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/text.txt', { responseType: 'text' })
      .subscribe(data => {
        this.longText = data;
      });
  }
  public title: string = 'Quick Links';
  public titleTwo: string = 'Receive offers & discounts via e -mail';
  public pie: string = '2024, Eco Dental - All rights reserved.';
  public pied: string = 'Terms & Conditions   Privacy   Refund Policy';
}
