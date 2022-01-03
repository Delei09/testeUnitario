# calculadora-js
Calculadora - Projeto de Testes Unitários

- Primeiramente, instale os pacotes NPM dentro do projeto. (npm install)

- Depois instale o jasmine, jasmine-karma, browserify e watchify 


- Configure o arquivo karma.conf.js para que a leitura dos arquivos de testes seja realizada corretamente. É necessário editar os parâmetros "frameworks", "files" e "preprocessors" com os seguintes valores:


    frameworks: ['jasmine','browserify'],

    // list of files / patterns to load in the browser
    files: [
      'spec/**/*Spec.js',
      'spec/helpers/**/SpecHelper.js'
    ],
    
    preprocessors: {
      'spec/**/*Spec.js': ['browserify']
    }


- Edite o parâmetro "scripts" do arquivo package.json para o comando "npm run test" execute os testes com sucesso. Para isso, insira os seguintes parâmetros dentro de scripts:     
    "test-jasmine": "jasmine",
    "test-dev": "karma start",
    "test": "karma start --single-run"


- Crie os testes unitários dentro do diretório spec/calculadora.
