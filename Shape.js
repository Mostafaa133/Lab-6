class shape{

    constructor(name,side,sidelength){
    this.name=name;
    this.side=side;
    this.sidelength=sidelength;
    
    
    }
    calcperimeter(){
       
       let perimeter=this.side*this.sidelength;
       console.log(perimeter);
    }
    
    }
    const squ=new shape("square",4,5);
    squ.calcperimeter();
    const triangle=new shape("triangle",3,3);
    triangle.calcperimeter();

    class square extends shape{
        constructor(sidelength){
            super("square",4,sidelength)
           
        }
        calcarea(){
          let area = this.sidelength*this.sidelength; 
         console.log(area);
        }
    
    }
    const sq= new square(5);
    sq.calcarea();
    sq.calcperimeter();

    class Triple{

        static  customName="Tripler";
        static description="I triple any number you provide";
        static calculate(n=1){
           
            return(n*3)
        }
    
    }
    
    class SquaredTriple extends Triple{
    static longDescription;
    static description="square the triple of any number you provide";
    static calculate(n){
     
        return super.calculate(n)*super.calculate(n);
    
    }}
    
    console.log(Triple.description); 
    
    console.log(Triple.calculate()); 
    
    console.log(Triple.calculate(6)); 
    
    console.log(SquaredTriple.calculate(3)); 
    
    console.log(SquaredTriple.description); 
    
    console.log(SquaredTriple.longDescription);  
    
    console.log(SquaredTriple.customName); 
    
    