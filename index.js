function total_repayment(interest,term,roi){
    return interest*(term*12);
}


function interest_only(principal,roi,term){
    roi=(roi/100)/12;
    term=term*12;
    let interest= (principal * ((roi * Math.pow(1 + roi, term)) / (Math.pow(1 + roi, term) - 1)));          
    return interest;
}

let clearall=document.getElementById('clearall');
let lower_empty=document.getElementById('lower_empty');
let lower_full=document.getElementById('lower_full');
let Total_amt=document.getElementById('Total_amt');


let Interest_check=document.getElementById('Interest_check');
let repay_check=document.getElementById('repay_check');


let mort_amt=document.getElementById('mort_amt');
let int_amt=document.getElementById('int_amt');
let term_amt=document.getElementById('term_amt');

let calc=document.getElementById('calc');
calc.addEventListener('click',()=>{
    console.log('Button Clicked');
    let P=document.getElementById('Mortgage_Amt');
    let R=document.getElementById('Interest_Rate');
    let T=document.getElementById('Mortgage_Term');
    let interest_payment=document.getElementById('monthly_repayments');

    
    if (P.value==''){
        
           mort_amt.classList.add('error')
           P.style.borderColor='hsl(4, 69%, 50%)'
           document.getElementById('sterling').style.color='hsl(0, 0%, 100%)'
           document.getElementById('sterling').style.backgroundColor='hsl(4, 69%, 50%)'
    }
    else if(T.value==''){
        term_amt.classList.add('error')
        T.style.borderColor='hsl(4, 69%, 50%)'
        document.getElementById('years').style.color='hsl(0, 0%, 100%)'
        document.getElementById('years').style.backgroundColor='hsl(4, 69%, 50%)'
    }
    else if(R.value==''){
        int_amt.classList.add('error')
        R.style.borderColor='hsl(4, 69%, 50%)'
        document.getElementById('percentage').style.color='hsl(0, 0%, 100%)'
        document.getElementById('percentage').style.backgroundColor='hsl(4, 69%, 50%)'

    }
    else{
        let interest=interest_only(P.value,R.value,T.value);
        let repayment=total_repayment(interest,T.value)
        interest=interest.toFixed(2)
        interest=parseFloat(interest).toLocaleString()
        interest_payment.innerHTML=interest
        
        let x=repayment.toFixed(2)
        x=parseFloat(x).toLocaleString()
        console.log(typeof(x))
        console.log(x)
        Total_amt.innerHTML=x
        lower_empty.classList.add('hidden')
        lower_full.classList.remove('hidden')
    }
})

clearall.addEventListener('click',()=>{
    document.getElementById('Mortgage_Amt').value='';
    document.getElementById('Interest_Rate').value='';
    document.getElementById('Mortgage_Term').value='';
 
}   )

let Repayment=document.getElementById('Repayment');
let Interest=document.getElementById('Interest');

const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value
    const setValue = newValue => value = newValue
    return [getValue, setValue];
  }


const[getRepayment, setRepayment] = useState(false);    
const [getInterest, setInterest] = useState(false);

Repayment.oninput=()=>{
   
    if (Repayment.checked)
    {
        setRepayment(true)
        repay_check.style.backgroundColor='hsla(61, 70%, 52%,0.1)'
        repay_check.style.borderColor='hsl(61, 70%, 52%)'
        Interest_check.style.backgroundColor='hsl(0, 0%, 100%)'
        if (Interest.checked){
            Interest.click()
            Interest_check.style.backgroundColor='hsl(0, 0%, 100%)'
        }
       
    }
    else{
        setRepayment(false)
        repay_check.style.backgroundColor='hsl(0, 0%, 100%)'
        repay_check.style.borderColor='hsl(203, 41%, 72%)'
    }
    
}
Interest.oninput=()=>{
    
    if (Interest.checked)
    {
        repay_check.style.backgroundColor='hsl(0, 0%, 100%)'
        Interest_check.style.backgroundColor='hsla(61, 70%, 52%,0.1)'
        Interest_check.style.borderColor='hsl(61, 70%, 52%)'
        if (Repayment.checked){
        Repayment.click()
        repay_check.style.backgroundColor='hsl(0, 0%, 100%)'
        }
    }
    else{
        setInterest(false)
        Interest_check.style.backgroundColor='hsl(0, 0%, 100%)'
        Interest_check.style.borderColor='hsl(203, 41%, 72%)'
    }
    
}



