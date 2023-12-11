function Own(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key)
        }
    }
}

const paper = {
    color: 'white'
}

const offsetPaper = Object.create(paper)

offsetPaper.pweight = 120
offsetPaper.pformat = 'SRA3'

const coatedPaper = Object.create(paper)
coatedPaper.pcoat = 'gloss'
coatedPaper.pformat = 'A2'

Own(offsetPaper)
Own(coatedPaper)