const herodata = "/data/heroes.json";
const trnkdata = "/data/trinkets.json";
let dropdown1 = $('#hero1_select');
let dropdown2 = $('#hero2_select');
let dropdown3 = $('#hero3_select');
let dropdown4 = $('#hero4_select');
let hero_for_append = 'hero'


document.getElementById("hero1_select").name = hero_for_append + "-1"
document.getElementById("hero2_select").name = hero_for_append + "-2"
document.getElementById("hero3_select").name = hero_for_append + "-3"
document.getElementById("hero4_select").name = hero_for_append + "-4"

dropdown1.empty();
dropdown2.empty();
dropdown3.empty();
dropdown4.empty();

dropdown1.append('<option selected="true" disabled>Choose Hero</option>');
dropdown2.append('<option selected="true" disabled>Choose Hero</option>');
dropdown3.append('<option selected="true" disabled>Choose Hero</option>');
dropdown4.append('<option selected="true" disabled>Choose Hero</option>');

dropdown1.prop('selectedIndex', 0);
dropdown2.prop('selectedIndex', 0);
dropdown3.prop('selectedIndex', 0);
dropdown4.prop('selectedIndex', 0);


$.getJSON(herodata, function (data) {
	$.each(data.heroes, function (key, entry) {
		 if (key === "Vestal"){
			dropdown4.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
		 }
		  else if (key === "Plague Doctor"){
			dropdown3.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
		 }
		 else if (key === "Highwayman"){
			dropdown2.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
		 }
		  else if (key === "Crusader"){
			dropdown1.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
		 } else {
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
		 }

	})
	generateAbilitySelection("hero1_select", "abil1");
	generateAbilitySelection("hero2_select", "abil2");
	generateAbilitySelection("hero3_select", "abil3");
	generateAbilitySelection("hero4_select", "abil4");
	document.getElementById('abil1').style.display='block';
	document.getElementById('abil2').style.display='block';
	document.getElementById('abil3').style.display='block';
	document.getElementById('abil4').style.display='block';
	generateTrinketSelectionPVP("hero1_select", "trnk1");
	generateTrinketSelectionPVP("hero2_select", "trnk2");
	generateTrinketSelectionPVP("hero3_select", "trnk3");
	generateTrinketSelectionPVP("hero4_select", "trnk4");
});
document.getElementById('abil1').style.display='none';
document.getElementById('abil2').style.display='none';
document.getElementById('abil3').style.display='none';
document.getElementById('abil4').style.display='none';

generateAbilitySelection("hero1_select", "abil1");
generateAbilitySelection("hero2_select", "abil2");
generateAbilitySelection("hero3_select", "abil3");
generateAbilitySelection("hero4_select", "abil4");

function updateImage(select_id, image_id) {
	hero_name = document.getElementById(select_id).value;
	$.getJSON(herodata, function(data){
		new_img_src = data.heroes[hero_name].image;
		document.getElementById(image_id).src = new_img_src;
	});
}
function getAbilities(hero_name, callback) {
	$.getJSON(herodata, function(data) {
		callback(data.heroes[hero_name].abilities);
	});
}
function getPvpTrinkets(hero_name, callback) {
	$.getJSON(trnkdata, function(data) {
		callback(data.pvp["General"], data.pvp[hero_name]);
	});
}

function generateAbilitySelection(select_id, ability_pane_id) {
	hero_name = document.getElementById(select_id).value;
	let ability_pane = $('#'+ability_pane_id);
	ability_pane.empty();
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-1", "class": "ability_select", 'name': ability_pane_id + "-1"}));
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-2", "class": "ability_select", 'name': ability_pane_id + "-2"}));
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-3", "class": "ability_select", 'name': ability_pane_id + "-3"}));
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-4", "class": "ability_select", 'name': ability_pane_id + "-4"}));
	for( i = 1; i <= 4; i++) {
		let cur_select = ability_pane_id + "-" + i.toString();
		getAbilities(hero_name, function(data) {
			sel = $('#'+cur_select);
			num = 1;
			$.each(data, function(key) {
				let ability_num = parseInt(sel[0]["id"].slice(sel[0]["id"].length - 1));
						if(num == ability_num) {
								sel.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
							} else {
						sel.append($('<option></option>').attr({'value': key}).text(key));
					}
				num++;
			});
		});
	} 
}

function generateTrinketSelectionPVP(select_id, trinket_pane_id) {
	hero_name = document.getElementById(select_id).value;
	let trinket_pane = $('#'+trinket_pane_id);
	trinket_pane.empty();
	trinket_pane.append($('<select></select>').attr({'id': trinket_pane_id + "-1", "class": "trinket_select", 'name': trinket_pane_id + "-1" }));
	trinket_pane.append($('<select></select>').attr({'id': trinket_pane_id + "-2", "class": "trinket_select", 'name': trinket_pane_id + "-2" }));
	for(i = 1; i <= 2; i++) {
		let cur_select = trinket_pane_id + "-" + i.toString();
		getPvpTrinkets(hero_name, function(all_trinkets, class_trinkets) {
			sel = $('#'+cur_select);
			sel.append($('<option></option>').attr({'value': "Class Trinkets", 'disabled': 'disabled'}).text("Class Trinkets"));
			trinket_number = 1;
			$.each(class_trinkets, function(key) {
				console.log("Trinket: " + trinket_number + " i: " + i.toString());
				let cur_trinket_slot = parseInt(sel[0]["id"].slice(sel[0]["id"].length - 1));
				if(trinket_number == cur_trinket_slot) {
					sel.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
				} else {
					sel.append($('<option></option>').attr({'value': key}).text(key));
				}
				trinket_number++;
			});
			sel.append($('<option></option>').attr({'value': "All Hero Trinkets", 'disabled': 'disabled'}).text("All Hero Trinkets"));
			$.each(all_trinkets, function(key) {
				//console.log(sel[0]["id"].slice(sel[0]["id"].length - 1));
				sel.append($('<option></option>').attr({'value': key}).text(key));
			});
		});
	}
}

$('#hero1_select').change(function(){
	updateImage("hero1_select", "Hero1");
	generateAbilitySelection("hero1_select", "abil1");
	generateTrinketSelectionPVP("hero1_select", "trnk1");
	document.getElementById('abil1').style.display='block';
})
$('#hero2_select').change(function(){
	updateImage("hero2_select", "Hero2");
	generateAbilitySelection("hero2_select", "abil2");
	generateTrinketSelectionPVP("hero2_select", "trnk2");
	document.getElementById('abil2').style.display='block';

})
$('#hero3_select').change(function(){
	updateImage("hero3_select", "Hero3");
	generateAbilitySelection("hero3_select", "abil3");
	generateTrinketSelectionPVP("hero3_select", "trnk3");
	document.getElementById('abil3').style.display='block';

})
$('#hero4_select').change(function(){
	updateImage("hero4_select", "Hero4");
	generateAbilitySelection("hero4_select", "abil4");
	generateTrinketSelectionPVP("hero4_select", "trnk4");
	document.getElementById('abil4').style.display='block';

})