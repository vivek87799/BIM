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
using BIM_mvc_06.Connenction;

namespace BIM_mvc_06.Controllers
{
    public class LoginController : Controller
    {

        ConnectionStrings db;
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public async Task<List<UserDetailModel>> Get()
        {
            db = new ConnectionStrings();
            var uriBuilder = db.GetCouchUrl();
            using (var client1 = new MyCouchClient("http://admin:admin@localhost:5984", "testdatabase")) 
            {
                
                var name = new UserDetailModel();

                var client2 = new MyCouchClient("http://admin:admin@localhost:5984", "bim/_design/userCredential/_view/user-credential");
                string uname = string.Format("?keys=[\"bim\"]"); //
                var client3 = new MyCouchClient("http://admin:admin@localhost:5984", "user_details");
                var getDocRes = await client3.Documents.GetAsync("_design/user-cred");

                // 
                var getDocRes1 = await client2.Documents.GetAsync(uname);



                string uname1 = @"?keys=[ ""bim"" ]"; //
                var getEntityResponse1 = await client2.Entities.GetAsync<String>(uname);
                var getDocumentResponse = await client2.Documents.GetAsync("bim");

                client2.Connection.AfterSend = async response =>
                {
                    
                    var s = await response.Content.ReadAsStringAsync();
                };
            }

            Boolean valid = false;
            using (var client = new MyCouchClient(uriBuilder))
            {
                var notifications = await client.Views.QueryAsync<UserDetailModel>(new QueryViewRequest("userCredential", "user-credential"));

                UserDetailModel ud = new UserDetailModel();
                
                var ss =  notifications.Rows.Where(r=> r.Value.password == "bim" && r.Value.name == "bim");
                
                List<UserDetailModel> un = notifications.Rows.Select(r => r.Value).ToList();

                foreach (var item in un)
                {
                    if (item.name == "bim" && item.password == "bim") {
                        valid = true;
                        break;
                       
                    };
                }
                
                ud = (UserDetailModel)notifications.Rows.Select(r => (r.Value.password == "bim" && r.Value.name == "bim"));
                return notifications.Rows.Select(r => r.Value).ToList();
            }

            
        }


       
        public async Task<Boolean> validateUser(UserDetailModel user)
        {
            db = new ConnectionStrings();
            var uriBuilder = db.GetCouchUrl();

            Boolean valid = false;
            using (var client = new MyCouchClient(uriBuilder))
            {
                var notifications = await client.Views.QueryAsync<UserDetailModel>(new QueryViewRequest("userCredential", "user-credential"));

                UserDetailModel ud = new UserDetailModel();

                var ss = notifications.Rows.Where(r => r.Value.password == "bim" && r.Value.name == "bim");

                List<UserDetailModel> un = notifications.Rows.Select(r => r.Value).ToList();

                foreach (var item in un)
                {
                    if (item.name != null && item.name == user.name && item.password == user.password)
                    {
                        valid = true;
                        return valid;

                    };
                }

                
            }

            return valid;
        }

   
        [System.Web.Http.HttpPost]
        public async Task<ActionResult> postMethod1([FromBody]UserDetailModel user)
        {
            Boolean valid = true;
            //List<UserDetailModel> userdetails = await Get();
            // validating the user cred
             valid = await validateUser(user);
            /*UserDetailModel user = new UserDetailModel
            {
                name = "sitechitti",
                password = "240590"
            };  
            */
            return Json(valid);
        }
    }
}