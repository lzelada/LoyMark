using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace back_end.EF;

public partial class Usuario
{
    [Required]
    public int Id { get; set; }

    [Required]
    public string? Nombre { get; set; }

    [Required]
    public string? Apellido { get; set; }

    [Required]
    public string? Email { get; set; }

    [Required]
    public DateTime? FechaNacimiento { get; set; }

    [Required]
    public int? Telefono { get; set; }

    [Required]
    public string? Pais { get; set; }

    [Required]
    public bool? Pregunta { get; set; }
}
