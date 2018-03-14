using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ToDoList.WebAPI.Models;
using ToDoList.WebAPI.ToDoList;

namespace ToDoList.WebAPI.Controllers
{
    public class AssignmentController : ApiController
    {
        public IEnumerable<object> Get()
        {
            var assignment = new List<Assignment>();
            using (ISession session = NhibernateSession.OpenSession())
            {
                assignment = session.Query<Assignment>().ToList();
            }

            return assignment;
        }
        
        public IEnumerable<object> Post([FromBody]Assignment assignment)
        {
            using (ISession session = NhibernateSession.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(assignment);
                    transaction.Commit();
                    return session.Query<Assignment>().ToList();
                }
            }
        }
        
        public void Put(int id, [FromBody]Assignment assignment)
        {
            using (ISession session = NhibernateSession.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(assignment);
                    transaction.Commit();
                }
            }
        }
        
        public void Delete(int id)
        {
            using (ISession session = NhibernateSession.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.Delete("from Item where IdAssignment = ?", id, NHibernateUtil.Int32);
                    session.Delete(new Assignment { Id = id });
                    transaction.Commit();
                }
            }
        }
    }
}
