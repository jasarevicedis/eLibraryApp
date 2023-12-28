import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/api/categories.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-categories-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-dialog.component.html',
  styleUrls: ['./categories-dialog.component.scss']
})
export class CategoriesDialogComponent implements OnInit  {
  categoriesList: any;
  constructor(private categoriesService: CategoriesService, 
    private router: Router,
    private dialogRef: MatDialogRef<CategoriesDialogComponent>) {}

  ngOnInit(): void {
    this.categoriesService.getCategoriesData().subscribe((data) => {
      this.categoriesList = data;
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
