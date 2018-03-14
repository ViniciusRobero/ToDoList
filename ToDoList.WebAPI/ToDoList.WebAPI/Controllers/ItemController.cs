using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToDoList.WebAPI.Models;
using ToDoList.WebAPI.ToDoList;

namespace ToDoList.WebAPI.Controllers
{
    public class ItemController : ApiController
    {
        public IEnumerable<object> Get(int id)
        {
            var items = new List<Item>();
            using (ISession session = NhibernateSession.OpenSession())
            {
                return session.Query<Item>()
                    .Where(x => x.IdAssignment == id)
                    .ToList();
            }
        }

        public IEnumerable<object> Post([FromBody]Item item)
        {
            using (ISession session = NhibernateSession.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(item);
                    transaction.Commit();

                    return session.Query<Item>()
                        .Where(x=>x.IdAssignment == item.IdAssignment)
                        .ToList();
                }
            }
        }

        public void Put([FromBody]Item item)
        {
            using (ISession session = NhibernateSession.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(item);
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
                    session.Delete(new Item { Id = id });
                    transaction.Commit();
                }
            }
        }
    }
}
