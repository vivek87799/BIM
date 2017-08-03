using BIM_mvc_06.Models;
using BIM_mvc_06.Connenction;
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

        ConnectionStrings db;
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

     
        // routed to get list of sites
        [System.Web.Http.HttpPost]
        public async Task<ActionResult> getSitesList([FromBody]string role)
        {

            List<SiteModel> sites = new List<SiteModel>();
            sites = await getSiteListCD(role);
           
            return Json(sites);
        }

        public async Task<List<SiteModel>> getSiteListCD(string role)
        {

            db = new ConnectionStrings();
            var uriBuilder = db.GetCouchUrl();

            List<SiteModel> sites = new List<SiteModel>();
            List<SiteModel> siteslist = new List<SiteModel>();

            using (var client = new MyCouchClient(uriBuilder))
            {
                var notifications = await client.Views.QueryAsync<SiteModel>(new QueryViewRequest("siteList", "site-list"));
              

                sites = notifications.Rows.Select(r => r.Value).ToList();


                foreach (var item in sites)
                {
                    if (item.sitename != null)
                    {
                        siteslist.Add(item);

                    };
                }
            }

            return siteslist;
        }

        //Routed to get list of elements for a site
        
        [System.Web.Http.HttpPost]
        public async Task<ActionResult> getElementsList([FromBody]string siteid)
        {

            List<ElementModel> elements = new List<ElementModel>();
            elements = await getElementsListCD(siteid);

            return Json(elements);
        }

        public async Task<List<ElementModel>> getElementsListCD(string siteid)
        {
            db = new ConnectionStrings();
            var uriBuilder = db.GetCouchUrl();
            List<ElementModel> elements = new List<ElementModel>();
            List<ElementModel> elementslist = new List<ElementModel>();
            elementslist.Clear();
            using (var client = new MyCouchClient(uriBuilder))
            {
                var notifications = await client.Views.QueryAsync<ElementModel>(new QueryViewRequest("elementList", "element-list"));

                elements = notifications.Rows.Select(r => r.Value).ToList();

                foreach (var item in elements)
                {
                    if (item.elementname != null && item.siteid == siteid)
                    {
                        elementslist.Add(item);

                    };
                }

            }

            return elementslist;
        }

  
    }


    



    }