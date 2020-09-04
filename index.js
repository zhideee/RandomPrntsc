function pageload(){

    let n = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    let n2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    let n3 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    let n4 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
   
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const l = alphabet[Math.floor(Math.random() * alphabet.length)]
    const l2 = alphabet[Math.floor(Math.random() * alphabet.length)]

    //alert(r);

    //window.location.replace("https://prnt.sc/" + l + l2 + n + n2 + n3 + n4);
    window.open("https://prnt.sc/" + l + l2 + n + n2 + n3 + n4, "_blank");
}
