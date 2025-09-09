class personNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = [];
    }
}

class FamilyGraph {
    constructor() {
        this.nodes = new Set();
    }
    addPerson(node) {
        this.node.add(node)
    }
    addPeople(peopleList) {
        for (let node of peopleList) {
            this.addPerson(node);
        }
    }
    setFamily(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
}



const sanjay = new PersonNode('Sanjay Amatya');
const binu = new PersonNode('Binu Amatya');
const sohail = new PersonNode('Sohail Amatya');
const simrika = new PersonNode('Simrika Amatya');
const grampa = new PersonNode('Grampa Amatya');

const family = new FamilyGraph();
family.addPeople([sanjay, binu, sohail, simrika, grampa]);
family.setFamily(sanjay,binu);
family.setFamily(sanjay,sohail);
family.setFamily(sanjay,simrika);
family.setFamily(binu,sohail);
family.setFamily(binu,simrika);
family.setFamily(simrika,grampa);