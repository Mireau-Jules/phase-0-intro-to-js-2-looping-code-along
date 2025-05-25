function writeCards(name, event) {
    let messages =[];
    for (let i = 0; i<name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    
    return messages;
}

function countDown (number){
    for (let i=number; i>=0; i--){
        console.log(i);
    }
}