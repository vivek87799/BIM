﻿using MyCouch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BIM_mvc_06.Connenction
{
    public class ConnectionStrings
    {
        public DbConnectionInfo GetCouchUrl()
        {
            //Database url , database name
            return (new DbConnectionInfo("https://bimapp87799:biminframanagement@bimapp87799.cloudant.com", "bim"));

        }

    }
}