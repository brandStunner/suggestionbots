// console.log("The first console log")

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("imageContain").innerHTML =  `
//         <p>My favourite pet is</p> 
//         <img src="${data.message}" />`
//     })

      function apiCall(){
        fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
          document.getElementById("apicall").textContent = data.activity
        })
      }  
   


