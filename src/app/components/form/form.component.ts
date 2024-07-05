import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/interface';
import { ProductService } from '../../service/product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FooterComponent, ProgressBarModule, ToastModule, MenuComponent,  ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent  {
  checked: boolean = false;
  productForm: any = FormGroup;
  products: Product[]=[];

  constructor(private fb: FormBuilder, private productService: ProductService){}

  ngOnInit(): void {
      this.productForm = this.fb.group({
        name: ['', Validators.required],
        image: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(0)]],
        discount: [false],
        discountValue: [null],
        isFeatured: [false]
      });
      this.productService.getProducts().subscribe(products => {
        this.products = products;
      });
    }

      onSubmit(): void {
        if (this.productForm.invalid) {
          return;
        }
        const product: Product = this.productForm.value;
        if (product.discount && !product.discountValue){
          return;
        }
        this.productService.createProduct(product).then(() => {
          this.productForm.reset();
        });
      }
      onDelete(id: string): void {
        this.productForm.patchValue
      }

    onEdit(product: Product): void {
    this.productForm.patchValue(product);
    }
}

