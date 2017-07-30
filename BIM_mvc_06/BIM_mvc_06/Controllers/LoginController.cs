using BIM_mvc_06.Models;
using MyCouch;
using MyCouch.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace BIM_mvc_06.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public async Task<List<UserDetailModel>> Get()
        {
            var uriBuilder = GetCouchUrl();


            using (var client1 = new MyCouchClient("http://admin:admin@localhost:5984", "bim"))
            {

                var name = new UserDetailModel();

                var getEntityResponse = await client1.Entities.GetAsync<String>("vinoth");

                var client2 = new MyCouchClient("http://admin:admin@localhost:5984", "bim/_design/userCredential/_view/user-credential");
                string uname = string.Format("?keys=[ \"bim\" ]"); //

                string uname1 = @"?keys=[ ""bim"" ]"; //
                var getEntityResponse1 = await client2.Entities.GetAsync<String>(uname);
                var getDocumentResponse = await client2.Documents.GetAsync("bim");



                //var response1 = await client1.Entities.PostAsync(detail);


                //Console.Write(response.ContentLength);

            }
            using (var client = new MyCouchClient(uriBuilder))
            {
                var notifications = await client.Views.QueryAsync<UserDetailModel>(new QueryViewRequest("userCredential", "user-credential"));
                return notifications.Rows.Select(r => r.Value).ToList();
            }

            
        }

        private DbConnectionInfo GetCouchUrl()
        {

            return (new DbConnectionInfo("http://admin:admin@localhost:5984", "bim"));

        }
        [System.Web.Http.HttpPost]
        public async Task<ActionResult> postMethod1([FromBody]UserDetailModel user)
        {

            System.Diagnostics.Debug.WriteLine(user.password);
            List<UserDetailModel> userdetails = await Get();
            /*UserDetailModel user = new UserDetailModel
            {
                name = "sitechitti",
                password = "240590"
            };  
            */
            return Json("status ok");
        }
    }
}