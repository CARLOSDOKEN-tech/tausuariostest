export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public edad: number,
        public email: string,
        public fechaModificacion: Date | undefined
        

    ){}
}
