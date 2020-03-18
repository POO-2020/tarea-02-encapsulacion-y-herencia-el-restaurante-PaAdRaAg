export default class Fecha {
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año){
        this._fecha = new Date(año, mes -1, dia);
        this._diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this._meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    }

    getAños(){
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear();
        return (`${añosTranscurridos} años.`);
    }

    getMeses() {
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear();
        return (`${añosTranscurridos * 12} meses.`); 
    }

    getSemanas(){
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear();
        return (`${añosTranscurridos * 52} semanas.`);
    }

    getDias(){
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear();
        return (`${añosTranscurridos * 365} días`);
    }

    getFecha(){
        return (`${this._fecha.getDate()}/${this._meses[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`);
    }

    getDiaFecha(){
        return(`${this._diaSemana[this._fecha.getDay()]}`);
    }
}