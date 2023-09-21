const SUKUN = "\u0652";
const FATHA = "\u064E";
const DAMMA = "\u064F";
const KASRA = "\u0650";
const SHADDA = "\u0651";
const ALIF = "\u0627";
const YA = "\u064A";
const WAW = "\u0648";
const MEEM = "\u0645";
const NUN = "\u0646";
const TA = "\u062A";
const HAMZA = "أَ";

const abwabRules = {
    "fataha": {
        "madin": FATHA,
        "mudari3": FATHA,
    },
    "daraba": {
        "madin": FATHA,
        "mudari3": KASRA,
    },
    "nasara": {
        "madin": FATHA,
        "mudari3": DAMMA,
    },
    "sami3a": {
        "madin": FATHA,
        "mudari3": KASRA,
    },
    "hasiba": {
        "madin": FATHA,
        "mudari3": KASRA,
    },
    "karuma": {
        "madin": FATHA,
        "mudari3": DAMMA,
    }
};

const extractRoot = (verb) => {
    return verb.split("");
}
export class ArabicVerb {
    constructor(root, bab) {
        this.root = extractRoot(root);
        this.bab = bab;
    }

    placeHarakat(form, tense, voice, number, person, gender) {
        let word = "";
        const HARAKA = abwabRules[this.bab][tense];

        if (form === "I") {
            if (tense === "madin") {
                if (voice === "ma3ruf") {
                    if (number === "wahid") {
                        if (person === "mutakallim") {
                            word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + TA + DAMMA;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + TA + FATHA;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + TA + KASRA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + FATHA;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + FATHA + TA + SUKUN;
                            }
                        }
                    }
                    else if (number === "thaniya") {
                        if (person === "hadir") {
                            word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + TA + DAMMA + MEEM + ALIF;
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + FATHA + ALIF;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + FATHA + TA + FATHA + ALIF;
                            }
                        }       
                    }
                    else if (number === "jama3") {
                        if (person === "mutakallim") {
                            word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + NUN + FATHA + ALIF;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + TA + DAMMA + MEEM + SUKUN;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + TA + DAMMA + NUN + SHADDA + FATHA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + DAMMA + WAW + ALIF;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + FATHA + this.root[1] + HARAKA + this.root[2] + SUKUN + NUN + FATHA;
                            }
                        }
                    }
                }
                else if (voice === "majhul") {
                    if (number === "wahid") {
                        if (person === "mutakallim") {
                            word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + TA + DAMMA;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + TA + FATHA;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + TA + KASRA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + FATHA;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + FATHA + TA + SUKUN;
                            }
                        }
                    }
                    else if (number === "thaniya") {
                        if (person === "hadir") {
                            word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + TA + DAMMA + MEEM + ALIF;
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + FATHA + ALIF;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + FATHA + TA + ALIF;
                            }
                        }       
                    }
                    else if (number === "jama3") {
                        if (person === "mutakallim") {
                            word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + NUN + FATHA + ALIF;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + TA + DAMMA + MEEM + SUKUN;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + TA + DAMMA + NUN + SHADDA + FATHA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + DAMMA + WAW + ALIF;
                            } else if (gender === "mu3annath") {
                                word = this.root[0] + DAMMA + this.root[1] + KASRA + this.root[2] + SUKUN + NUN + FATHA;
                            }
                        }
                    }
                }
            }

            else if (tense === "mudari3") {
                if (voice === "ma3ruf") {
                    if (number === "wahid") {
                        if (person === "mutakallim") {
                            word = HAMZA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA
                            } else if (gender === "mu3annath") {
                                word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + KASRA + YA + NUN + FATHA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = YA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA
                            } else if (gender === "mu3annath") {
                                word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA
                            }
                        }
                    }

                    else if (number === "thaniya") {
                        if (person === "hadir") {
                            word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + FATHA + ALIF + NUN + KASRA;
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = YA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + FATHA + ALIF + NUN + KASRA;
                            } else if (gender === "mu3annath") {
                                word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + FATHA + ALIF + NUN + KASRA;
                            }
                        }       
                    }

                    else if (number === "jama3") {
                        if (person === "mutakallim") {
                            word = NUN + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA + WAW + NUN + FATHA;
                            } else if (gender === "mu3annath") {
                                word = TA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + SUKUN + NUN + FATHA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = YA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + DAMMA + WAW + NUN + FATHA;
                            } else if (gender === "mu3annath") {
                                word = YA + FATHA + this.root[0] + SUKUN + this.root[1] + HARAKA + this.root[2] + SUKUN + NUN + FATHA;
                            }
                        }
                    }
                }
                
                else if (voice === "majhul") {
                    if (number === "wahid") {
                        if (person === "mutakallim") {
                            word = HAMZA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA
                            } else if (gender === "mu3annath") {
                                word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + KASRA + YA + NUN + FATHA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = YA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA
                            } else if (gender === "mu3annath") {
                                word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA
                            }
                        }
                    }

                    else if (number === "thaniya") {
                        if (person === "hadir") {
                            word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + FATHA + ALIF + NUN + KASRA;
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = YA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + FATHA + ALIF + NUN + KASRA;
                            } else if (gender === "mu3annath") {
                                word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + FATHA + ALIF + NUN + KASRA;
                            }
                        }       
                    }

                    else if (number === "jama3") {
                        if (person === "mutakallim") {
                            word = NUN + FATHA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA;
                        } else if (person === "hadir") {
                            if (gender === "mudhakkar") {
                                word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA + WAW + NUN + FATHA;
                            } else if (gender === "mu3annath") {
                                word = TA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + SUKUN + NUN + FATHA;
                            }
                        } else if (person === "ghaib") {
                            if (gender === "mudhakkar") {
                                word = YA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + DAMMA + WAW + NUN + FATHA;
                            } else if (gender === "mu3annath") {
                                word = YA + DAMMA + this.root[0] + SUKUN + this.root[1] + FATHA + this.root[2] + SUKUN + NUN + FATHA;
                            }
                        }
                    }
                }
            }
        }

        // ... (other cases for form)
        return word;
    }
}

// const testVerb = new ArabicVerb("فتح", "fataha");
const testVerb = new ArabicVerb("ضرب", "daraba");

console.log(testVerb.root);
console.log(testVerb.bab);

console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "wahid", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "wahid", "ghaib", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "wahid", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "wahid", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "wahid", "mutakallim", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "wahid", "mutakallim", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "thaniya", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "thaniya", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "jama3", "mutakallim", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "jama3", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "ma3ruf", "jama3", "ghaib", "mudhakkar"));

console.log(testVerb.placeHarakat("I", "madin", "majhul", "wahid", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "wahid", "ghaib", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "wahid", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "wahid", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "wahid", "mutakallim", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "wahid", "mutakallim", "mudhakkar"));

console.log(testVerb.placeHarakat("I", "madin", "majhul", "thaniya", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "thaniya", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "jama3", "mutakallim", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "jama3", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "madin", "majhul", "jama3", "ghaib", "mudhakkar"));

console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "ghaib", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "mutakallim", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "mutakallim", "mudhakkar"));

console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "ghaib", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "mutakallim", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "mutakallim", "mudhakkar"));

console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "thaniya", "hadir", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "thaniya", "ghaib", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "jama3", "mutakallim", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "jama3", "hadir", "mu3annath"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "jama3", "ghaib", "mudhakkar"));

console.log(testVerb.placeHarakat("I", "mudari3", "majhul", "wahid", "ghaib", "mudhakkar"));
console.log(testVerb.placeHarakat("I", "mudari3", "ma3ruf", "wahid", "ghaib", "mudhakkar"));