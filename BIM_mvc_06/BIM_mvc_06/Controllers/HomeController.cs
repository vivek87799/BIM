using BIM_mvc_06.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using System.Threading.Tasks;
using MyCouch;
using MyCouch.Contexts;
using MyCouch.Net;
using MyCouch.Requests;




namespace BIM_mvc_06.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

     

        [System.Web.Http.HttpPost]
        public async Task<ActionResult> getSiteList([FromBody]UserDetailModel user)
        {

                       
           
            return Json("status ok");
        }

        public async Task<Boolean> getSiteListCD(UserDetailModel user)
        {
            var uriBuilder = GetCouchUrl();

            Boolean valid = false;
            using (var client = new MyCouchClient(uriBuilder))
            {
                var notifications = await client.Views.QueryAsync<SiteModel>(new QueryViewRequest("siteList", "site-list"));
                SiteModel site = new SiteModel();

                List<SiteModel> un = notifications.Rows.Select(r => r.Value).ToList();

            }

            return valid;
        }

        private DbConnectionInfo GetCouchUrl()
        {
            //Database url , database name
            return (new DbConnectionInfo("http://admin:admin@localhost:5984", "bim"));

        }
    }


    



    }