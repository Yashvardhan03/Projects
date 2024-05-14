const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height"
    } else if (weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight"
    } else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }

    
        
    // if (bmi >= 18.6) {
    //     console.log("You are under-weight");
    // }else if (result.innerHTML <= 24.9) {
    //     console.log("You are in normal range");
    // }else if (result.innerHTML < 24.9){
    //     console.log("You are over-weight");
    // }
    

})