export class Carro {
    public modelo: string
    public placa: string
    public ano: number
    private ligado: boolean = false

    constructor(modelo: string, placa: string, ano: number) {
        this.modelo = modelo
        this.placa = placa
        this.ano = ano
    }

    public getStatusCarro() {
        return this.ligado
    }

    public getInfoCarro() {
        console.log(`-- Carro: 
                    Modelo: ${this.modelo}
                    Placa: ${this.placa}
                    Ano: ${this.ano}
                    Status atual: ${this.getStatusCarro() ? 'ligado' : 'desligado'}`)

        return
    }

    // public setInfoCarro(modelo: string, placa: string, ano: number) {
    //     console.log(`Carro antigo: ${this.getInfoCarro()}`)

    //     this.modelo = modelo
    //     this.placa = placa
    //     this.ano = ano

    //     console.log(`Carro novo: ${this.getInfoCarro()}`)
    // }

    public ligarCarro() {
        if (this.getStatusCarro() == false) {
            this.ligado = !this.ligado
            console.log("Carro ligado com sucesso")
        } else {
            console.log("O carro já está ligado")
        }
    }

    public desligarCarro() {
        if (this.getStatusCarro() == true) {
            this.ligado = !this.ligado
            console.log("Carro desligado com sucesso")
        } else {
            console.log("O carro já está desligado")
        }
    }
}

// const carro1 = new Carro("Siena", "MQW1023", 2024)

// carro1.getInfoCarro()
// carro1.ligarCarro()
// carro1.getInfoCarro()
// console.log('\n')
// carro1.getInfoCarro()
// carro1.desligarCarro()
// carro1.getInfoCarro()

class ContaBancaria {
    public titular: string
    public numConta: string
    public saldo: number

    constructor(titular: string, numConta: string, saldo: number) {
        this.numConta = numConta
        this.titular = titular
        this.saldo = saldo
    }
    public getInfoConta() {
        console.log(`-- Conta Bancária: 
                    Número da Conta: ${this.numConta}
                    Titular: ${this.titular}
                    Saldo: ${this.saldo}`)
        return
    }

    public sacarDinheiro(valor: number) {
        console.log(`Saldo inicial: ${this.saldo}`)
        console.log(`Valor sacado: ${valor}`)
        this.saldo -= valor
        console.log(`Saldo final: ${this.saldo}`)
    }

    public depositarDinheiro(valor: number) {
        console.log(`Saldo inicial: ${this.saldo}`)
        console.log(`Valor depositado: ${valor}`)
        this.saldo += valor
        console.log(`Saldo final: ${this.saldo}`)
    }
}

const conta1 = new ContaBancaria("Renan", "12345", 100)

conta1.getInfoConta()
conta1.sacarDinheiro(50)
conta1.getInfoConta()
conta1.depositarDinheiro(200)
conta1.getInfoConta()






