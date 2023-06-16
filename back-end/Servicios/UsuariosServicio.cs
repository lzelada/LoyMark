using back_end.EF;
using Microsoft.EntityFrameworkCore;

namespace Servicios
{
    public interface IUsuarioServicio
    {
        List<Usuario> GetUsuarios();
    }
    public class UsuariosServicio: IUsuarioServicio
    {
        private readonly LoyMarkContext _context;

        public UsuariosServicio(LoyMarkContext context)
        {
            _context = context;
        }

        public List<Usuario> GetUsuarios()
        {
            var lista = _context.Usuarios.ToList();
            return lista;
        }
    }
}