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

addViking(viking) {
  this.vikingArmy.push(viking)


}
addSaxon(saxon) {
   this.saxonArmy.push(saxon)
  
}

vikingAttack() {
   let s = Math.floor(Math.random() * this.saxonArmy.length)
   let v = Math.floor(Math.random() * this.vikingArmy.length)
  
   const  vik = this.vikingArmy[v]
   const sax= this.saxonArmy[s]
   const damag = vik.strength
   const result = sax.receiveDamage(damag)

  if (sax.health <= 0) {
    this.saxonArmy.splice(sax, 1);
    
   }
   return result;

  }
  saxonAttack() {
   const s = Math.floor(Math.random() * this.saxonArmy.length)
    const v = Math.floor(Math.random() * this.vikingArmy.length)
    

     const sax = this.saxonArmy[s]
     const vik  = this.vikingArmy[v]
     const damag = sax.strength
     const vky = vik.receiveDamage(damag)

    if (vik.health <= 0) {  
   this.vikingArmy.splice(v, 1);
     
}
return vky
}

showStatus() {
if (this.saxonArmy.length == 0){
return "Vikings have won the war of the century!"
}
if (this.vikingArmy.length == 0){
  return "Saxons have fought for their lives and survive another day..."
}else {
  return "Vikings and Saxons are still in the thick of battle."
}
}
};

