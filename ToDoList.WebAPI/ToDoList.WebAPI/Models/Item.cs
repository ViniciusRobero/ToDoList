using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoList.WebAPI.Models
{
    public class Item
    {
        public virtual Int64 Id { get; set; }
        public virtual bool Status { get; set; }
        public virtual string Discription  { get; set; }
        public virtual Int64 IdAssignment { get; set; }
    }
}