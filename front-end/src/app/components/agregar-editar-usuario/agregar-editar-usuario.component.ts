import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agregar-editar-usuario',
  templateUrl: './agregar-editar-usuario.component.html',
  styleUrls: ['./agregar-editar-usuario.component.css']
})
export class AgregarEditarUsuarioComponent {
  
  loading: boolean = false;
  form: FormGroup;
  id!: number;
  title: string = 'Agregar Usuario';
  email!: string;
  constructor(
    private fb: FormBuilder,
    private _usuarioServicio: UsuarioService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute
  ){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: [''],
      pais: ['', Validators.required],
      pregunta: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.email = this.form.value.email;
  }

  ngOnInit(): void {

    //Determina el titulo del formulario
    if (this.id != 0) {
      this.title = 'Editar Usuario';
      this.getUsuario(this.id);
    }
  }

  getUsuario(id: number) {
    this.loading = true;
    this._usuarioServicio.getUsuarioById(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        fechaNacimiento: data.fechaNacimiento,
        telefono: data.telefono,
        pais: data.pais,
        pregunta: data.pregunta
      });
      this.loading = false;
    })
  }

  operation() {
    let fechaNacimiento = this.form.value.fechaNacimiento;

    //const date = new Date(fechaNacimiento);

    const usuario: Usuario = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      email: this.form.value.email,
      fechaNacimiento: this.form.value.fechaNacimiento,
      telefono: this.form.value.telefono,
      pais: this.form.value.pais,
      pregunta: this.form.value.pregunta
    }; 

    if (this.id != 0) {
      usuario.id = this.id;
      this.editarUsuario(this.id, usuario);
    }

    else
      this.agregarUsuario(usuario);

  }

  agregarUsuario(usuario: Usuario) {

    this._usuarioServicio.createUsuario(usuario).subscribe(() => {
      let text = 'Usuario agregado correctamente';
      let action = 'Agregado';
      this.sendMessage(text, action);
      this.router.navigate(['/usuarios']);
    })
  }

  editarUsuario(id: number, usuario: Usuario) {
    this.loading = true;
    this._usuarioServicio.updateUsuario(id, usuario).subscribe(data => {
      this.loading = false;
      let text = 'Usuario editado correctamente';
      let action = 'Editado';
      this.sendMessage(text, action);
      this.router.navigate(['/usuarios']);
    })
  }

  sendMessage(text: string, action: string) {
    this._snackBar.open(text, action, {
      duration: 4000
    });
  }
}
