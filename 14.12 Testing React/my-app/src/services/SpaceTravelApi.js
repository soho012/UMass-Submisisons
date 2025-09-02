// Wrapper around the provided SpaceTravelMockApi. Do NOT edit the mock.
import * as Mock from './SpaceTravelMockApi'

// Each method returns { isError, data }
export async function getPlanets() {
return await Mock.getPlanets()
}

export async function getSpacecrafts() {
return await Mock.getSpacecrafts()
}

export async function getSpacecraftById({ id }) {
return await Mock.getSpacecraftById({ id })
}

export async function createSpacecraft({ name, capacity, description, pictureUrl }) {
return await Mock.createSpacecraft({ name, capacity: Number(capacity), description, pictureUrl })
}

export async function destroySpacecraftById({ id }) {
return await Mock.destroySpacecraftById({ id })
}

export async function sendSpacecraftToPlanet({ spacecraftId, targetPlanetId }) {
return await Mock.sendSpacecraftToPlanet({ spacecraftId, targetPlanetId: Number(targetPlanetId) })
}