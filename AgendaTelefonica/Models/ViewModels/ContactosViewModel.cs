using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaTelefonica.Models.ViewModels
{
    public class ContactosViewModel
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Telefono { get; set; }
        public int Movil { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }
    }
}
