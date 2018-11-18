const toRna = (input) => {
	const pattern = /[^GCTA]/ ;
	return !pattern.test(input) ? rnatranscriptionReplacement(input): "Invalid input DNA.";
};

const rnatranscriptionReplacement= (input)=>{
	let finalstring= "";
	for(let i of input){
		finalstring+= replaceAlphabets(i);
	}
	return finalstring;
};
const replaceAlphabets = (input)=>{
		let rnaTranscriptionObj = {
			G: "C",
			C:"G",
			T:"A",
			A:"U"
		};
		let rnaAplabetsArr=Object.keys(rnaTranscriptionObj).filter((row)=>row=== input);
		let replaceItem = rnaTranscriptionObj[rnaAplabetsArr[0]];
		return replaceItem;
	};
module.exports.toRna=toRna;
