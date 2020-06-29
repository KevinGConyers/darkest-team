const herodata = "/data/heroes.json";

$.getJSON(herodata, function(data) {
    console.log(hero4);
    let pos4_hero_img_src = data.heroes[hero4].image;
    document.getElementById("hero4").src =pos4_hero_img_src;
});