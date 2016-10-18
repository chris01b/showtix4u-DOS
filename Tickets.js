var macro = "CODE:TAB T=1" + "\n";
macro += "TAB CLOSEALLOTHERS" + "\n";
macro += "URL GOTO=https://www.showtix4u.com/boxoffice.php?submit=Search+for+Events&begin=1542968&current_client=0451441210091192&ts=1445188550" + "\n";
macro += "WAIT SECONDS=1" + "\n";
macro += "TAG POS=6 TYPE=INPUT:BUTTON ATTR=ID:select_seats_button" + "\n";
macro += "WAIT SECONDS=3";

var seats = "CODE:SET !TIMEOUT_STEP 0" + "\n";
seats += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:57089:{{side}}:{{row}}:{{seat}} CONTENT=YES";

var side
function clickSection(seat, row, side) {
   for(var row=65;row<=76;row++) {
      for(var seat=0;seat<=30;seat++) {
         iimDisplay(seat);    
         iimSet("seat", seat);
         iimSet("row", String.fromCharCode(row));
         iimSet("side", side);
         iimPlay(seats);
      }
   }
}

iimPlay(macro);

clickSection([0, 30], [65, 76], "HL");
clickSection([65, 76], [0, 30], "HR");
clickSection([77, 83], [101, 135], "BACK");