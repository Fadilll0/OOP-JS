const usedRekeningNumbers = new Set();

class rekeningBank {
    #nomorRekening;
    constructor(nomorRekening, saldo = 0) {
        this.#nomorRekening = nomorRekening;
        this.saldo = saldo;
    }

    get getNoRekening() {
        return this.#nomorRekening;
    }

    set setNoRekening(value) {
        if (usedRekeningNumbers.has(value)) {
            console.log(`Nomor Rekening ${value} sudah digunakan`);
        } else {
            this.#nomorRekening = value;
            usedRekeningNumbers.add(value);
        }
    }

    #setorUang(jumlah) {
        if (jumlah > 0) {
            this.saldo += jumlah;
            console.log(`Setoran sebesar Rp ${jumlah.toLocaleString()} berhasil pada No.Rekening ${this.nomorRekening}.`);
        } else {
            console.log("Jumlah setoran harus lebih dari 0");
        }
        this.#tampilkanSaldo();
    }

    #tarikUang(jumlah) {
        if (jumlah > 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil pada No.Rekening ${this.nomorRekening}`);
        } else {
            console.log("Jumlah penarikan tidak valid atau melebihi saldo");
        }
        this.#tampilkanSaldo();
    }

    #tampilkanSaldo() {
        console.log(`Saldo saat ini: Rp ${this.saldo.toLocaleString()} pada No.Rekening ${this.nomorRekening}`);
    }
}

// Contoh
const akun = new rekeningBank("123-456-789", 500000);

akun.nomorRekening = '987-654-321'; // (Privat)
console.info(akun); // (Privat)
console.log(akun.nomorRekening); // (Privat)
console.log(akun.getNoRekening); // (Privat)