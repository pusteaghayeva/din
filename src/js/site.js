var _ = function(id)
{
	return document.getElementById(id);
}
var pop1_opened = false;
var pop1;
function popup(text,title)
{
	if(pop1_opened)
	{
		pop1.close();
	}
	pop1=window.open('','pop','width=250,height=250,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes');
	pop1_opened=true;
	html ='<html>';
	html+='	<header>';
	html+='		<title>'+title+'</title>';
	html+='	</header>';
	html+='	<body>';
	html+='		<div>'+text+'</div>';
	html+='<br/>';
	html+='		<div align="center"><a href="javascript:;" onClick="opener.pop1_opened=false;window.close()">close</a></div>';
	html+='	</body>';
	html+='</html>';
	pop1.document.write(html);
}

function popupPic(picURL)
{ 
	window.open( "scripts/pop.htm?"+picURL, "","scrollbars=yes, resizable=0, status=0,left=0, top=0,HEIGHT=200,WIDTH=200"); 				
}

function openLivechat(u)
{
	
	window.open(u, "","scrollbars=yes, resizable=0, status=0,left=0, top=0,HEIGHT=500,WIDTH=600");
}

function switchText(obj, e, title)
{
	if(e=='focus')
	{
		if(obj.value == title)
		{
			obj.value = '';								
		}
	}
	else
	{
		if(obj.value == '')
		{
			obj.value = title;								
		}		
	}		
}

function searchSwitch(obj, e, title)
{
	if(e=='focus')
	{
		if(obj.value == title)
		{
			obj.value = '';								
		}
	}
	else
	{
		if(obj.value == '')
		{
			obj.value = title;								
		}		
	}		
}	

function on_search(formObj, elmId, title)
{
	var f=formObj;
	var val=document.getElementById(elmId).value;
	if(trim(val) == '' || val == title)
		return false;	
	var type = $("#option2").is(':checked')?2:1;
			
	val = encode(val, 'utf8');
	val = escape(val);
	var url=f.action+type+'/'+val+'/';
	window.location=url;
	return false;
}

function switchPage(obj)
{
	var url=obj.options[obj.selectedIndex].value;
	window.location=url;
}

function do_search(subm_id)
{		
	_(subm_id).click();
}

function sSwitch(obj, e, title)
{
	switch(e)
	{
		case 'focus':
			if(obj.value == title)
				obj.value = '';
			break;
		default:
			if(obj.value == '')
				obj.value = title;
			break;
	}
}

function scribe()
{		
	_("scribe_send").click();
}

function onscribe(elmId, lang, title, msgError)
{
	var val = _(elmId).value;	
	if(trim(val) == '' || val == title)
		return false;

	var ret = validateEmail(val);
	if(!ret)
	{
		alert(msgError);	
		return false;
	}
	
	var url = '?open/'+lang+'/subscribe/1/' +  trim(val) + '/';// + trim(phone) +'/';
	window.open(url , '', 'directories=no, titlebar=no, height=300, width=400, left=400, top=200, location=no, addressbar=no,menubar=no, resize=no, scrollbars=no, status=no, toolbar=no');	
	
	return false;
}

function slide(index, count)
{
	for(var i=0; i<count; i++)
	{
		_('a_'+i).className = '';
		_('img_'+i).style.display = 'none';
	}
	_('a_'+index).className = 'on';
	_('img_'+index).style.display = '';
}

Math.roundf = function(val, precision)
{
	var p = this.pow(10, precision);
	return this.round(val * p) / p;
}

Math.roundup = function(val, precision)
{
	var p = this.pow(10, precision);
	return this.ceil(val * p) / p;
}

find = function(arr, searchStr)
{
	var returnArray = false;
	for (i=0; i<arr.length; i++)
	{
		if (typeof(searchStr) == 'function')
		{
			if (searchStr.test(arr[i]))
			{
				if (!returnArray)
				{
					returnArray = []
				}
				returnArray.push(i);
			}
		}
		else
		{
			if (arr[i]==searchStr)
			{
				if (!returnArray) { returnArray = [] }
					returnArray.push(i);
			}
    	}
  	}
	return returnArray;
}

search_array = function(arr, searchStr)
{
	var returnArray = false;
	for (var i=0; i<arr.length; i++)
	{
		var elm = arr[i];
		if(typeof(searchStr) == 'object' && typeof(elm) == 'object' && elm.length == searchStr.length)
		{
			var f = true;
			if(elm.length<1)
				f = false;
			for (var j=0; j<elm.length; j++)
			{
				if (elm[j]!==searchStr[j])
				{
					f = false;
				}   
			}
			if(f)
			{
				if (!returnArray) { returnArray = [] }
						returnArray.push(i);
			}		
		}
		else if (elm===searchStr)
		{
			if (!returnArray) { returnArray = [] }
				returnArray.push(i);
		}   
	}
	return returnArray;
}


function trim(inputString)
{
	if (typeof inputString != "string")
		return inputString;
	var retValue = inputString;
	var ch = retValue.substring(0, 1);	
	while (ch == " ")
	{ 
		retValue = retValue.substring(1, retValue.length);
		ch = retValue.substring(0, 1);
	}
	ch = retValue.substring(retValue.length - 1, retValue.length);
	
	while (ch == " ")
	{ 
		retValue = retValue.substring(0, retValue.length - 1);
		ch = retValue.substring(retValue.length - 1, retValue.length);
	}
	
	while (retValue.indexOf("  ") != -1)
	{
		retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ") + 1, retValue.length);
	}
	return retValue; 
}
/*  checks the validity of an email address entered 
	*   returns true or false 
	*/ 
function validateEmail(email)
{
    var splitted = email.match("^(.+)@(.+)$");
    if(splitted == null) return false;
    if(splitted[1] != null )
    {
      var regexp_user=/^\"?[\w-_\.]*\"?$/;
      if(splitted[1].match(regexp_user) == null) return false;
    }
    if(splitted[2] != null)
    {
      var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;
      if(splitted[2].match(regexp_domain) == null) 
      {
	    var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
	    if(splitted[2].match(regexp_ip) == null) return false;
      }// if
      return true;
    }
	return false;
}

function TestInputType(objValue,strRegExp)
{
	var ret = false;
	//alert("1");
	
	var charpos = objValue.search(strRegExp); 
	if(objValue.length > 0 &&  charpos >= 0) 
	{
		//alert("1");
		ret = true; 
	}
	return ret;
}
function addFavorite()
{
	if(document.all) 
		window.external.AddFavorite(document.location.href,document.title);
}
function switchDate(d,m,y,lang,module,params,all)
{
	if(d<1) d=0;
	if(m<1) m=0;
	if(y<1) y=0;
	var date = d+"."+m+"."+y;
	
	var url = "?/"+lang+"/"+module;
	for(i=0; i<params.length; i++)
	{
		url += "/"+	params[i];
	}
	if(!all)
		url += "/"+	date;
	
	window.location=url;	
}

function isPhone(evt)
{
	var charCode = (document.all) ? event.keyCode :  evt.which;
	var chr = String.fromCharCode(charCode);
	if(/[\d\.\s\-\(\)]/.test(chr))
		return true;
	else
		return false;
}

function isNumberKey(evt)
{
	var charCode = (document.all) ? event.keyCode :  evt.which;
	if((charCode > 31 
			&& (charCode < 48 || charCode > 57)
			|| charCode==46)
	 	&& charCode!=40 && charCode!=41 && charCode!=45 &&  charCode!=43&&  charCode!=46)
		return false;
	return true;
}

difference = function(/*Date*/date1, /*Date?*/date2, /*String?*/interval)
{
	//	summary:
	//		Get the difference in a specific unit of time (e.g., number of
	//		months, weeks, days, etc.) between two dates, rounded to the
	//		nearest integer.
	//	date1:
	//		Date object
	//	date2:
	//		Date object.  If not specified, the current Date is used.
	//	interval:
	//		A string representing the interval.  One of the following:
	//			"year", "month", "day", "hour", "minute", "second",
	//			"millisecond", "quarter", "week", "weekday"
	//		Defaults to "day".

	date2 = date2 || new Date();
	interval = interval || "day";
	var yearDiff = date2.getFullYear() - date1.getFullYear();
	var delta = 1; // Integer return value

	switch(interval)
	{
		case "quarter":
			var m1 = date1.getMonth();
			var m2 = date2.getMonth();
			// Figure out which quarter the months are in
			var q1 = Math.floor(m1/3) + 1;
			var q2 = Math.floor(m2/3) + 1;
			// Add quarters for any year difference between the dates
			q2 += (yearDiff * 4);
			delta = q2 - q1;
			break;
		case "weekday":
			var days = Math.round(difference(date1, date2, "day"));
			var weeks = parseInt(difference(date1, date2, "week"));
			var mod = days % 7;

			// Even number of weeks
			if(mod == 0){
				days = weeks*5;
			}else{
				// Weeks plus spare change (< 7 days)
				var adj = 0;
				var aDay = date1.getDay();
				var bDay = date2.getDay();

				weeks = parseInt(days/7);
				mod = days % 7;
				// Mark the date advanced by the number of
				// round weeks (may be zero)
				var dtMark = new Date(date1);
				dtMark.setDate(dtMark.getDate()+(weeks*7));
				var dayMark = dtMark.getDay();

				// Spare change days -- 6 or less
				if(days > 0)
				{
					switch(true)
					{
						// Range starts on Sat
						case aDay == 6:
							adj = -1;
							break;
						// Range starts on Sun
						case aDay == 0:
							adj = 0;
							break;
						// Range ends on Sat
						case bDay == 6:
							adj = -1;
							break;
						// Range ends on Sun
						case bDay == 0:
							adj = -2;
							break;
						// Range contains weekend
						case (dayMark + mod) > 5:
							adj = -2;
					}
				}
				else if(days < 0)
				{
					switch(true){
						// Range starts on Sat
						case aDay == 6:
							adj = 0;
							break;
						// Range starts on Sun
						case aDay == 0:
							adj = 1;
							break;
						// Range ends on Sat
						case bDay == 6:
							adj = 2;
							break;
						// Range ends on Sun
						case bDay == 0:
							adj = 1;
							break;
						// Range contains weekend
						case (dayMark + mod) < 0:
							adj = 2;
					}
				}
				days += adj;
				days -= (weeks*2);
			}
			delta = days;
			break;
		case "year":
			delta = yearDiff;
			break;
		case "month":
			delta = (date2.getMonth() - date1.getMonth()) + (yearDiff * 12);
			break;
		case "week":
			// Truncate instead of rounding
			// Don't use Math.floor -- value may be negative
			delta = parseInt(difference(date1, date2, "day")/7);
			break;
		case "day":
			delta /= 24;
			// fallthrough
		case "hour":
			delta /= 60;
			// fallthrough
		case "minute":
			delta /= 60;
			// fallthrough
		case "second":
			delta /= 1000;
			// fallthrough
		case "millisecond":
			delta *= date2.getTime() - date1.getTime();
	}

	// Round for fractional values and DST leaps
	return Math.round(delta); // Number (integer)
}

diffDays30 = function(/*Date*/date1, /*Date?*/date2)
{
	date2 = date2 || new Date();
	var delta = 1; // Integer return value
	
	var day = 1000 * 60 * 60 * 24; //one day in millisecond
	
	var t2 = date2.getTime();
	var t1 = date1.getTime();
	
	var d1 = getDaysInMonth(date1.getFullYear(), date1.getMonth());	
	var d2 = getDaysInMonth(date2.getFullYear(), date2.getMonth());

	/* 60 - d1 + d2
	d2_f =  (30 - d2);
	d1_f =  (30 - d1);
	alert(d1_f+':'+d2_f);
	t2 = t2 + (30 - d2)*day;	
	t1 = t1 + (30 - d1)*day;
	*/
	
	var c;
	if(d1==d2 && d1>30)
		c = -1;
	else if(d1==d2 && d1==30)	
		c = 0;
	else if(d1==d2-1)
		c = (d1 + d2) - 60 - 1;
	else if(d1>d2+1)
		c = (d1 + d2) - 60;	
	else	
		c = 60 - (d1 + d2);
	//alert(d1+':'+d2+'::::::'+c);
	
	var diff = t2-t1 + c * day;	

	delta /= 24;
	delta /= 60;
	delta /= 60;
	delta /= 1000;
	delta *= diff;
	
	//alert(Math.round(delta));

	// Round for fractional values and DST leaps
	return Math.round(delta); // Number (integer)
}

function getDaysInMonth(year, month)
{
	var startDate = new Date(year, month+1, 1);
	timeDifference = startDate - 86400000;
	var result = new Date(timeDifference);
	return result.getDate();
}

function daysInMonth(iMonth, iYear)
{
	return 32 - new Date(iYear, iMonth, 32).getDate();
}

function pause(numberMillis)
{
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true)
	{
		now = new Date();
		if (now.getTime() > exitTime)
			return;
	}	
}

function sleep(numberMillis)
{
	return pause(numberMillis);
}

var unreserved = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.~";
var reserved = "!*'();:@&=+$,/?%#[]";
var allowed = unreserved + reserved;
var hexchars = "0123456789ABCDEFabcdef";


function gethex(decimal) {
  return "%" + hexchars.charAt(decimal >> 4) + hexchars.charAt(decimal & 0xF);
  }

function encode(for_decode,charset) {

  var decoded = for_decode;
  var encoded = "";


  if (charset == "ascii") {

    var notascii = "";

    for (var i = 0; i < decoded.length; i++ ) {
      var ch = decoded.charAt(i);
      if (unreserved.indexOf(ch) != -1) {
        encoded = encoded + ch;
      } else {
        var charcode = decoded.charCodeAt(i);
        if (charcode < 128) {
          encoded = encoded + gethex(charcode);
        } else {
          encoded = encoded + ch;
          notascii = notascii + ch + " ";
        }
      }
    }
	return encoded;
    if (notascii != "") alert("Warning: Non-ASCII characters in decoded text!\n\nThus, these characters have not been encoded:\n" + notascii);
  }


  if (charset == "utf8") {
    for (var i = 0; i < decoded.length; i++ ) {
      var ch = decoded.charAt(i);
      if (unreserved.indexOf(ch) != -1) {
        encoded = encoded + ch;
      } else {

        var charcode = decoded.charCodeAt(i);

        if (charcode < 128) {
          encoded = encoded + gethex(charcode);
        }

        if (charcode > 127 && charcode < 2048) {
          encoded = encoded + gethex((charcode >> 6) | 0xC0);
          encoded = encoded + gethex((charcode & 0x3F) | 0x80);
        }

        if (charcode > 2047 && charcode < 65536) {
          encoded = encoded + gethex((charcode >> 12) | 0xE0);
          encoded = encoded + gethex(((charcode >> 6) & 0x3F) | 0x80);
          encoded = encoded + gethex((charcode & 0x3F) | 0x80);
        }

        if (charcode > 65535) {
          encoded = encoded + gethex((charcode >> 18) | 0xF0);
          encoded = encoded + gethex(((charcode >> 12) & 0x3F) | 0x80);
          encoded = encoded + gethex(((charcode >> 6) & 0x3F) | 0x80);
          encoded = encoded + gethex((charcode & 0x3F) | 0x80);
        }

      }

    }  // end of for ...
    return encoded;
  }
}

function addBookmark(title,url) {
	if (window.sidebar) { 
		window.sidebar.addPanel(title, url,""); 
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
	return true;
	}
}

function doOrder(lg, id)
{
	if(!id)
		return;
	
	var res;
	var url = '?open/'+lg+'/order/' + id + '/';
	res = window.open(url,"", "toolbar=no,status=no,location=no,menubar=no,status=yes,width=600, height=700");
}	

function loadImgs()
{	
	for(var i=0; i<imgArr.length; i++)
	{
		imgs[i] = new Image();
		imgs[i].src = imgArr[i];
		
		imgs2[i] = new Image();
		imgs2[i].src = imgArr2[i];
	}
}

function fileExtension()
{
	var fSelector = 'a[href*="upload/"]';
	
	var fnames = new Array();
	var fnames_str = "";
	$(fSelector).each(function(index) {
		$(this).attr("id", "fname"+index);
		var href = $(this).attr("href");
		var file = href.substr((href.lastIndexOf('/') +1));
		fnames[index] = file;
		if(fnames_str!="")
			fnames_str +=";";
		fnames_str += file;
		//console.log(file);
  	});
  	
  	
  	$.ajax({
	      url: "fileinfo.php",
	      global: false,
	      type: "POST",
	      data: ({'files':fnames_str}),
	      dataType: "json",
	      async:false,
	      success: function(json){
	         if(json.files!='')
	         {
	         	 var arr = json.files.split(';');
	         	 for(var i=0; i<arr.length; i++)
	         	 {
	         	 	 var sarr = arr[i].split(":");
	         	 	 $("#fname"+i).after(' <i>'+Math.round(sarr[1]/1024)+'kb</i>');
	         	 }
	         }
	      },
	      error: function(){
	      }
	   }
	)
	
  	
	$(fSelector).each(function(index) {
		if (!$(this).parents('table:first').hasClass("elinks")){
			var href = $(this).attr("href");
			var ext = href.substr((href.lastIndexOf('.') +1));
			//$(this).before(' <img src="images/icons/'+ext+'.gif" alt="'+ext+' file" style="display:block;float:left;"/> ');
			$(this).after(' <img src="images/icons/'+ext+'.gif" alt="'+ext+' file" style="display:block;float:left;margin-right:1px;"/> ');
		}
  	});
}

jQuery(document).ready(function() {
	fileExtension();
});	

$(document).ready(function() {
    $('.question').on("click", function (e) {
	    $('.question').not(this)
           .removeClass("openAd")
           .next(".answer")
           .slideUp();
	    
	    $(this).toggleClass("openAd")
           .next(".answer")
           .slideDown($(this).is(".openAd"));
	  });

});

$(function () {
	$('.blue-tooltip').click(function(){
		$('.city-modal').hide();
		var pid = $(this).data('pid');
		var id = $(this).data('id');

		if(id == 15) {
			var u = config.lang + '/map/archive/' + id + '/';
			//var u = config.mainUrl+ config.lang+ '/pressreliz/archive/1/'+d;
			location.href = u;
		}
		else {
			$("#city_"+id).fadeIn();
		}
	});

	$('.map-close-icon').click(function(){
		$('.city-modal').hide();
	});

	var keyList = $('.search-panel input[name=key]').autocomplete(
		{
			source:function(request,response){
				console.log('search begin');
				var stype = $('input[name="options"]:checked').val();

				$.ajax({
					type:'POST',dataType:'json',
					url:config.mainUrl+'service/search.GetContent/'+config.lang+'/'+stype,
					data:{maxRows:20,q:request.term},
					success:function(data){
						response($.map(data,function(item){return{type:item.type,id:item.id,label:item.title,url:item.url}}));
					}
				});
			},
			select: function( event, ui ) {
				//location.href=config.mainUrl+config.lang+'/firms/view/'+ui.item.id;
				location.href= ui.item.url;
				//console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
			},
			//open:function(){$('#searchform input[name=q]').autocomplete("widget").width(200);},
			minLength:1,
		});



})

