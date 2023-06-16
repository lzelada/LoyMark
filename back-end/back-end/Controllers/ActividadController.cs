using back_end.EF;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System.IO;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActividadController : ControllerBase
    {
        private readonly LoyMarkContext _context;
        public ActividadController(LoyMarkContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var lista = await _context.Actividades.ToListAsync();
                List<Actividad> actividades = new List<Actividad>();
                foreach (var item in lista)
                {
                    var usuario = await _context.Usuarios.FindAsync(item.IdUsuario);

                    if (usuario != null)
                        actividades.Add(new Actividad() { Fecha = (DateTime)item.CreateDate, Usuario = usuario.Nombre + " " + usuario.Apellido, Detalle = item.Actividad });
                }

                return Ok(actividades);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public class Actividad
        {
            public DateTime Fecha { get; set; }
            public string Usuario { get; set; }
            public string Detalle { get; set; }
        }
    }
}
