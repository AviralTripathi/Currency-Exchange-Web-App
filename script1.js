const select=document.querySelectorAll('.current');
old_amount=document.getElementById('old_amount');
new_amount=document.getElementById('new_amount');

const host = 'api.frankfurter.app';
 fetch(`https://${host}/currencies`)
  .then(resp => resp.json())
  .then((data) => {
const entries=Object.entries(data)
for(i=0;i<entries.length;i++)
{
	select[0].innerHTML +=`<option value="${entries[i][0]}">${entries[i][0]}</option></select>`
	select[1].innerHTML +=`<option value="${entries[i][0]}">${entries[i][0]}</option></select>`
}
})



function converter(){
	var input_currency_val=old_amount.value;
	if(select[0].value!=select[1].value){
		// alert("Right")
		const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
  .then( val=> val.json())
  .then((val) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
	new_amount.value=Object.values(val.rates)[0]
  })
		
	}
	else{
		alert("U are required to select two different currencies")
	}

}
const btn=document.getElementById('remark')
btn.addEventListener('click',converter);

//  console.log(entries)
    // alert(`10 GBP = ${data.rates.USD} USD`);
