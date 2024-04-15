//La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.
const roundedNumber = Math.round(5.5)
console.log("Arrondi :", roundedNumber); // 6

/*Date guide */
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const years = now.getFullYear();
const months = now.getMonth(); //starts from 0 = "Janvier"
const day = now.getDate();
const dayOfWeek = now.getDay(); //starts from 0 = "Dimanche"
console.log("Date du jour :", now);
console.log("Heures :", hours);
console.log("Minutes :", minutes);   
console.log("Année :", years);
console.log("Mois :", months);
console.log("Jour :", day);
console.log("Jour de la semaine :", dayOfWeek);

/*Fuseau horaire */
//Le temps sera donnée en timestamp sur le fuseau GMT, la France est sur GMT + 1. 
//Mais avec le passage à l'heure d'été, la France est sur GMT + 2.
const time = now.getTime();
const timestamp = (time + (2 * 3600) * 1000); //Convert to GMT + 2 + miliseconds

/*Conversions */
//**timestamp to Date */
const convertTimestamp = new Date(timestamp);
console.log("Time :", convertTimestamp);
/**m/s to km/h */
const speed = 4 * 3.6; // 4 m/s = 14.4 km/h
console.log("Vitesse :", speed);
/**Kelvin to Celsius */
const temp = 295.36 -273.15 // 295.36 K = 22.21 °C
console.log("Température : ", temp);


