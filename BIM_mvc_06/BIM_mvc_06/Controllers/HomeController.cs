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
        public async Task<ActionResult> postMethod1([FromBody]UserDetailModel user)
        {

            System.Diagnostics.Debug.WriteLine(user.password);

            /*UserDetailModel user = new UserDetailModel
            {
                name = "sitechitti",
                password = "240590"
            };
            */
            var val = await GetData(user.name);
            return Json("status ok");
        }


        async static Task<String> GetData(String name)
        {
            //for retriving a new data 
            using (var client1 = new MyCouchClient("http://admin:admin@localhost:5984", "bim"))
            {

                //var name = new UserDetailModel();

                var getEntityResponse = await client1.Entities.GetAsync<String>("84ca163c52885c2823ba547510001721");

                var getEntityResponse1 = await client1.Entities.GetAsync<String>("vinoth");
                var getDocumentResponse = await client1.Documents.GetAsync("955e47ca47676ed99de5aef5ab00391f");


                //var response1 = await client1.Entities.PostAsync(detail);


                //Console.Write(response.ContentLength);


            }

            return ("check");



        }
    }


    



    }