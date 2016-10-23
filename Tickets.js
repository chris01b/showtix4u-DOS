var handler = require('./handler.js');

var gotoShow = "CODE:TAB T=1" + "\n";
gotoShow += "TAB CLOSEALLOTHERS" + "\n";
gotoShow += "URL GOTO=https://www.showtix4u.com/boxoffice.php?submit=Search+for+Events&begin=1542968&current_client=104127110621723&ts=1476759001" + "\n";
gotoShow += "WAIT SECONDS=1" + "\n";
gotoShow += "TAG POS=4 TYPE=INPUT:BUTTON ATTR=ID:select_seats_button" + "\n";
gotoShow += "WAIT SECONDS=5" + "\n";
gotoShow += "SET !EXTRACT_TEST_POPUP NO" + "\n";
gotoShow += "TAG POS=1 TYPE=HTML ATTR=CLASS:* EXTRACT=HTM";

var clickSeats = "CODE:SET !TIMEOUT_STEP 0" + "\n";
clickSeats += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:54753:{{side}}:{{row}}:{{seat}} CONTENT=YES";

var side
function clickSection(seat, row, side) {
   for (var r=row[0];r<=row[1];r++) {
      for(var s=seat[0];s<=seat[1];s++) {
         iimDisplay(s);    
         iimSet("seat", s);
         iimSet("row", String.fromCharCode(r));
         iimSet("side", side);
         iimPlay(clickSeats);
      }
   }
}

iimPlay(gotoShow);
/*clickSection([2, 20], [65, 85], 'Left');
clickSection([101, 113], [65, 86], 'Center');
clickSection([1, 19], [65, 85], 'Right');*/

clickSection([2, 20], [65, 85], handler.sides[0]);