//helpong function to find student index

function studentIndex(items,id){
    let index = -1;
    for(let i = 0;i < items.length;i++){
        if(items[i].id === id){
            index = i;
        }
        return index;
    }
    return index;
}

module.exports = studentIndex;
