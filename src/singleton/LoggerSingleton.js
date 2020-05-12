// Singleton: Garantir que uma instância de classe será usada apenas 1x.
// Vantagem: Guardar instância da classe e gerar cache.
class Logger {
	constructor(){
		this.config = {
			appName: 'Not configured'		
		}
	}

	setConfig(config){
		this.config = config;
	}

	log(message, ...params){
		console.log(this.config.appName, message, params);
	}
}

module.exports = new Logger();