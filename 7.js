class Product {
    #idProduk;
    constructor(idProduk, name, price) {
        this.#idProduk = idProduk;
        this.name = name;
        this.price = price;
    }

    get getIdProduk() {
        return this.#idProduk;
    }

    set setIdProduk(value) {
        this.#idProduk = value;
    }

    get nama() {
        return this.name;
    }

    set nama(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log("Nama barang harus berupa string yang tidak boleh kosong");
        } else {
            this.name = value;
        }
    }

    get harga() {
        return this.price;
    }

    set harga(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            console.log("Harga barang harus berupa angka/number");
        } else {
            this.price = value;
        }
    }

    hitungTotalHarga(kuantitas) {
        return this.price * kuantitas;
    }
}

class ElectronicProduct extends Product {
    constructor(idProduk, name, price, masaGaransi) {
        super(idProduk, name, price);
        this.masaGaransi = masaGaransi;
    }

    hitungTotalHarga(kuantitas) {
        const totalHarga = super.hitungTotalHarga(kuantitas);
        return `Total harga: Rp${totalHarga.toLocaleString()} dengan masa garansi ${this.masaGaransi} tahun`;
    }
}

// Contoh
const produk = new ElectronicProduct('E123', 'Laptop Asus vivobook pro 14 oled', 15000000, 2);

produk.idProduk = 'A-123'; // (privat)
console.info(produk); // (privat)
console.log(produk.idProduk); // (privat)
console.log(produk.getIdProduk); // (privat)