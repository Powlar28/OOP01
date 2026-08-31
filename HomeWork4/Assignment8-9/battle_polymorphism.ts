 import { changeTextColor } from "../ChangeTextColor";
 import { FireMonster, WaterMonster, GrassMonster, SD } from "./Assignment8";
 
 const sd = new SD;
 
 const fireMoster01 = new FireMonster("FireMonster", 100, 20, sd.Fire);
 const waterMoster01 = new WaterMonster("WaterMonster", 100, 20, sd.Water);
 const grassMoster01 = new GrassMonster("GrassMonster", 100, 20, sd.Grass);
 console.log("\n\n------------ Fire VS Water //------------");
 fireMoster01.element();
 
 var Damage = fireMoster01.attack(
     fireMoster01._damage,
     waterMoster01._monsterType,
     waterMoster01._hp
 );
 
 console.log(
     `waterMoster01 HP: ${changeTextColor(waterMoster01._hp, "green")}`
 );
 
 waterMoster01._hp = fireMoster01.attack(
     fireMoster01._damage,
     waterMoster01._monsterType,
     waterMoster01._hp
 );
 
 console.log(
     `waterMoster01 Taking ${changeTextColor(Damage, "red")} Damage HP Remain: ${changeTextColor(waterMoster01._hp, "yellow")}`
 );
 
 
 console.log("\n\n------------ Fire VS Grass //------------");
 fireMoster01.element();
 
 var Damage = grassMoster01._hp - fireMoster01.attack(
     fireMoster01._damage,
     grassMoster01._monsterType,
     grassMoster01._hp
 );
 
 console.log(
     `grassMoster01 HP: ${changeTextColor(grassMoster01._hp, "green")}`
 );
 
 grassMoster01._hp = fireMoster01.attack(
     fireMoster01._damage,
     grassMoster01._monsterType,
     grassMoster01._hp
 );
 
 console.log(
     `grassMoster01 Taking ${changeTextColor(Damage, "red")} Damage HP Remain: ${changeTextColor(grassMoster01._hp, "yellow")}`
 );
 
 
 //------------ Water Monster Test ------------
 
 console.log("\n\n------------ Water VS Fire //------------");
 waterMoster01._hp = 100;
 fireMoster01._hp = 100;
 grassMoster01._hp = 100;
 
 waterMoster01.element();
 
 var Damage = fireMoster01._hp - waterMoster01.attack(
     waterMoster01._damage,
     fireMoster01._monsterType,
     fireMoster01._hp
 );
 
 console.log(
     `fireMoster01 HP: ${changeTextColor(fireMoster01._hp, "green")}`
 );
 
 fireMoster01._hp = waterMoster01.attack(
     waterMoster01._damage,
     fireMoster01._monsterType,
     fireMoster01._hp
 );
 
 console.log(
     `fireMoster01 Taking ${changeTextColor(Damage, "red")} Damage HP Remain: ${changeTextColor(fireMoster01._hp, "yellow")}`
 );
 
 
 //------------ Water VS Grass ------------
 
 console.log("\n\n------------ Water VS Grass //------------");
 waterMoster01.element();
 
 var Damage = grassMoster01._hp - waterMoster01.attack(
     waterMoster01._damage,
     grassMoster01._monsterType,
     grassMoster01._hp
 );
 
 console.log(
     `grassMoster01 HP: ${changeTextColor(grassMoster01._hp, "green")}`
 );
 
 grassMoster01._hp = waterMoster01.attack(
     waterMoster01._damage,
     grassMoster01._monsterType,
     grassMoster01._hp
 );
 
 console.log(
     `grassMoster01 Taking ${changeTextColor(Damage, "red")} Damage HP Remain: ${changeTextColor(grassMoster01._hp, "yellow")}`
 );