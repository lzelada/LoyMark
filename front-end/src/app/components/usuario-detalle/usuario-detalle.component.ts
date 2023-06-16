import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit{

  id!: number;
  usuario!: Usuario;

  constructor(
    private _snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private aRoute: ActivatedRoute
  ){
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }
    
  ngOnInit(): void {
      this.getUsuario();
  }

  getUsuario() {
    this.usuarioService.getUsuarioById(this.id).subscribe(data => {
      this.usuario = data; 
    });
  }
}
