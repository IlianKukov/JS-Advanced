function createRecord(name, population, tresury){
    return{
        name,
        tresury,
        population,
        taxRate: 10,
        collectTaxes(){
            this.tresury += this.population * this.taxRcate;
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent){
            this.tresury -= Math.floor(this.tresury * percent /100);
        },
    };
}

console.log(createRecord(1,2,3).applyGrowth(3));