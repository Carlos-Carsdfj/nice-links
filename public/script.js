const $form = document.querySelector('#shortlink-form')
const $data = document.querySelector('#input-link')
const $ancho = document.querySelector('#shortlink-ancho-form')



$form.addEventListener('submit',(ev)=>{
  
  ev.preventDefault()
  const data = {
    urlOriginal:$data.value
  }
  fetch('/create',{
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body:JSON.stringify(data) 
  } )
    .then(response => response.json())
    .then(json => {
      console.log(json)
      const { shortLink }  = json
      if(shortLink){
        $ancho.text = shortLink
        $ancho.href = 'http://'+shortLink
      }
    })
})


