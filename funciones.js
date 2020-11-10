function insertar(valor){
    document.querySelector('.pantalla').innerHTML+=valor;
}


function resultado(){
    p=document.querySelector('.pantalla');
    r=p.innerHTML; //lo que hay dentro del div
    res=eval(r); //metodo eval para evaluar la cadena que hay en r
    p.innerHTML=res;
}


function borrar(){
    document.querySelector('.pantalla').innerHTML=""; //para borrar lo que hay en pantalla
}


function borraruno(){
    //en p guardamos todo el objeto (div)
    p=document.querySelector('.pantalla');
    
    //en valores se guarda lo ue contiene el div "cadena" 5+3
    valores=p.innerHTML;

    //en t se guarda el tamaño de valores
    t=valores.lenght;
    
    borrar();

    for(i=0; i<t-1; i++){
        p.innerHTML+=valores[i];
    }
    
}