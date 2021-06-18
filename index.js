
const getQuote =document.getElementById('quotes')
const newDiv=document.createElement('div')
const np = document.createElement('p')
const quoteBttn= document.getElementById('quoteB')
const nowCheck = document.querySelector('input[name=now]')
const oneWeek = document.querySelector("input[name=oneweek]")
const twoWeek = document.querySelector("input[name=twoweek]")
const info = document.getElementById('info')

// constants 
const checkBox1 = document.querySelector('input[name=Oyster]')
checkBox1.addEventListener('change',function(e){
if(this.checked){ 
  checkBox2.disabled='true'
  checkBox3.disabled='true'
  let oInfo=info.appendChild(newDiv).innerHTML='The oyster mushroom is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media.'

}
})
const checkBox2 = document.querySelector('input[name=LionsMane]')
checkBox2.addEventListener('change',function(e){
if(this.checked){
    checkBox1.disabled='true'
    checkBox3.disabled='true'
    let LmInfo=info.appendChild(newDiv).innerHTML='Lions mane is common in gourmet cooking. Young specimens are considered the best. The flavor is comparable to lobster.'
}
})
const checkBox3 = document.querySelector('input[name=Shitake]')
checkBox3.addEventListener('change',function(e){
if(this.checked){
    checkBox1.disabled='true'
    checkBox2.disabled='true'
   
    let sinfo =info.appendChild(newDiv).innerHTML='The shiitake is an edible mushroom native to East Asia, which is cultivated and consumed in many East Asian countries. It is considered a medicinal mushroom in some forms of traditional medicine.'
    }
})
// start checks
nowCheck.addEventListener('change',function(e){
  if(this.checked){document.getElementById('enddate').innerHTML=new Date(+new Date + 12096e5);
  }
})
oneWeek.addEventListener('change',function(e){
  if(this.checked){document.getElementById('enddate').innerHTML=new Date(+new Date + 1814400000);
}})
twoWeek.addEventListener('change',function(e){
  if(this.checked){document.getElementById('enddate').innerHTML=new Date(+new Date + 2419200000);
}})


//timer 
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
const date =document.getElementById("date").innerHTML = m + "/" + d + "/" + y;


quoteBttn.addEventListener('click',quoteFetch)
 

 function quoteFetch(){
    var url ='https://api.quotable.io/random'
     fetch(url)
    .then(response=> response.json())
    .then(function(data){
      var q= JSON.stringify(`${data.content} —${data.author}`)
      getQuote.appendChild(np).append(q)
      
    })
}
