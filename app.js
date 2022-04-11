// loading start here
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
})
// loading end here



// Show & hide password start here
var pass = document.getElementById('password');
function mypass(){
    if(pass.type=='password'){
        pass.type = 'text';
    } else{
        pass.type = 'password';
    }
}
// Show & hide password end here






// countdown start here
window.onscroll = function(e){
        var count1 = 0;
        var project1 = setInterval(project,10);
        function project(){
        count1++
        var num1 = document.getElementById('num1').innerHTML=count1
        if(count1==200){
            clearInterval(project1);
        }
    }
        var count2 = 0;
        var project2 = setInterval(project2,10);
        function project2(){
        count2++
        var num2 = document.getElementById('num2').innerHTML=count2
        if(count1==24){
            clearInterval(project2);
        }
    }
        var count3 = 0;
        var project3 = setInterval(project3,10);
        function project3(){
        count3++
        var num3 = document.getElementById('num3').innerHTML=count3
        if(count1==7){
            clearInterval(project3);
        }
    }
        var count4 = 0;
        var project4 = setInterval(project4,10);
        function project4(){
        count4++
        var num4 = document.getElementById('num4').innerHTML=count4
        if(count1==50){
            clearInterval(project4);
        }
    }
        
}
// countdown end here



// Join Custom room start here
const title = document.querySelector('#title');
const time = document.querySelector('#time');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const vs = document.querySelector('#vs');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == '' && time.value == '' && author.value == '' && year.value == '' && vs.value) {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');
 
    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new Time
    const newTime = document.createElement('th');
    newTime.innerHTML = time.value;
    newRow.appendChild(newTime);

    // Creating new author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new password
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Creating new VS
    const newVs = document.createElement('th');
    newVs.innerHTML = vs.value;
    newRow.appendChild(newVs);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});

function removeItem(){
  var ul = document.getElementById('dynamicList');
  var candidate = document.getElementById('candidate')
  var item = document.getElementById('candidate.value')
  th.removeChild(item)
}
// Join Custom room end here