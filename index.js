// 1. introduction(name)
function introduction(name) {
    return `Hi, my name is ${name}.`; 
}

// Define introductionWithLanguage function
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define introductionWithLanguageOptional function
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


