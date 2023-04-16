window.addEventListener('DOMContentLoaded',()=>{
    console.log(window.location)
    let search = window.location.search
    let displayForm = document.querySelector('.input-group')
    let displayTotal = document.querySelector('.total')

    console.log(search)
    let box = ''
    seeThis();
    function seeThis(){
        if(search == '?1'){
            box = `
            <label for="it">Price</label>
            <input type="checkbox" id="it" value="50">
        `
            
        }
        if(search === '?2'){
            box = `
            <label for="it">Price</label>
            <input type="checkbox" id="it" value="75">
        `
        }
        if(search === '?3'){
            box = `
            <label for="it">Price</label>
            <input type="checkbox" id="it" value="100">
        `
        }
    }
    displayForm.innerHTML=box
    displayTotal.innerHTML = document.querySelector('#it').value
    // document.querySelector('#display').innerHTML= box
   
})