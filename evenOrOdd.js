function evenOrOdd (input) {
    let number = Number (input[0]);
    let result = number%2;
    console.log(result);
    if (result === 0){
        console.log ('even');
    }else {
        console.log('odd');
    }
}
evenOrOdd(['-1']);
