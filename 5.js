class Book {
    #author;
    constructor(title, author, year) {
        this.title = title;
        this.#author = author;
        this.year = year;
    }

    get getAthr() {
        return this.#author;
    }

    set setAthr(value) {
        this.#author = value;
    }

    get ttl() {
        return this.title;
    }

    set ttl(value) {
        if (value.length == 0) {
            console.log("Nama title buku tidak boleh kosong");
        } else {
            this.title = value;
        }
    }

    bookDetails() {
        console.log(`Title buku: ${this.title}`);
        console.log(`Nama sang pengarang: ${this.#author}`);
        console.log(`Tahun di terbitkan: ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, hargaBuku) {
        super(title, author, year);
        this.hargaBuku = hargaBuku;
    }

    get price() {
        return this.hargaBuku.toLocaleString();
    }

    set price(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            console.log("Harga buku harus berupa angka/number");
        } else {
            this.hargaBuku = value;
        }
    }
    
    bookDetails() {
        super.bookDetails();
        console.log(`Harga buku: Rp ${this.hargaBuku.toLocaleString()}`);
    }
}

// Contoh
const ebook = new Ebook("Bawang Merah dan Bawang Putih", "Yudhistira Ikranegara", 2017, 15000);

ebook.author = 'Soekarno Hatta'; // (privat)
console.info(ebook); // (privat)
console.log(ebook.author); // (privat)
console.log(ebook.getAthr); // (privat)