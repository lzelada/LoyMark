import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {

  
  constructor(
    private _actividadService: ActividadesService
  ){}

  loading: boolean = false;
  displayedColumns: string[] = ['fecha', 'usuario', 'detalle'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getActividades();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getActividades() {
    this.loading = true;
    this._actividadService.getActividades().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    }, error =>  {
      this.loading = false;
      alert('Error inesperado');
    })
  }
}
