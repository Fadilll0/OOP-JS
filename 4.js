class Bank {
    #namaBank;
    constructor(namaBank) {
        this.#namaBank = namaBank;
        this.kantorCabang = new Set();
    }

    get getNamaBank() {
        return this.#namaBank;
    }

    set setNamaBank(value) {
        this.#namaBank = value;
    }

    tambahNamaBank() {
        console.log(`Nama Bank: ${this.#namaBank}`);
    }

    get getTambahKantorCabang() {
        return this.kantorCabang;
    }

    set setTambahKantorCabang(namaCabang) {
        if (this.kantorCabang.has(namaCabang)) {
            console.log(`Cabang ${namaCabang} sudah ada. Setiap bank yang mempunyai cabang hanya dapat memiliki 1 cabang pada setiap daerah`);
        } else {
            this.kantorCabang.add(namaCabang);
            console.log(`Cabang ${namaCabang} telah ditambahkan`);
        }   
    }

    get getHapusKantorCabang() {
        return this.kantorCabang;
    }

    set setHapusKantorCabang(namaCabang) {
        if (this.kantorCabang.has(namaCabang)) {
            this.kantorCabang.delete(namaCabang);
            console.log(`Cabang ${namaCabang} telah dihapus`);
        } else {
            console.log(`Cabang ${namaCabang} tidak ditemukan`);
        }
    }

    tampilkanSemuaKantorCabang() {
        if (this.kantorCabang.size > 0) {
            console.log(`Kantor Cabang ${this.#namaBank}:`);
            let index = 1;
            this.kantorCabang.forEach((cabang) => {
                console.log(`${index}. ${cabang}`);
                index++;
            });
        } else {
            console.log(`Tidak ada kantor cabang untuk ${this.#namaBank}`);
        }
    }
}

// Contoh
const bank = new Bank("Bank NKRI");

bank.namaBank = 'Bank BNI'; // (Privat)
console.info(bank); // (Privat)
console.log(bank.namaBank); // (Privat)
console.log(bank.getNamaBank); // (Privat)