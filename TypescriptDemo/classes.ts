class Employee{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
}
let emp1:Employee=new Employee(101,"Rakesh");
// emp1.id=101; 
// emp1.name="Rakesh";
console.log(emp1);
