var Calculadora = {
	ADICAO: '+',
	SUBTRACAO: '-',
	DIVISAO: '/',
	MULTIPLICACAO: '*',

	adicionar: function(num1, num2){
		if( (!num1 || !num2) ){	
			return 0
		}
		const n1 = Number(num1)
		const n2 = Number(num2)
		const resposta = n1 + n2
		return Number(resposta.toFixed(2))
	},

	subtrair: function(num1, num2){
		if( (!num1 || !num2) ){	
			return 0
		}
		const n1 = Number(num1)
		const n2 = Number(num2)
		const resposta =  n1 - n2 		
		return Number(resposta.toFixed(2))
	},


	dividir: function(num1, num2){
		if( (!num1 || !num2) ){	
			return 0
		}
		const n1 = Number(num1)
		const n2 = Number(num2)
		const resposta =  n1 / n2 		
		return Number(resposta.toFixed(2))
	},

	multiplicar: function(num1,num2){
		if( (!num1 || !num2) ){	
			return 0
		}
		const n1 = Number(num1)
		const n2 = Number(num2)
		const resposta =  n1 * n2 		
		return Number(resposta.toFixed(2))
	},

};

//usado na função 'require' do NodeJS
if(typeof module !== 'undefined'
	&& typeof module.exports !== 'undefined'){
	module.exports = Calculadora;
}












/*describe("Suite de testes de adição", function(){
	var Calculadora = require('../../src/js/calculadora.js');

	it("Deve retornar 5 para 2 e 3", function(){
		expect(Calculadora.adicionar(2,3)).toEqual(5);
	});

	it("deve retornar 6 para 9 e -3 no formato texto", function(){
		expect(Calculadora.adicionar('9','-3')).toEqual(6);
	});

	it("deve retornar 4.5 para 1.5 e 3", function(){
		expect(Calculadora.adicionar(1.5,3)).toEqual(4.5);
	});

	it("deve retornar 0 quando valor 1 não for numérico", function(){
		expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
	});

	it("deve retornar 0 quando valor 2 não for numérico", function(){
		expect(Calculadora.adicionar(10, undefined)).toEqual(0);
	});
})
*/