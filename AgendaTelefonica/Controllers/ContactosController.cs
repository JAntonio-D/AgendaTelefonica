using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AgendaTelefonica.Controllers;
using AgendaTelefonica.Models;
using AgendaTelefonica.Models.ViewModels;
using AgendaTelefonica.Models.Response;

namespace AgendaTelefonica.Controllers
{

    [Route("api/[controller]")]
    public class ContactosController : Controller
    {
        private MyDBContext db;

        public ContactosController(MyDBContext context)
        {
            db = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<ContactosViewModel> get()
        {
            List<ContactosViewModel> lst = (from d in db.Contactos
                                            select new ContactosViewModel
                                            {
                                                Id = d.Id,
                                                Nombre = d.Nombre,
                                                Apellido = d.Apellido,
                                                Telefono = d.Telefono,
                                                Movil = d.Movil,
                                                Direccion = d.Direccion,
                                                Email = d.Email
                                            }).ToList();           
            return lst;
        }
    
    
        [HttpPost("[action]")]
        public Response add([FromBody] ContactosViewModel contacto)
        {
            Response oR = new Response();
            try
            {
                Contactos oContactos = new Contactos();
                oContactos.Nombre = contacto.Nombre;
                oContactos.Apellido = contacto.Apellido;
                oContactos.Telefono = contacto.Telefono;
                oContactos.Movil = contacto.Movil;
                oContactos.Direccion = contacto.Direccion;
                oContactos.Email = contacto.Email;

                db.Contactos.Add(oContactos);
                db.SaveChanges();

                oR.success = 1;
                
            }
            catch(Exception ex)
            {
                oR.success = 0;
                oR.message = ex.Message;
            }
            return oR;
        }

        [HttpPut("[action]")]
        public Response edit([FromBody] ContactosViewModel contacto)
        {
            Response oR = new Response();
            try 
            {
                Contactos oContactos = db.Contactos.Find(contacto.Id);

                oContactos.Nombre = contacto.Nombre;
                oContactos.Apellido = contacto.Apellido;
                oContactos.Telefono = contacto.Telefono;
                oContactos.Movil = contacto.Movil;
                oContactos.Direccion = contacto.Direccion;
                oContactos.Email = contacto.Email;

                db.Entry(oContactos).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();

                oR.success = 1;
            }
            catch(Exception ex)
            {
                oR.success = 0;
                oR.message = ex.Message;
            }
            return oR;
        }


        [HttpDelete("[action]/{id}")]
        public Response delete(int id)
        {
            Response oR = new Response();
            try
            {
                Contactos oContactos = db.Contactos.Find(id);

                db.Remove(oContactos);
                db.SaveChanges();

                oR.success = 1;
            }
            catch (Exception ex)
            {
                oR.success = 0;
                oR.message = ex.Message;
            }
            return oR;
        }


    }
}