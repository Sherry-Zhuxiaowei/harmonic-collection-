const text=document.querySelectorAll('.text');
    text.forEach((element)=>{
        element.innerHTML=element.textContent.replace(/\S/g,"<span>$&</span>")

    });
    
    let goBackTime=2;

    const letters = document.querySelectorAll("span");
    for(let i=0;i<letters.length;i++){
        letters[i].addEventListener('mouseover',function(){
            letters[i].classList.add('active')
            letters[i].classList.add('active'+i)
            
            setTimeout(()=>{
                let letter = document.querySelector('.active'+i)
                letter.classList.remove("active");
                letter.classList.add("show");
            },goBackTime*1000)

            
        })
    }