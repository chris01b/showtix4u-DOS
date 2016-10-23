var fs = require('fs'); // Needed to get the html file of the site download from iMacros	
var cheerio = require('cheerio');

var content = fs.readFileSync('/home/chris/iMacros/Downloads/boxoffice_20161019_224448.htm').toString();
$ = cheerio.load(content);


var generalSeats = $("div#chart.purchase_panel > div > center > table[width='100%'] > tbody").children().each(function() {
	tableTest = $(this).find("table[border='0']")
	tables = tableTest;
	if (tableTest.html() !== null) {
		tables.each(function(index) {
			seatCount = $(this).find('tbody > tr > td');
			console.log(seatCount);
		});
	}
});