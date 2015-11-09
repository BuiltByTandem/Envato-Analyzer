var newDiv = document.createElement("div");
newDiv.id = "salesAnalyser";
price = document.getElementsByClassName('js-purchase-price')[0].innerHTML.substr(1).replace(/\D/g,'');
totalSales = document.getElementsByClassName('sidebar-stats__number')[0].innerText.replace(/\D/g,'');
publishDate = document.getElementsByClassName('meta-attributes__attr-detail')[0].innerText;
utcDate = new Date(publishDate);
currentDate = new Date();
daysPublished = Math.round(Math.abs((currentDate.getTime() - utcDate.getTime())/(86400000)));
totalRevenue = price * totalSales;

perDayRevenue = Math.floor(totalRevenue / daysPublished);
perDaySales = totalSales / daysPublished;


newDiv.innerHTML = 	'<div class="grid-container">' +
					'<span id="analyser"><span>Envato</span>Analyser</span>Total Revenue: <strong>' + accounting.formatMoney(totalRevenue) +
					'</strong> &nbsp; Profit: <strong>' + accounting.formatMoney(totalRevenue / 2) + '</strong> &nbsp;<span id="info">' +
					'Revenue per Day: <strong>' + accounting.formatMoney(perDayRevenue) + "</strong> &nbsp; Sales per day: <strong>" +
					perDaySales.toFixed(2) + "</strong>" + '</span></div><a href="http://www.builtbytandem.com/foundry" target="_blank" id="tandem">Tandem</a>';

document.body.insertBefore(newDiv, document.body.firstChild);
document.body.style.paddingTop = "48px";