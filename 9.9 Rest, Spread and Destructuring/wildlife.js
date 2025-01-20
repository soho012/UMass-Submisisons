/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

    const animalSightings = function (...animalNames) {
        if (!animalNames.length){
            console.log("No animals have been sighted.");
        }

        animalNames.forEach((animal, index) => {
            console.log(`${index + 1}. ${animal}`);
        });
        }
        
        animalSightings("Tiger", "Lion", "Elephant", "Zebra", "Wolf");


/* Task 2: Merge Habitat Areas */
    const forestHabitats = ["Forest A", "Forest B"];
    const savannahHabitats = ["Savannah C", "Savannah D"];
    // TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

    const protectedAreas = [...forestHabitats, ...savannahHabitats];

    
/* Task 3: Update Conservation Status */
    const rhinoStatus = {
        population: 500,
        status: "Endangered"
    };
    // TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
    const rhinoStatus2 = {...rhinoStatus,population:750, status:"Less Endangered"};


/* Task 4: Catalog Genetic Diversity */
    const lionProfile = {
        name: "Leo",
        age: 5,
        species: "Lion"
    };
    // TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

    const lionProfileCopy = {...lionProfile, genetics:"African Lions are heterozygous and Asiatic Lions are homozygous."};

    /*
    * Observations:
    * TODO: Explain here.
        //lionProfileCopy duplicates all of the data from lionProfile and adds a new dataset ie 'genetics' whereas lionProfile does not get changed and includes the orginal set of data.

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemHealth2 = {...ecosystemHealth, foodSupply:{...ecosystemHealth.foodSupply},herbivores: "Rare"};

/*
 * Observations:
 * TODO: Explain here.
    //The copied object overrides the original dataset to replace it with the new data ie "Rare" for herbivores whereas the original is not impacted and still has the original data