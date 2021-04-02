window.onload = makeAjaxRequest;

let xhr = false;

function makeAjaxRequest() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	
	if (xhr) {
		xhr.open("GET", "counties.json", true);
		xhr.send(); 
		xhr.onreadystatechange = showContents; 
	} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";
	}	
}

function showContents () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    let data = JSON.parse(xhr.responseText); 
			let txt = "";
			for (let i in data.counties) {
			  txt += "<tr><td>" + data.counties[i].name + "</td></tr>";
			}
			document.getElementById("countylist").innerHTML = txt;
		} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated request. Error: " + xhr.status;
		}
	}
}


           
	




