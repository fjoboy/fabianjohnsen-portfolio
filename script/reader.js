
fetch("https://raw.githubusercontent.com/fjoboy/fabianjohnsen-portfolio/master/content/entry1.json")
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
   console.log(error);
});