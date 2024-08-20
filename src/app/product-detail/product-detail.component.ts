import { Component, Input, OnInit} from '@angular/core';
import { ProductService } from '../api/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonModule, Location} from '@angular/common';
import { CelularesComponent } from "../celulares/celulares.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CommonModule, CelularesComponent, FontAwesomeModule],
  standalone: true
})
export class ProductDetailComponent implements OnInit {
  

  faLeftArrow = faArrowLeft;


  productId!: string;
  product: any; // O define un tipo más específico según tu interfaz Product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
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
  goBack(): void {
    this.location.back();
  }
}