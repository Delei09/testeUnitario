
const Calculadora = require("../../src/js/calculadora")

describe("Teste calculadora" , ( ) => {
    

    describe("Teste adição" , () => {

        it("Soma numeros inteiros" , () => {
            const resposta = Calculadora.adicionar(1 , 3)
            expect(resposta).toEqual(4)
        })

        it("Soma numeros em formato string" , () => {
            const resposta = Calculadora.adicionar("1" , "3")
            expect(resposta).toEqual(4)
        })

        it("Soma de numeros decimais" , () => {
            const resposta = Calculadora.adicionar(1.53 , 1.321)
            expect(resposta).toEqual(2.85)
        })

        it("Se algum numero for indefinido" , () => {
            const num1Indefinido =  Calculadora.adicionar(undefined , 1)
            const num2Indefinido =  Calculadora.adicionar(1 , undefined)

            expect(num2Indefinido).toEqual(0)
            expect(num1Indefinido).toEqual(0)
        })
    })

    describe("Teste subtraçao" , () => {

        it("Subtração numeros inteiros" , () => {
            const resposta = Calculadora.subtrair(1 , 3)
            expect(resposta).toEqual(-2.00)
        })

        it("Subtração numeros em formato string" , () => {
            const resposta = Calculadora.subtrair("1" , "3")
            expect(resposta).toEqual(-2.00)
        })

        it("Subtração de numeros decimais" , () => {
            const resposta = Calculadora.subtrair(1.5 , 1.3)
            expect(resposta).toEqual(0.20)
        })

        it("Se algum numero for indefinido" , () => {
            const num1Indefinido =  Calculadora.subtrair(undefined , 1)
            const num2Indefinido =  Calculadora.subtrair(1 , undefined)

            expect(num2Indefinido).toEqual(0)
            expect(num1Indefinido).toEqual(0)
        })
    })

    describe("Teste divisao" , () => {

        
        it("divisao numeros inteiros" , () => {
            const resposta = Calculadora.dividir(4 , 2)
            expect(resposta).toEqual(2)
        })

        it("divisao numeros em formato string" , () => {
            const resposta = Calculadora.dividir("4" , "2")
            expect(resposta).toEqual(2)
        })

        it("divisao de numeros decimais" , () => {
            const resposta = Calculadora.dividir(1.55 , .5)
            expect(resposta).toEqual(3.1)
        })

        it("Se algum numero for indefinido" , () => {
            const num1Indefinido =  Calculadora.dividir(undefined , 1)
            const num2Indefinido =  Calculadora.dividir(1 , undefined)

            expect(num2Indefinido).toEqual(0)
            expect(num1Indefinido).toEqual(0)
        })
        

    })

    describe("Teste multiplicaçao" , () => {

        it("multiplicaçao numeros inteiros" , () => {
            const resposta = Calculadora.multiplicar(4 , 2)
            expect(resposta).toEqual(8)
        })

        it("multiplicaçao numeros em formato string" , () => {
            const resposta = Calculadora.multiplicar("4" , "2")
            expect(resposta).toEqual(8)
        })

        it("multiplicaçao de numeros decimais" , () => {
            const resposta = Calculadora.multiplicar(2.5 , .5)
            expect(resposta).toEqual(1.25)
        })

        it("Se algum numero for indefinido" , () => {
            const num1Indefinido =  Calculadora.multiplicar(undefined , 1)
            const num2Indefinido =  Calculadora.multiplicar(1 , undefined)

            expect(num2Indefinido).toEqual(0)
            expect(num1Indefinido).toEqual(0)
        })
    })

})