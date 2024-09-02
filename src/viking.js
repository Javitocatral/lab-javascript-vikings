// Soldier
class Soldier {
  constructor(health, strength) {
    ;(this.health = health), (this.strength = strength)
  }
  attack() {
    return this.strength
  }
  receiveDamage(daño) {
    this.health -= daño
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return 'A Saxon has died in combat'
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const viking = this.vikingArmy[randomVikingIndex]
    const saxon = this.saxonArmy[randomSaxonIndex]
    const result = saxon.receiveDamage(viking.strength)
    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health > 0) {
        this.saxonArmy[i].splice(index, 1)
      }
    }
  }
}
