import { Component, Input, OnInit} from '@angular/core';
import { ProductService } from '../api/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CelularesComponent } from "../celulares/celulares.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CommonModule, CelularesComponent],
  standalone: true
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  product: any; // O define un tipo más específico según tu interfaz Product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.productId = params.get('id')!;
        return this.productService.getProductById(this.productId);
      })
    ).subscribe(product => {
      this.product = product;
    });
  }
}