  
var client = mqtt.connect("ws://test.mosquitto.org:8080/mqtt")

function EventoConectar() {
  client.subscribe("TeamTesla/#", function(err) {
    if (!err) {
      client.publish("TeamTesla", "MQTT Activado");
    }
  })
}
document.getElementById("FOCO1 Encendido").onclick=mensaje1;
document.getElementById("FOCO1 Apagado").onclick=mensaje2;
document.getElementById("FOCO2 Encendido").onclick=mensaje3;
document.getElementById("FOCO2 Apagado").onclick=mensaje4;
document.getElementById("FOCO3 Encendido").onclick=mensaje5;
document.getElementById("FOCO3 Apagado").onclick=mensaje6;

function mensaje1(){
    client.publish("TeamTesla", "LED1H");
}

function mensaje2(){
    client.publish("TeamTesla", "LED1L");
}
function mensaje3(){
    client.publish("TeamTesla", "LED2H");
}

function mensaje4(){
    client.publish("TeamTesla", "LED2L");
}
function mensaje5(){
    client.publish("TeamTesla", "LED3H");
}

function mensaje6(){
    client.publish("TeamTesla", "LED3L");
}
client.on("connect", EventoConectar);
