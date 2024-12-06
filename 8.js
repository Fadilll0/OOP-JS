const usedRekeningNumbers = new Set();
const usedCustomerNames = new Set();

class BankAccount {
  #nomorRekening;
  #namaNasabah;
  constructor(nomorRekening, namaNasabah, saldo = 0) {
    this.#nomorRekening = nomorRekening;
    this.#namaNasabah = namaNasabah;
    this.saldo = saldo;
  }

  get getNoRek() {
    return this.#nomorRekening;
  }

  set setNoRek(value) {
    if (usedRekeningNumbers.has(value)) {
      console.log(`No Rekening ${value} sudah digunakan`);
      } else {
        this.#nomorRekening = value;
        usedRekeningNumbers.add(value);
      }
    }

  get getNamaNsbh() {
    return this.#namaNasabah;
  }

  set setNamaNsbh(value) {
    if (usedCustomerNames.has(value)) {
      console.log(`Nama Nasabah '${value}' sudah digunakan`);
    } else {
      this.#namaNasabah = value;
      usedCustomerNames.add(value);
    }
  }
  
  setorUang(jumlah) {
    if (jumlah > 0) {
      this.saldo += jumlah;
      console.log(`Setoran sebesar: Rp ${jumlah.toLocaleString()} berhasil pada (No.Rekening ${this.#nomorRekening}, atas nama nasabah ${this.#namaNasabah})`);
    } else {
      console.log("Jumlah setoran harus lebih dari 0");
    }
  }

  tarikUang(jumlah) {
    if (this.saldo === 0) {
      console.log(`Saldo saat ini: Rp 0. Tidak dapat menarik uang pada (No.Rekening ${this.#nomorRekening}, atas nama nasabah ${this.#namaNasabah})`);
    } else if (jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil pada (No.Rekening ${this.#nomorRekening}, atas nama nasabah ${this.#namaNasabah})`);
    } else {
      console.log("Jumlah penarikan tidak valid atau melebihi saldo");
    }
  }

  transferUang(jumlah, rekeningTujuan) {
    if (this.saldo === 0) {
      console.log(`Saldo saat ini: Rp 0. Tidak dapat mentransfer uang pada (No.Rekening ${this.#nomorRekening}, atas nama nasabah ${this.#namaNasabah})`);
    } else if (jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      rekeningTujuan.saldo += jumlah;
      console.log(`Transfer sebesar: Rp ${jumlah.toLocaleString()} ke (No.Rekening ${rekeningTujuan.nomorRekening}, atas nama nasabah ${rekeningTujuan.namaNasabah}) berhasil pada (No.Rekening ${this.#nomorRekening}, atas nama nasabah ${this.#namaNasabah})`);
      this.lihatSaldo();
      rekeningTujuan.lihatSaldo();
    } else {
      console.log("Jumlah transfer tidak valid atau melebihi saldo");
    }
  }

  lihatSaldo() {
    console.log(`Saldo saat ini: (No.Rekening ${this.#nomorRekening}, Nasabah ${this.#namaNasabah}) Sebesar Rp ${this.saldo.toLocaleString()}`);
  }
}
  
// Contoh
const akun = new BankAccount("001", "Bagus", 500000);

akun.nomorRekening = '0083'; // (privat)
console.info(akun); // (privat)
console.log(akun.nomorRekening); // (privat)
console.log(akun.getNoRek); // (privat)

akun.namaNasabah = 'Adit'; // (privat)
console.info(akun); // (privat)
console.log(akun.namaNasabah); // (privat)
console.log(akun.getNamaNsbh); // (privat)