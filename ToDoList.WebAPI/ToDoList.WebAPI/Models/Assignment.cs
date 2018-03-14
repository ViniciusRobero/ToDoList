using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoList.WebAPI.Models
{
    public class Assignment
    {
        public virtual string Discription { get; set; }
        public virtual Int64 Id { get; set; }
    }
}