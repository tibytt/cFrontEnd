enum AlertType{
    Success= 1,
    Error,
    Warning= 
};

function createAlert(message: string, type: AlertType):
void{
    switch(type){
        case AlertType.Success:
        alert(message);
        break;

        case AlertType.Warning:
        console.warm(message);
        break;

        default:
        console.error("type not found");
        break;
    }
}
createAlert("hola", warning);