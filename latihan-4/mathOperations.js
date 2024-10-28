function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}


module.exports.tambah = tambah;
module.exports.kurang = kurang;

// Ekspor Default
module.exports = kali;
