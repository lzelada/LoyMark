import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit {

  constructor(
    private _usuarioService: UsuarioService,
    private _snackBar: MatSnackBar
  ){}

  loading: boolean = false;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'telefono', 'fechaNacimiento', 'pais', 'accion'];
  dataSource = new MatTableDataSource<Usuario>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getUsuarios();
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

  getUsuarios() {
    this.loading = true;
    this._usuarioService.getUsuarios().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    }, error =>  {
      this.loading = false;
      alert('Error inesperado');
    })
  }

  eliminarUsuario(id: number) {
    this.loading = true;

    this._usuarioService.deleteUsuario(id).subscribe(() =>{
      this.sendMessage();
      this.loading = false;
      this.getUsuarios();
    })
  }

  sendMessage() {
    let action = "Eliminado";
    this._snackBar.open('Usuario eliminado correctamente', action, {
      duration: 4000
    });
  }
}
