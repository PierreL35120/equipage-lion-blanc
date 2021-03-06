const Lukas = document.getElementById("Lukas");
const Acht = document.getElementById("Acht");
const PX = document.getElementById("PX");
const Mor = document.getElementById("Mor");
const Kathleen = document.getElementById("Kathleen");
const Joseph = document.getElementById("Joseph");
const Veronica = document.getElementById("Veronica");
const infoPersonnage = document.getElementById("infoPerso");


function AchtInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/AchtShadow.png" alt="Lukas">
    <span class="name">Acht</span>
    <span class="titreOccup">Occupation : </span><span class="Occupation">Capitaine</span>
    <span class="titreAge">Âge :</span><span class="Age">20 ans</span>
    <span class="titreRace">Race : </span><span class="Race">Humaine</span>
    <span class="titreCodename">Nom de code : </span><span class="Codename">Lionne</span>
    <audio class="OST" controls><source src="./img/AchtTheme.mp3" type="audio/mpeg"></audio>`
}

function colorAcht(){
    Acht.classList.toggle('sepia');
}

function LukasInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/LukasShadow.png" alt="Lukas">
    <span class="name">Lukas T. Butcher</span>
    <span class="titreOccup">Occupation : </span><span class="Occupation">Medecin de bord</span>
    <span class="titreAge">Âge :</span><span class="Age">19 ans</span>
    <span class="titreRace">Race : </span><span class="Race">Humain</span>
    <span class="titreCodename">Nom de code : </span><span class="Codename">Serval</span>`
}    

function colorLukas(){
    Lukas.classList.toggle('sepia');
}

function MorInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/MorShadow.png" alt="Lukas">
    <span class="name">Mor d'Ambre</span>
    <span class="titreOccup">Occupation : </span><span class="Occupation">???</span>
    <span class="titreAge">Âge :</span><span class="Age">30 ans</span>
    <span class="titreRace">Race : </span><span class="Race">Humain</span>
    <span class="titreCodename">Nom de code : </span><span class="Codename">Ocelot</span>`
}    

function colorMor(){
    Mor.classList.toggle('sepia');
}

function PXInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/PXShadow.png" alt="Lukas">
    <span class="name">PX ROAM</span>
    <span class="titreOccup">Occupation : </span><span class="Occupation">Navigateur</span>
    <span class="titreAge">Âge :</span><span class="Age">2 ans</span>
    <span class="titreRace">Race : </span><span class="Race">Cyborg</span>
    <span class="titreCodename">Nom de code : </span><span class="Codename">Caracal</span>`
}    

function colorPX(){
    PX.classList.toggle('sepia');
}

function KathleenInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/KathleenSombre.png" alt="Kathleen">
    <span class="name">Kathleen</span>
    <span class="syrop">Camarade qui à participé à l'assaut de Syrop</span>`
}    

function colorKathleen(){
    Kathleen.classList.toggle('bw');
}

function JosephInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/JosephSombre.png" alt="Joseph">
    <span class="name">Joseph King</span>
    <span class="syrop">Camarade qui à participé à l'assaut de Syrop</span>`
}    

function colorJoseph(){
    Joseph.classList.toggle('bw');
}

function VeronicaInfo()
{
    infoPersonnage.innerHTML = `<div class="infobox"><img class="imgChara" src="./img/VeronicaSombre.png" alt="Veronica">
    <span class="name">Veronica Niechtman</span>
    <span class="syrop">Camarade qui à participé à l'assaut de Syrop</span>`
}    

function colorVeronica(){
    Veronica.classList.toggle('bw');
}

Acht.addEventListener('click', AchtInfo)
Acht.addEventListener('mouseover', colorAcht)
Acht.addEventListener('mouseleave', colorAcht)
Lukas.addEventListener('click', LukasInfo)
Lukas.addEventListener('mouseover', colorLukas)
Lukas.addEventListener('mouseleave', colorLukas)
Mor.addEventListener('click', MorInfo)
Mor.addEventListener('mouseleave', colorMor)
Mor.addEventListener('mouseover', colorMor)
PX.addEventListener('click', PXInfo)
PX.addEventListener('mouseover', colorPX)
PX.addEventListener('mouseleave', colorPX)
Kathleen.addEventListener('click', KathleenInfo)
Kathleen.addEventListener('mouseleave', colorKathleen)
Kathleen.addEventListener('mouseover', colorKathleen)
Joseph.addEventListener('mouseover', colorJoseph)
Joseph.addEventListener('mouseleave', colorJoseph)
Joseph.addEventListener('click', JosephInfo)
Veronica.addEventListener('mouseover', colorVeronica)
Veronica.addEventListener('mouseleave', colorVeronica)
Veronica.addEventListener('click', VeronicaInfo)
