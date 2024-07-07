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

let calc=document.getElementById('calc');
calc.addEventListener('click',()=>{
    console.log('Button Clicked');
    let P=document.getElementById('Mortgage_Amt').value;
    let R=document.getElementById('Interest_Rate').value;
    let T=document.getElementById('Mortgage_Term').value;
    let interest_payment=document.getElementById('monthly_repayments');
    if (P=='' || R=='' || T==''){
        alert('Please enter all the values')
        
    }
    else{
        let interest=interest_only(P,R,T);
        let repayment=total_repayment(interest,T)
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
let Interest_check=document.getElementById('Interest_check');
let repay_check=document.getElementById('repay_check');
Repayment.oninput=()=>{
   
    if (Repayment.checked)
    {
        setRepayment(true)
        repay_check.style.backgroundColor='hsla(61, 70%, 52%,0.1)'
        repay_check.style.borderColor='hsl(61, 70%, 52%)'
        Interest_check.style.backgroundColor='hsl(0, 0%, 100%)'
        if (Interest.checked){
            Interest.click()
        }
       
    }
    else{
        setRepayment(false)
        repay_check.style.backgroundColor='hsl(0, 0%, 100%)'
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
        }
    }
    else{
        setInterest(false)
        Interest_check.style.backgroundColor='hsl(0, 0%, 100%)'

    }
    
}