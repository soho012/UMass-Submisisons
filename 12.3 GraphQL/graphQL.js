
//List All Films: Retrieve the titles of all films available in SWAPI.
query MyQuery {
    allFilms{
        films{
          title
        }
      }
  }

// /Fetch a Specific Character: Get the name of a specific character using their unique ID.
query MyQuery {
    person(id: ""){
        name
    }
  }

//Explore Planets: Get the names of the first 5 planets in the Star Wars universe.
query MyQuery {
    allPlanets(first: 5){
        planets {
            name
        }
    }
  }

//Starships Information: Fetch names and models of 3 starships.
query MyQuery {
    allStarships(last: 3){
        starships{
            name
            model
        }
    }
  }

//Character and Their Starships**: For each of the first 5 characters, list the names of starships they've piloted.
query MyQuery {
    allPeople(first: 5) {
      people {
        name
        starshipConnection {
          starships {
            name
          }
        }
      }
    }
  }

//Species and Their Languages: Retrieve names and languages of 5 species.
query MyQuery {
    allSpecies(first: 5) {
      species {
        name
        language
      }
    }
  }

//Planets and Their Climates: Query for the names and climates of 5 planets.
query MyQuery {
    allPlanets(first: 5) {
      planets {
        name
        climates
      }
    }
  }

//Vehicles and Their Costs: Get names and cost in credits for 3 vehicles.
query MyQuery {
    allVehicles(first: 3) {
      vehicles {
        name
        costInCredits
      }
    }
  }

//Characters in a Specific Film: List all characters appearing in a given film by ID.
query MyQuery {
    film (id:"") {
        characterConnection {
            characters {
                name
            }
        }
    }
}

//Multi-Film Characters: Find characters that appear in more than one film.
query MyQuery {
    allPeople {
        people{
            name
            filmConnection{
                totalCount
            }
        }
    }
}

//Aggregate Film Statistics: Calculate the total number of characters across all films.
query MyQuery{
    allPeople {
        people {
          filmConnection {
            totalCount
          }
        }
      }
}

//Full Character Profiles: Compile a full profile for a given character, including their films, starships, and homeworld.
query MyQuery {
    person(id: "") {
        name
      filmConnection {
        films {
          title
        }
      }
      homeworld {
        name
      }
      starshipConnection {
        edges {
          node {
            name
            model
          }
        }
      }
    }
  }

//Link Characters with Their Planets: Query the first 5 characters, including the name and population of their homeworld.
  query MyQuery{
    allPeople(first: 5) {
        people{
            name
            homeworld {
                population
            }
        }
    }
  }

//Vehicles, Their Pilots, and Pilots' Species: For the first 3 vehicles, list their names, pilots, and the species of those pilots.
  query MyQuery {
    allVehicles(first:3) {
        vehicles{
            name
            pilotConnection {
                pilots{
                    name
                    species{
                        name
                    }
                }
            }
        }
    }
  }

//Films and Their Associated Entities: For the first 3 films, list all related characters, planets, and starships.
query MyQuery{
    allFilms (first: 3) {
        films{
            title
            characterConnection{
                characters{
                    name
                }
            }
            planetConnection{
                planets{
                    name
                }
            }
            starshipConnection {
                starships {
                  name
                }
            }
        }
    }
}
