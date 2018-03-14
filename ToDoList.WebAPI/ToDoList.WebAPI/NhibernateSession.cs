using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoList.WebAPI.ToDoList
{
    public class NhibernateSession
    {
        public static ISession OpenSession()
        {
            var configuration = new Configuration();
            var configurationPath = HttpContext.Current.Server.MapPath(@"~\Models\hibernate.cfg.xml");
            configuration.Configure(configurationPath);
            var itemConfigurationFile = HttpContext.Current.Server.MapPath(@"~\Mappings\Item.hbm.xml");
            configuration.AddFile(itemConfigurationFile);
            var assignmentConfigurationFile = HttpContext.Current.Server.MapPath(@"~\Mappings\Assignment.hbm.xml");
            configuration.AddFile(assignmentConfigurationFile);
            ISessionFactory sessionFactory = configuration.BuildSessionFactory();
            return sessionFactory.OpenSession();
        }
    }
}