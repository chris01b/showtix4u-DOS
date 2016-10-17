var macro = "CODE:TAB T=1" + "\n";
macro += "TAB CLOSEALLOTHERS" + "\n";
macro += "URL GOTO=https://www.showtix4u.com/boxoffice.php?submit=Search+for+Events&begin=1542968&current_client=0451441210091192&ts=1445188550" + "\n";
macro += "WAIT SECONDS=1" + "\n";
macro += "TAG POS=5 TYPE=INPUT:BUTTON ATTR=ID:select_seats_button" + "\n";
macro += "WAIT SECONDS=3";

var seats = "CODE:SET !TIMEOUT_STEP 0" + "\n";
seats += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:57087:{{side}}:{{row}}:{{seat}} CONTENT=YES";

iimPlay(macro);
var side

side = "HL"
for(var row=65;row<=76;row++) {
   for(var seat=0;seat<=30;seat++) {
      iimDisplay(seat);    
      iimSet("seat", seat);
      iimSet("row", String.fromCharCode(row));
      iimSet("side", side);
      iimPlay(seats);
   }
}

side = "HL"
for(var row=65;row<=76;row++) {
   for(var seat=0;seat<=30;seat++) {
      iimDisplay(seat);    
      iimSet("seat", seat);
      iimSet("row", String.fromCharCode(row));
      iimSet("side", side);
      iimPlay(seats);
   }
}

side = "BACK"
for(var row=77;row<=83;row++) {
   for(var seat=101;seat<=135;seat++) {
      iimDisplay(seat);    
      iimSet("seat", seat);
      iimSet("row", String.fromCharCode(row));
      iimSet("side", side);
      iimPlay(seats);
   }
}