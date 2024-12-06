class PersegiPanjang {
    #panjang;
    constructor(panjang, lebar) {
        this.#panjang = panjang;
        this.lebar = lebar;
    }

    get getPanjang() {
        return this.#panjang;
    }

    set setPanjang(value) {
        if (value <= 0) {
            console.log("Nilai panjang harus lebih tinggi dari angka 0");
        } else {
            this.#panjang = value;
        }
    }

    get getLebar() {
        return this.lebar;
    }

    set setLebar(value) {
        if (value <= 0) {
            console.log("Nilai lebar harus lebih tinggi dari angka 0");
        } else {
            this.lebar = value;
        }
    }

    #hitungLuas() {
        return this.#panjang * this.lebar;
    }

    #hitungKeliling() {
        return 2 * (this.#panjang + this.lebar);
    }
}

// Contoh
const persegiPanjang1 = new PersegiPanjang(4, 8);

persegiPanjang1.panjang = 10; // (Privat)
console.info(persegiPanjang1); // (Privat)
console.log(persegiPanjang1.panjang); // (Privat)
console.log(persegiPanjang1.getPanjang); // (Privat)