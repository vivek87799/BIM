﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIM_mvc_06.Controllers
{
    public class SiteController : Controller
    {
        // GET: Site
        public ActionResult Index()
        {
            return View();
        }

        // GET: Site/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }
             
    }
}
