const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

//Tasks:
//- Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.

    const waterCreature = mythicalCreatures.find(function(creature){
        return creature.type === "Water"
    });

console.log(waterCreature.name);

//- Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.

    const griffin = mythicalCreatures.findIndex(function(grif){
        return grif.name === "Griffin"
    })

console.log(griffin)

//- Use the **`find`** method to locate the first creature last seen in "Enchanted Forest".

    const enchantedForest = mythicalCreatures.find(function(firstCreature){
        return firstCreature.lastSeen === "Enchanted Forest"
    });

    console.log(enchantedForest);