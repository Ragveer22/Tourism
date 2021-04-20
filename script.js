var mydata = {
	"data": [{
			"content": "While it is on the Chhotanagpur plateau, one of the oldest land formations in the world, Jharkhand the 28th state of India. With nearly one-third of its total area under forest cover, Jharkhand is rightfully called the “land of forests”. The lush green forests, rivers and waterfalls of this primeval land are home to many kinds of spectacular flora and fauna. Age-old tribes are the main inhabit of this wonderful land, the state is also a hubs of industry, commerce and education. A treasure-trove of minerals comprises 40 per cent of the mineral wealth of the country ranking first in the production of coal, mica and iron and helps in making Jharkhand one of the richest state of india in natural resources.The State of Jharkhand is endowed with immense bio-diversity, moderate climate, rich cultural and historical heritage, religious places of worship and ethnic aspects to make the State the ultimate destination for tourists.The tribes of Jharkhand consist of 32 tribes inhabiting the Jharkhand state in India. The tribes in Jharkhand were originally classified on the basis of their cultural types by the Indian anthropologist, Lalita Prasad Vidyarthi. On the right side district map of Jharkhand is displayed."
		},
		{
			"content": "The state shares its border with the states of Bihar to the north, Uttar Pradesh to the northwest, Chhattisgarh to the west, Odisha to the south and West Bengal to the east. It has an area of 79,710 km2 (30,778 sq mi). It is the 15th largest state by area, and the 14th largest by population. Hindi is the official language of the state. The city of Ranchi is its capital and Dumka its sub capital. The state is known for its waterfalls, hills and holy places; Baidyanath Dham, Parasnath and Rajrappa are major religious sites. The state was formed in 2000, from the territory that had previously been part of Bihar."
		},
		{
			"content": "Jharkhand suffers from what is sometimes termed a resource curse: it accounts for more than 40% of the mineral resources of India,but 39.1% of its population is below the poverty line and 19.6% of children under five years of age are malnourished. Jharkhand is primarily rural, with about 24% of its population living in cities.It is amongst the leading states in terms of economic growth. In 2017–18, the GDP growth rate of state was at 10.22%."
		},
		{
			"content": "Climate of Jharkhand varies from Humid subtropical in the north to tropical wet and dry in the south-east.The main seasons are summer, rainy, autumn, winter and spring. The summer lasts from mid-April to mid-June. May, the hottest month, characterised by daily high temperatures around 37 °C(98 °F) and low temperatures around 25 °C (77 °F). The southwest monsoon, from mid-June to October, brings nearly all the state's annual rainfall, which ranges from about 40 inches (1,000 mm) in the west-central part of the state to more than 60 inches (1,500 mm) in the southwest. Nearly half of the annual precipitation falls in July and August. The winter season lasts from November to February. The temperatures in Ranchi in December usually vary from about 10 °C (50 °F) to around 24 °C (75 °F). Spring season lasts from mid-February to mid-April."
		},
		{
			"content": "Jharkhand has a rich variety of flora and fauna. The national parks and the zoological gardens in the state of Jharkhand present a panorama of this variety.Part of the reason for the variety and diversity of flora and fauna found in Jharkhand state may be accredited to the Palamau Tiger Reserves under the Project Tiger. This reserve is abode to hundreds of species of flora and fauna,as indicated within brackets: mammals (39), snakes (8), lizards (4), fish (6), insects (21), birds (170), seed bearing plants and trees (97), shrubs and herbs (46), climbers, parasites and semi-parasites (25), and grasses and bamboos (17). "
		}
	]
}
function mouseover(){
	var cc = document.getElementById("cc");
	cc.style.cursor = "pointer";
	cc.innerHTML = "8012343064";
}
function mouseout(){
	var cc = document.getElementById("cc");
	cc.innerHTML = "Customer Care No";
}
function more(){
	document.getElementById("more").style.display = "none";
	document.getElementById("state").style.display = "inline";
}
function loadData(i){
	var d = document.getElementById("data");
	d.innerHTML = mydata.data[i].content;
}
function resetData(){
	var inp = document.getElementsByClassName("inp");
	for(idx in inp){
		inp[idx].value = "";
	}
	document.getElementById("error").innerHTML = 'Fields marked with <span class="req">*</span> are mandatory';
	document.getElementById("fname").style.borderColor = "green";
	document.getElementById("age").style.borderColor = "green";
	document.getElementById("mob").style.borderColor = "green";
	document.getElementById("add").style.borderColor = "green";
	document.getElementById("email").style.borderColor = "green";
}
// function showLogin(){
	// document.getElementById("log").style.display = "block";
	// document.getElementById("regi").style.display = "none";
// }
// function showRegister(){
	// document.getElementById("log").style.display = "none";
	// document.getElementById("regi").style.display = "block";
// }
function submitData(){
	var name = document.getElementById("fname");
	var age = document.getElementById("age");
	var mob = document.getElementById("mob");
	var add = document.getElementById("add");
	var email = document.getElementById("email");
	var err = "";
	
	if(name.value=="" || /^[A-Za-z\s]+$/.test(name.value)==false){
		name.style.borderColor = "red";
		err += "Name is invalid<br>";
	} else {
		name.style.borderColor = "green";
	}
	if(add.value==""){
		add.style.borderColor = "red";
		err += "Address is invalid<br>";
	} else {
		add.style.borderColor = "green";
	}
	if(email.value=="" || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)==false){
		email.style.borderColor = "red";
		err += "Email Id is invalid<br>";
	} else {
		email.style.borderColor = "green";
	}
	if(isNaN(age.value) || age.value<20 || age.value>27){
		age.style.borderColor = "red";
		err += "Age is invalid<br>";
	} else {
		age.style.borderColor = "green";
	}
	if(mob.value=="" || mob.value.length != 10 || /^[0-9]+$/.test(mob.value)==false){
		mob.style.borderColor = "red";
		err += "Mobile No. is invalid<br>";
	} else {
		mob.style.borderColor = "green";
	}
	if(err==""){
		resetData();
		alert("Your details have been saved. Thank You for registering.");
	} else {
		document.getElementById("error").innerHTML = err;
	}
}
