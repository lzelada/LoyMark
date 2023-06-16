using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace back_end.EF;

public partial class Actividade
{
    [Required]
    public int IdActividad { get; set; }

    [Required]
    public DateTime? CreateDate { get; set; }

    [Required]
    public int? IdUsuario { get; set; }

    [Required]
    public string? Actividad { get; set; }
}
