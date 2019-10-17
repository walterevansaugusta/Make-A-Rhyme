// Only words with art are included in the array below.
const words = {
    1:["baby", "boy", "brother" , "child", "clown", "cook", "dancer", "family", "father", "girl", "grandma", "grandpa", "juggler", "king", "man", "mother", "nurse", "queen", "sister", "twin"],
    2:[],
    // implementation of art for category 2 is in progress
    // 2:["Ali", "Han", "Duc", "Ron", "Pau", "Kim", "Eli", "Wen", "John", "Khalid", "Luis", "Sunil", "Sam", "Han", "Dev", "Don", "Ted", "Paz", "Jim", "Lin", "Will", "Alex", "Adam", "Joe", "Luz", "Nia",
    // 	"Peg", "Uma", "Rose", "Lily", "Ann", "Pat", "Deb", "Beth", "Zoe", "Eva", "Mia", "Rio", "Joy", "Mary", "Iris", "Joan", "Jan", "Kate"],
    3:["centaur", "cyclops", "dragon", "elf", "fairy", "mermaid", "yeti"],
    4:["ankle", "arm", "chin", "elbow", "face", "feet", "foot", "hair", "hand", "head", "lip", "mouth", "nose", "thigh", "thumb", "toe"],
    5:["ape", "ant", "bat", "bear", "bee", "bug", "camel", "cat", "centipede", "collie", "cow", "cub", "dog", "dogs", "donkey", "elk", "fly", "fox", "goat", "kitten", "mole", "monkey", "moth", "mouse",
    	"paw", "pet", "pig", "rabbit", "ram", "sheep", "skunk", "snail", "tail", "tiger", "toad", "wasp", "whale", "wolf", "worms", "zebra"],
    6:["beaver", "clam", "crab", "fish", "frog", "gator", "oyster", "seal", "shark"],
    7:["bird", "canary", "hen", "jay", "ostrich", "owl", "parrot", "swan"],
    8:["bags", "bed", "blanket", "box", "brick", "broom", "bubble", "cast", "clarinet", "clock", "coin", "cushion", "fashion", "flute", "fork",
        "fridge", "fright", "fringe", "glass"],
    9:["key", "light", "mirror", "money", "music", "net", "oven", "pan", "pearl", "pencil", "plug", "poison", "pot", "prize", "quiz", "saucepan",
        "skis", "soap", "sofa", "spoon", "squares", "string", "toilet", "tuba", "wheel", "zipper"],
    10:["ball", "block", "boat", "car", "crayon", "doll", "jeep", "jet", "present", "puppet", "slide", "stilts", "swing", "toys", "truck", "unicycle", "wagon", "yoyo"],
    11:["axe", "drill", "hatchet", "hoe", "nail", "rake", "saw", "tools"],
    12:["boots", "clothes", "dress", "glove", "hoodie", "jacket", "purse", "ring", "scarf", "shirt", "suit", "tie", "veil", "wig"],
    13:["ambulance", "boat", "bug", "bus", "car", "cars", "dozer", "go-kart", "jeep", "moped", "plane", "taxi", "truck", "van"],
    14:["apple", "bread", "burger", "cake", "candy", "carrot", "cone", "cookies", "corn", "grapes", "hotdog", "lettuce", "milk", "nuts", "pie", "plum", "pretzel", "snack", "tea"],
    15:["bridge", "hill", "house", "park", "school", "volcano", "zoo"],
    16:["air", "fern", "flag", "grass", "ice", "leaf", "moon", "rain", "rainbow", "sky", "snow", "star", "statue", "straw", "tree", "wall", "wind"],
    17:["balance", "blew", "burn", "chew", "chop", "clean", "cry", "cut", "dig", "draw", "drive", "fall", "fish", "flew", "float", "fly", "glue", "hit", "hug", "juggle", "jump", "lick",
        "look", "love", "paint", "play", "read", "rescue", "scold", "see", "sing", "ski", "skip", "sleep", "slip", "smell", "smile", "spill", "stand", "stop", "swim", "throw", "twinkle", "wash", "whisper", "yawn"],
    18:["afraid", "cloudy", "dark", "eight", "five", "high", "hot", "loud", "naughty", "old", "quiet", "rude", "silly", "six", "sixteen", "sleepy", "slow", "smart", "stripes", "twelve"],
    19:["black", "blue", "brown", "gold", "green", "purple", "red", "silver", "white", "yellow"]
};
const categories = {
    1: "People",
    2: "Friends",
    3: "Pretend",
    4: "Body Parts",
    5: "Animals",
    6: "Water Animals",
    7: "Birds",
    8: "Things",
    9: "House Stuff",
    10: "Toys",
    11: "Tools",
    12: "Clothes",
    13: "Vehicles",
    14: "Food",
    15: "Places",
    16: "Outdoors",
    17: "Doing",
    18: "Describe",
    19: "Colors"
}

var wordObjs = createWordObjs();
var personObjs = createPersonObjs(); 

function wordObj(aWord, aCategory) {
	this.learned = false;
	this.word = aWord;
    this.category = aCategory;
}
    /* NOTES FOR FUTURE IMPLEMENTATION:
    1. Mapping child names to child pictures.
        -- Can be implemented by separating male and female pictures and adding a "gender"
        attribute to the word object (NEED: to make an issue for this)
        -- need a gray-scale function to show the associated picture in gray-scale if word is unlearned



    */

function createWordObjs() {
    var wordObjsTemp = {1: new Array, 2: new Array, 3: new Array, 4: new Array, 5: new Array, 6: new Array,
                    7: new Array, 8: new Array, 9: new Array, 10: new Array, 11: new Array, 12: new Array,
                    13: new Array, 14: new Array, 15: new Array, 16: new Array, 17: new Array, 18: new Array,
                    };
    var category;
    var wordTemp;
    var allWords;
    Papa.parse('../global/words.csv', {
        header: false,
        skipEmptyLines: true,
        download: true,
        skipEmptyLines: true,
        complete: function(results) {
            allWords = results.data;
            // goes through the # of word categories (i == category - 1)
            for (i = 0; i <= 17; i++) {
                category = i + 1;
                // makes a word object for each word in current category (j == word)
                for (j = 0; j < (allWords[i]).length; j++) {
                    wordTemp = new wordObj((allWords[i])[j], i);
                    if (j%5 == 0) {
                        wordTemp.learned = true;
                    }
                    wordObjsTemp[category].push(wordTemp);
                }
            }
            //console.log(wordObjsTemp);
        }
    });
    //console.log(wordObjsTemp);
    // format is wordObsTemp[category][index in array].attribute
    return wordObjsTemp;
}

function personObj(aName, aPerson) {
    this.name = aName;
    this.person = aPerson;
}

function createPersonObjs() {
    var personTemp;
    var personObjsTemp = new Array;
    var friends;
    Papa.parse('../global/friends.csv', {
        header: false,
        download: true,
        complete: function(results) {
            friends = results.data[0];
            for (i = 0; i < friends.length; i++) {
                personTemp = new personObj(friends[i], "none");
                personObjsTemp.push(personTemp);
            }
            console.log(personObjsTemp);
        }
    });
    return personObjsTemp;
}
