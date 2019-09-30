


function getGoogleSearchResults(q) {

    

    //  images     https://www.googleapis.com/customsearch/v1?key="YOUR_KEY"&amp;cx="ENGINE_API"&amp;q="picasso"&amp;searchType="image"&amp;fileType="png,jpg"&amp;alt=json
    // https://support.google.com/customsearch/answer/4513882?hl=en&ctx=topic&visit_id=637054746691014928-3266630968&rd=1 
    // https://cse.google.com/cse/create/new

  
   var api = "https://www.googleapis.com/customsearch/v1?AIzaSyCCjTvsBkUTfu5TtaVbhdZB8h5-w-uCKBE="
                + AIzaSyCCjTvsBkUTfu5TtaVbhdZB8h5-w-uCKBE + "&cx=" + CSE + "&q=" + encodeURIComponent(q);

    try {
      var response = UrlFetchApp.fetch(api, {
        muteHttpExceptions: true
      });
   if (response.getResponseCode() == 200) {
  
        var content = JSON.parse(response);
        
        // Did the search return results?
        if (content.searchInformation.totalResults > 0) {
  
          var count = content.items.length;
  
          for (var i = 0; i < count; i++) {
  
            // Save the page title, description and hyperlink
            Logger.log(content.items[i].title); //
            Logger.log(content.items[i].snippet); //
            Logger.log(content.items[i].link); //
          }
        }
      }
    } catch (f) {
      Logger.log(f.toString()); //
    }
  
  }








  

  import java.net.*;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.io.Reader.*;


id Search()  throws MalformedURLException, URISyntaxException, IOException {
    String key = "";
    String qry = "nebulas"; 
    String cx  = "";
    String fileType = "png,jpg";
    String searchType = "image";
    URL url = new URL ("https://www.googleapis.com/customsearch/v1?key=" +key+ "&amp;cx=" +cx+ "&amp;q=" +qry+"&amp;fileType="+fileType+"&amp;searchType="+searchType+"&amp;alt=json");
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("GET");
    conn.setRequestProperty("Accept", "application/json");
    BufferedReader br = new BufferedReader(new InputStreamReader ( ( conn.getInputStream() ) ) );
    GResults results = new Gson().fromJson(br, GResults.class);
    conn.disconnect();
  }

  or (int i=0; i &lt; 10; i++) {
    String path  = results.getLink(i)
    loadImage(path);
  }



AIzaSyCCjTvsBkUTfu5TtaVbhdZB8h5-w-uCKBE  //api key for google custom search 


AIzaSyCCjTvsBkUTfu5TtaVbhdZB8h5-w-uCKBE

