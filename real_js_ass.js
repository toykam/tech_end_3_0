alert("YOU'RE HIGHLY WELCOME TO OUR ONLIHE SHOPPING MALL.")
alert('Be rest asured that as you click on the "ORDER" botton below to puchace the items you input, one of our Bike Men will deliver it to your door step as soon as possible')
var a =prompt("We'll like to receive a greeting from you")
var b = a + " to you too"
alert(b)
function sumUp() {
    var box1 = document.getElementById ("purchase1");
    var box2 = document.getElementById ("purchase2");
    var box3 = document.getElementById ("purchase3");
    var box4 = document.getElementById ("purchase4");
    var box5 = document.getElementById ("purchase5");
    var cart=0;
    var Noodles = 3450;
    var Chocolates = 1700; var Candy = 300; var Milk = 1000; var Cornflakes= 500; var BottleDrinks = 2000; 
    var Pomade = 3120; var Soaps = 5600; var FootWears = 4500; var Fruits = 1450; var Snacks = 500; var CanFoods=2220;
    if(box1.value == "Noodles" ){
        cart = Noodles; 
    }else if (box1.value == "Candy") {
        
    }
    
    if (box2.value == "Candy") {
        Cart +=Candy
    }else if (box2.value == "Noodles") {
        Cart += Noodles
    }else if (box2.value == "Chocolate") {
        Cart += Chocolates
    }

    alert(cart)

    // var box1 = Noodles || Chocolates || Candy || Milk || Cornflakes || BottleDrinks || Pomade || Soaps || FootWears || Fruits || Snacks ||CanFoods;
    // var box2 = Noodles || Chocolates || Candy || Milk || Cornflakes || BottleDrinks || Pomade || Soaps || FootWears || Fruits || Snacks ||CanFoods;
    // var box3 = Noodles || Chocolates || Candy || Milk || Cornflakes || BottleDrinks || Pomade || Soaps || FootWears || Fruits || Snacks ||CanFoods;
    // var box4 = Noodles || Chocolates || Candy || Milk || Cornflakes || BottleDrinks || Pomade || Soaps || FootWears || Fruits || Snacks ||CanFoods;
    // var box5 = Noodles || Chocolates || Candy || Milk || Cornflakes || BottleDrinks || Pomade || Soaps || FootWears || Fruits || Snacks ||CanFoods;

    var result = box1 + box2 + box3 + box4 + box5;
     alert (box1);
}


function validateTextbox() {
    var box6 = document.getElementById ("name");
    var box7 = document.getElementById ("address")
    var box8 = document.getElementById ("phone");

   if(box1.value=="" || box2.value=="" || box3.value.length<11)
  
    {alert("One or all of the input spaces in red isn't correctly filled and must be. Just cross check all.");
    {box6.focus();     box1.style.border="3px solid red";}
    {box7.focus();     box2.style.border="3px solid red"}
    {box8.focus();     box3.style.border="3px solid red"}

    return false;
}

}