using back_end.EF;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly LoyMarkContext _context;
        public UsuarioController(LoyMarkContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var lista = await _context.Usuarios.ToListAsync();

                return Ok(lista);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var usuario = await _context.Usuarios.FindAsync(id);

                if (usuario == null)
                {
                    return NotFound();
                }

                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(Usuario usuario)
        {
            try
            {
                _context.Add(usuario);
                await _context.SaveChangesAsync();

                Actividade actividad = new Actividade
                {
                    CreateDate = DateTime.Now,
                    IdUsuario = usuario.Id,
                    Actividad = "Creación de Usuario"
                };
                _context.Add(actividad);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var usuario = await _context.Usuarios.FindAsync(id);

                if (usuario == null)
                {
                    return NotFound();
                }

                Actividade actividad = new Actividade
                {
                    CreateDate = DateTime.Now,
                    IdUsuario = usuario.Id,
                    Actividad = "Eliminación de Usuario"
                };

                _context.Usuarios.Remove(usuario);
                await _context.SaveChangesAsync();


                _context.Add(actividad);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> Update(int id, Usuario usuario)
        {
            try
            {
                if (id != usuario.Id)
                {
                    return BadRequest();
                }

                var usuarioItem = await _context.Usuarios.FindAsync(id);

                if (usuarioItem == null)
                {
                    return NotFound();
                }

                usuarioItem.Nombre = usuario.Nombre;
                usuarioItem.Apellido = usuario.Apellido;
                usuarioItem.Email = usuario.Email;
                usuarioItem.FechaNacimiento = usuario.FechaNacimiento;
                usuarioItem.Telefono = usuario.Telefono;
                usuarioItem.Pais = usuario.Pais;
                usuarioItem.Pregunta = usuario.Pregunta;

                await _context.SaveChangesAsync();

                Actividade actividad = new Actividade
                {
                    CreateDate = DateTime.Now,
                    IdUsuario = usuarioItem.Id,
                    Actividad = "Modificación de Usuario"
                };
                _context.Add(actividad);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
