// Soldier
class Soldier {
   constructor (health, strength){
      this.health=health;
      this.strength=strength;
   }
   attack() {
   return this.strength
  
   }
   receiveDamage(damage) {
      this.health -= damage;
  
    }
  
   }
   // console.log(soldier)
  
  // Viking
  class Viking extends Soldier {
      constructor (name, health, strength){
          super(health, strength)
          this.name=name;
         // this.health=health;
          // this.strength=strength
          
  
      }
      battleCry() {
      
      }
      attack(){
       return this.strength
      }
  receiveDamage(damage) {
       this.health = this.health - damage;
      if (this.health > 0) {
        return this.name + " has received " +  (damage) + " points of damage";
       } else {
          return this.name + " has died in act of combat";
  }
}
    battleCry() {
  return "Odin Owns You All!"
  }
  }

  // Saxon
  class Saxon  extends Soldier {
      
  receiveDamage(damage){
    this.health = this.health - damage;
   if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage"
   } else {
      return "A Saxon has died in combat"
   }
  }
}

class War  {
   vikingArmy = []
    saxonArmy= []

addViking(vik) {
   if(vik, Viking){
  this.vikingArmy.push(vik)

 }
}
addSaxon(sax) {
  if(sax, Saxon){
   this.saxonArmy.push(sax)
  }
}

vikingAttack() {
   let v = Math.floor(Math.random() * this.vikingArmy.length)
  let s = Math.floor(Math.random() * this.saxonArmy.length)
   let  sx = s.receiveDamage(v.attack())

  // if (s.health <= 0) {
    this.saxonArmy.remove(u);
    return sx;
  // }
   
  }
  saxonAttack() {
    u = Math.floor(Math.random() * this.vikingArmy.length)
     i = Math.floor(Math.random() * this.saxonArmy.length)
      vky = u.receiveDamage(i.attack())

    if (u.health <= 0){
   this.vikingArmy.remove(u);
      return vky
}
}

showStatus() {
if (this.saxonArmy.length == 0){
return "Vikings have won the war of the century!"
}
else if (this.vikingArmy.length == 0){
  return "Saxons have fought for their lives and survive another day..."
}else{
  return "Vikings and Saxons are still in the thick of battle."
}
}
};