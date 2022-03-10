const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    for (let i = 1; i <= 25; i++) {
        console.log(i);
    }
    return undefined;
}
kata1();

function kata2() {
    for (let i = 25; i >= 1; i--) {
        console.log(i);
    }
    return undefined;
}
kata2();

function kata3() {
    for (let i = -1; i >= -25; i--) {
        console.log(i);
    }
    return undefined;
}
kata3();

function kata4() {
    for (let i = -25; i <= -1; i++) {
        console.log(i);
    }
    return undefined;
}
kata4();

function kata5() {
    for (let i = 25; i >= -25; i--) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
    return undefined;
}
kata5();

function kata6() {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
    return undefined;
}
kata6();

function kata7() {
    for (let i = 7; i <= 100; i++) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
    return undefined;
}
kata7();

function kata8() {
    for (let i = 100; i >= 3; i--) {
        if (i % 7 == 0 || i % 3 == 0) {
            console.log(i);
        }
    }
    return undefined;
}
kata8();

function kata9() {
    for (let i = 5; i <= 100; i++) {
        if (i % 5 == 0 && i % 2 != 0) {
            console.log(i);
        }
    }
    return undefined;
}
kata9();

function kata10() {
    for (let i = 0; i < sampleArray.length; i++) {
        console.log(sampleArray[i]);
    }
    return undefined;
}
kata10();

function kata11() {
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            console.log(sampleArray[i]);
        }
    }
    return undefined;
}
kata11();

function kata12() {
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 != 0) {
            console.log(sampleArray[i]);
        }
    }
    return undefined;
}
kata12();

function kata13() {
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            console.log(sampleArray[i]);
        }
    }
    return undefined;
}
kata13();

function kata14() {
    for (let i = 0; i < sampleArray.length; i++) {
        console.log((sampleArray[i] * sampleArray[i]));
    }
    return undefined;
}
kata14();

function kata15() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        total += i;
    }
    return total;
}
kata15();

function kata16() {
    let valor = 0;
    let aux = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        aux = sampleArray[i];
        valor += aux;
    }
    return valor;
}
kata16();

function kata17() {
    let menor = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < menor) {
            menor = sampleArray[i];
        }
    }
    return menor;
}
kata17();

function kata18() {
    let maior = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > maior) {
            maior = sampleArray[i];
        }
    }
    return maior;
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}