class ElectricalAppliance {
    constructor(name) {
        this.name = name
        this.status = false
    }

    turnOn() {
        this.status = true
    }

    turnOff() {
        this.status = false
    }

}

class DeskLamp extends ElectricalAppliance {
    constructor(name, color) {
        super(name);
        this.color = color
    }

    getInfo() {
        return console.log(`${this.color} ${this.name} сейчас ${this.status ? 'включена' : 'выключена'}`)
    }
}

class Desktop extends ElectricalAppliance {
    constructor(name) {
        super(name);
    }

    getInfo() {
        return console.log(`${this.name} сейчас ${this.status ? 'включен' : 'выключен'}`)
    }
}

const greenLamp = new DeskLamp('лампа', 'зеленая')
greenLamp.getInfo()
greenLamp.turnOn()
greenLamp.getInfo()

const homeDesktop = new Desktop('Домашний компьютер')
homeDesktop.turnOn()
homeDesktop.getInfo()
homeDesktop.turnOff()
homeDesktop.getInfo()