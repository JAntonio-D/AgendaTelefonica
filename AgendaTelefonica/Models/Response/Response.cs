using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaTelefonica.Models.Response
{
    public class Response
    {
        public int success { get; set; }
        public string message { get; set; }
        public object data { get; set; }
    }
}
