function createRecord(name, population, tresury){
    return{
        name,
        population,
        tresury,
        taxRate: 10,
        collectTaxes(){
            return console.log(this.tresury += this.population * this.taxRate);
        },
        applyGrowth(percent){
            return this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent){
            return this.tresury -= Math.floor(this.tresury * percent /100);
        },
    };
}

console.log(createRecord('Bulgaria',22,33).collectTaxes());