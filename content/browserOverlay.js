/**
 * ProdtestFormatterChrome namespace.
 */
if ("undefined" == typeof(ProdtestFormatterChrome)) {
  var ProdtestFormatterChrome = {};
};

ProdtestFormatterChrome.BrowserOverlay = {
  /**
   * opens a new browser window with the formatted prodtest results
   */
  openLink : function(aEvent) {
    let stringBundle = document.getElementById("prodtestformatter-string-bundle");
    let errMsg = stringBundle.getString("prodtestformatter.error.msg");
    
    var validLink = false;
    if(gContextMenu.onLink == true) {
	var resultLink = new String(gContextMenu.target);
	if (resultLink.indexOf("results.xml") != -1) {
            openUILinkIn("http://wwu-wsl/cgi-bin/parse_prodtest_xml.py?url="+resultLink+"&tab=1", "tab");
            validLink = true;
        }
    }
    if (validLink == false) {
	window.alert(errMsg);
    }
  }
};
