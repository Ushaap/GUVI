class Cat{
    name;
    

    constructor(cname){
       this.name =cname;
       var img=document.createElement('img');
       img.src ="cat.jpg";
       img.onclick =this.Catonclick();
       document.body.appendChild(img);



    }
    Catonclick(){

        return() =>{
            alert("This is " + this.name +" clicked");
        }
    }
}

class Dog{
    name;
    constructor(dname){
        this.name=dname;
        var img=document.createElement('img');
       img.src ="dog.jpg";
       img.onclick = this.Dogonclick();
       document.body.appendChild(img);
       
    }
    Dogonclick(){

        return() =>{
            alert("This is " + this.name +" clicked");
        }
    }

}

let myCat = () =>{
    let name = prompt("Cat name?");
    new Cat(name);

}

let myDog = () =>{

let name = prompt("Dog name?");
new Dog(name);
}