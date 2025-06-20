var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    return Employee;
}());
var emp1 = new Employee(101, "Rakesh");
// emp1.id=101; 
// emp1.name="Rakesh";
console.log(emp1);
