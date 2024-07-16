// Function below returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Function below returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  //below there is a factory function
  const pAequorFactory = (idNumber, arrOfDNA) => {
    return {
      specimen: idNumber,
      dna: arrOfDNA,
      //method below for random mutation of DNA strand
      mutate() {
        let mutatedStrand = this.dna;
        let i = Math.floor(Math.random() * this.dna.length); //random choice of the base to be mutated
  
        while (true) {
          let mutatedBase = returnRandBase();
          if (mutatedBase != this.dna[i]) {
            mutatedStrand[i] = mutatedBase;
            break;
          }
        }
        return mutatedStrand;
      },
      //method below for comparing two DNA strands
      compareDNA(anotherPAequor) {
        let numberOfMatches = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === anotherPAequor.dna[i]) {
            numberOfMatches++;
          }
        }
        const percentageDnaInCommon = +(
          (numberOfMatches / this.dna.length) *
          100
        ).toFixed(2); //toFixed gives string, so must be converted to number by additional '+' at the beginning
  
        console.log(
          `Specimen ${this.specimen} and specimen ${anotherPAequor.specimen} have ${percentageDnaInCommon}% DNA in common`
        );
        return percentageDnaInCommon;
      },
      //method below for checking ability to survive
      willLikelySurvive() {
        let numberOfCG = 0;
        this.dna.forEach((element) => {
          if (element === "C" || element === "G") {
            numberOfCG++;
          }
        });
        if (numberOfCG / this.dna.length >= 0.6) {
          return true;
        } else {
          return false;
        }
      },
      //method below creates complementary DNA strand
      complementStrand() {
        let complementaryStrand = [];
        this.dna.forEach((element) => {
          switch (element) {
            case "A":
              complementaryStrand.push("T");
              break;
            case "T":
              complementaryStrand.push("A");
              break;
            case "C":
              complementaryStrand.push("G");
              break;
            case "G":
              complementaryStrand.push("C");
              break;
            default:
              console.log("Wrong original strand");
          }
        });
        console.log(
          `original strand ${this.dna} and complementary strand ${complementaryStrand}`
        );
        return complementaryStrand;
      },
    };
  };
  
  const creatorOfInstancesArray = (numberOfInstances) => {
    let instancesArray = [];
    for (let i = 0; i < numberOfInstances; i++) {
      while (true) {
        let trialStrand = pAequorFactory(i, mockUpStrand());
        if (trialStrand.willLikelySurvive()) {
          instancesArray.push(trialStrand);
          break;
        }
      }
    }
  
    return instancesArray;
  };
  
  let newDna = pAequorFactory(1, ["A", "T", "G", "T", "A", "T"]);
  let newDna2 = pAequorFactory(3, ["A", "G", "C", "T", "C", "G"]);
  console.log(newDna);
  console.log(newDna.mutate()); //testing mutate method
  console.log(newDna2);
  console.log(newDna2.mutate());//testing mutate method
  
  newDna.compareDNA(newDna2); //checking the method compareDNA
  
  console.log(newDna2.willLikelySurvive()); //checking method willLikelySurvive
  
  newDna.complementStrand(); //checking method complement strand
  
  //Below there is created an array with 30 instances of pAequor that can survive in their natural environment
  const instancesArrayForLaterStudies = creatorOfInstancesArray(30);
  console.log(instancesArrayForLaterStudies);
  
  //Below there is a function fo find the two most related instances of pAequor
  
  const twoMostRelatedInstances = (arrayOfInstances) => {
    let specimenA = 0;
    let specimenB = 0;
    let dnaMaxInCommon = 0;
    let dnaInCommon = 0;
    for (let i = 0; i < arrayOfInstances.length; i++) {
      for (let j = i + 1; j < arrayOfInstances.length; j++) {
        dnaInCommon = arrayOfInstances[i].compareDNA(arrayOfInstances[j]);
        if (dnaInCommon > dnaMaxInCommon) {
          dnaMaxInCommon = dnaInCommon;
          specimenA = arrayOfInstances[i].specimen;
          specimenB = arrayOfInstances[j].specimen;
        }
      }
    }
    console.log(
      ` Strand ${specimenA} and strand ${specimenB} are the most related instances. They have ${dnaMaxInCommon}% DNA in common`
    );
  };
  
  twoMostRelatedInstances(instancesArrayForLaterStudies);
  