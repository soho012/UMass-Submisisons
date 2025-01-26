const listItemLog = [];

export function addItem(item) {
    listItemLog.push(item);
    console.log(`${item} has been added.`)
}

export function removeItem(itemName){
    const index = listItemLog.findIndex(function(item) {
        return item === itemName;
    });
        if (index!==-1) {
            listItemLog.splice(index, 1);
            console.log(`${itemName} has been removed.`)
        }
};

export function listItem() {
    console.log("Current Inventory:", listItemLog);
}