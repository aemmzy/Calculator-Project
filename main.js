
const numberBtn=document.querySelectorAll(".data-num");
const oprandBtn=document.querySelectorAll(".operator");
const delBtn=document.querySelector(".del");
const equalBtn=document.querySelector(".equal");
const upperBtn=document.querySelector(".upper");
const lowerBtn=document.querySelector(".lower");


const lowerOperator=lowerBtn;
const upperOperator=upperBtn;


numberBtn.forEach(item => {
    item.addEventListener('click', calculate)
});

function calculate(){
    let buttont= this.innerText;
    if (buttont === "AC") {
        lowerBtn.innerText="0";
        upperBtn.innerText="";
    }
    else{
        upperBtn.innerText+=buttont;
    }
}

equalBtn.addEventListener("click", cally)

function cally(){
    let calk= this.innerText;
    if(calk ==="="){
        lowerBtn.innerText=eval(upperBtn.innerText);
    }
}

delBtn.addEventListener('click', dell)

function dell() {
    let delly= this.innerText;
    if( delly === "DEL"){
        upperBtn.innerText=upperBtn.innerText.substr(0,upperBtn.innerText.length-1);
        return;
    }
    
}

/*
class Calculator{
    constructor(upperBtn,lowerBtn){
       this.upperBtn=upperBtn
       this.lowerBtn=lowerBtn
    }
    clear(){
        this.upperOperator=""
        this.lowerOperator=""
        this.operation=undefined
    }

    delete(){

    }

    append(number){
        this.upperOperator=number
    }

    chooseOpration(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.lowerBtn.textContent=this.lowerOperator
    }
}
*/ 

//const mass= numberBtn;

//console.log(mass[0].parentNode.children);

//const calculator= new Calculator(upperBtn,lowerBtn)
