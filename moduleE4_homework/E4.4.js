function ElectricalAppliance(name) {
    this.name = name
    this.status = false
}

ElectricalAppliance.prototype.turnOn = function () {
    this.status = true
}

ElectricalAppliance.prototype.turnOff = function () {
    this.status = false
}

function DeskLamp(name, color) {
    this.name = name
    this.color = color
}

DeskLamp.prototype = new ElectricalAppliance()

DeskLamp.prototype.getInfo = function () {
    return console.log(`${this.color} ${this.name} сейчас ${this.status ? 'включена' : 'выключена'}`)
}

function Desktop(name) {
    this.name = name
}

Desktop.prototype = new ElectricalAppliance()

Desktop.prototype.getInfo = function () {
    return console.log(`${this.name} сейчас ${this.status ? 'включен' : 'выключен'}`)
}


const greenLampFunc = new DeskLamp('лампа', 'зеленая')
greenLampFunc.getInfo()
greenLampFunc.turnOn()
greenLampFunc.getInfo()

const homeDesktopFunc = new Desktop('Домашний компьютер')
homeDesktopFunc.turnOn()
homeDesktopFunc.getInfo()
homeDesktopFunc.turnOff()
homeDesktopFunc.getInfo()