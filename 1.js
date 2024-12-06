class person {
    #age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#age = age;
    }

    get first() {
        return this.firstName;
    }

    set first(value) {
        if (value.length == 0) {
            console.log('Nama depan tidak boleh kosong');
        } else {
            this.firstName = value;
        }
    }

    get last() {
        return this.lastName;
    }

    set last(value) {
        if (value.length == 0) {
            console.log("Nama belakang tidak boleh kosong");
        } else {
            this.lastName = value;
        }
    }

    get getAge() {
        return this.#age;
    }

    set setAge(value) {
        if (value < 0) {
            console.log("Umur tidak boleh kurang dari 0");
        } else {
            this.#age = value;
        }
    }

    showDetails() {
        console.log(`Hello my name is ${this.firstName}`);
    }
}

// Contoh
const objek1 = new person("Bagus", "Maulana", "16");
objek1.showDetails();

objek1.age = 25; // (Privat)
console.info(objek1); // (Privat)
console.log(objek1.age); // (Privat)
console.log(objek1.getAge); // (Privat)