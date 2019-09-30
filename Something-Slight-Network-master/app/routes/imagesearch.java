

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
    URL url = new URL ("https://www.googleapis.com/customsearch/v1?key="+AIzaSyCCjTvsBkUTfu5TtaVbhdZB8h5-w-uCKBE+"&amp;cx=" +cx+ "&amp;q=" +qry+"&amp;fileType="+fileType+"&amp;searchType="+searchType+"&amp;alt=json");
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

  
