// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  //console.log(returnRandBase());
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  //console.log(mockUpStrand());
  //DNA Factory Function
  const pAequorFactory = (num,arr) => {
    //generate mock strand of DNA
    //arr = mockUpStrand();
    //create DNA Object instance
    return {
      specimenNum: num,
      dna: arr,
      //mutate Object instance
      mutate() {
        let newbaseindex = Math.floor(Math.random() * 14);
        //console.log(newbaseindex);
        let currentbase = arr[newbaseindex];
        //console.log(currentbase);
        let newbase = returnRandBase();
        while (currentbase === newbase) {
          let newbase = returnRandBase();
        }
        this.dna.splice(newbaseindex, 1, newbase);
      },
      //compare DNA
      compareDNA(otherOrg) {
        let countSim = 0;
        let countDif = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherOrg.dna[i]) {
            countSim = countSim + 1;
          } else if (this.dna[i] !== otherOrg.dna[i]) {
            countDif = countDif + 1;
          }
        }
        let percentSim = (countSim / (countSim + countDif)).toFixed(2) * 100;
        console.log(
          `specimen ${this.specimenNum} and specimen ${otherOrg.specimenNum} have ${percentSim}% DNA in common`
        );
      },
      willLikelySurvive() {
        let countCG = 0;
        let countoth = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === "C" || this.dna[i] === "G") {
            countCG = countCG + 1;
          } else {
            countoth = countoth + 1;
          }
        }
        let percentSim = (countCG / (countCG + countoth)).toFixed(2) * 100;
        if (percentSim >= 60) {
          return true;
        } else {return false;}
      },
    };
  };
  
  //const specimen1 = pAequorFactory(1);
  //const specimen2 = pAequorFactory(2);
  //console.log(specimen1.dna);
  //console.log(specimen2.dna);
  //specimen1.compareDNA(specimen2);
  //console.log(specimen1.willLikelySurvive());
  
  let thirtySpec=[];
  idcounter=1;
  
  while (thirtySpec.length<=30) {
    let newSpec=pAequorFactory(idcounter,mockUpStrand())
    if (newSpec.willLikelySurvive()) {thirtySpec.push(newSpec)}
  idcounter++
  }
  
  console.log(thirtySpec)
  console.log("Testing Git")
test again
