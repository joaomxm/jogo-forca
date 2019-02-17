let biblioteca=["javascript","github","html","display-flex","while","css"];
let qtde= biblioteca.length-1;
let pos= Math.round(Math.random()*qtde);
let palavra=biblioteca[pos];
let tam= palavra.length;
let cxLetras=[];
let acertos;
let errosMax=7;
let erros=0;
let desenhos=[];
let acertou=false;
let jogando= false;
let jog;
let obj;
alert('As palavras do jogo estao relacionadas ao curso!');
function defineLetras(l){
    
    for(let i=0; i<20; i++){
        obj=document.getElementById("letra"+i).value="";
        obj=document.getElementById("letra"+i).style.display="none";

    }

    for(let i=0;i<l;i++){
    obj=document.getElementById("letra"+i).style.display="inline-block";

    }
}

function jogar(){
    jog.focus();
        if(jog.value==""){
            alert('Digite uma letra!');
        }
        else{
            if(jogando){
                let obj;
                let letraTmp;
                let letra;
                let pesq;
                letra=jog.value;
                jog.value="";
                acertou=false;
                pesq=palavra.match(letra);
                

                while(pesq!=null){
                    
                    letraTmp=palavra.search(letra);
                    obj=document.getElementById("letra"+letraTmp).value=letra;
                    palavra=palavra.replace(letra,'0');
                    acertos++;
                    pesq=palavra.match(letra);
                    acertou=true;

                }
                if(!acertou){
                    document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase()+ " ";
                    erros++;
                        if(erros<7){
                            desenhos[erros].style.display="block";
                            document.getElementById("cabeca2").style.display="none";
                        }
                        else{
                            
                            document.getElementById("cabeca2").style.display="block";
                            document.getElementById("dvmsg").innerHTML="PERDEU";
                            
                            jogando=false;
                        }
                        
                }
                if(acertos==tam){
                    
                    document.getElementById("dvmsg").innerHTML="GANHOU";
                    jogando=false;
                }
            }
        }

}

function inicia(){
    jogando=true;
    jog=document.getElementById("letraJ");
    jog.value="";
    jog.focus();
    acertos=0;
    erros=0;
    acertou=false;
    document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas";
    pos=Math.round(Math.random()*qtde);
    palavra=biblioteca[pos];
    tam=palavra.length;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML="";
    desenhos[1]=document.getElementById("cabeca");
    desenhos[2]=document.getElementById("corpo");
    desenhos[3]=document.getElementById("bracoE");
    desenhos[4]=document.getElementById("bracoD");
    desenhos[5]=document.getElementById("pernaE");
    desenhos[6]=document.getElementById("pernaD");
    document.getElementById("cabeca").src="cabeça.png";
    document.getElementById("cabeca2").style.display="none";
    for(let i=1; i<7; i++){

        desenhos[i].style.display="none";

    }

}

function dica(){

    alert(palavra);
    jog.focus();
}
window.addEventListener("load",inicia);