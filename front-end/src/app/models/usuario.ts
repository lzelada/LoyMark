export interface Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: any;
    telefono: string;
    pais: string;
    pregunta?: boolean;
}