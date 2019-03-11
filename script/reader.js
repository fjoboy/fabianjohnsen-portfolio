fetch("./entry1.json")
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
   
});