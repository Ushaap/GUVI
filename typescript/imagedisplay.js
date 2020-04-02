var Cat = /** @class */ (function () {
    function Cat(cname) {
        this.name = cname;
        var img = document.createElement('img');
        img.src = "cat.jpg";
        img.onclick = this.Catonclick();
        document.body.appendChild(img);
    }
    Cat.prototype.Catonclick = function () {
        var _this = this;
        return function () {
            alert("This is " + _this.name + " clicked");
        };
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(dname) {
        this.name = dname;
        var img = document.createElement('img');
        img.src = "dog.jpg";
        img.onclick = this.Dogonclick();
        document.body.appendChild(img);
    }
    Dog.prototype.Dogonclick = function () {
        var _this = this;
        return function () {
            alert("This is " + _this.name + " clicked");
        };
    };
    return Dog;
}());
var myCat = function () {
    var name = prompt("Cat name?");
    new Cat(name);
};
var myDog = function () {
    var name = prompt("Dog name?");
    new Dog(name);
};
