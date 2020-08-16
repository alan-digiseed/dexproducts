const mapProductParts = require('./product_parts_mapper');

test('no part information', () => {

    productRow=Array();
    productRow["ItemPart1"]= null;
    productRow["ColoursPart1"]= null;
    productRow["ColoursPart2"]=null;
    productRow["ColoursPart3"]=null;
    productRow["ItemPart2"]= null;
    productRow["ItemPart3"]= null;

    expect(mapProductParts(productRow)).toEqual(
        [
        ]
    );
});


test('single part single colours - unnamed', () => {

    productRow=Array();
    productRow["ItemPart1"]= "Item";
    productRow["ColoursPart1"]= "Matt Silver";
    productRow["ColoursPart2"]=null;
    productRow["ColoursPart3"]=null;
    productRow["ItemPart2"]= null;
    productRow["ItemPart3"]= null;

    expect(mapProductParts(productRow)).toEqual(
        [
            {
                partName: null,
                colours: ["Matt Silver"]
            }
        ]
    );
});

test('single part single colours - named', () => {

    productRow=Array();
    productRow["ItemPart1"]= "Jar";
    productRow["ColoursPart1"]= "Matt Silver";
    productRow["ColoursPart2"]=null;
    productRow["ColoursPart3"]=null;
    productRow["ItemPart2"]= null;
    productRow["ItemPart3"]= null;

    expect(mapProductParts(productRow)).toEqual(
        [
            {
                partName: "Jar",
                colours: ["Matt Silver"]
            }
        ]
    );
});

test('single part with dimensions only', () => {

    productRow=Array();
    productRow["ItemPart1"]= "Jar";
    productRow["ColoursPart1"]= null;
    productRow["ItemHeight1"] = "50";    
    productRow["ItemLength1"] = "20";    
    productRow["ItemWidth1"] = "10";    
    productRow["ColoursPart2"]=null;
    productRow["ColoursPart3"]=null;
    productRow["ItemPart2"]= null;
    productRow["ItemPart3"]= null;

    expect(mapProductParts(productRow)).toEqual(
        [
            {
                partName: "Jar",
                colours: [],
                length: "20",
                height: "50",
                width: "10"
            }
        ]
    );
});



test('single part multiple colours', () => {

    productRow = Array();
    productRow["ItemPart1"]= "Item";
    productRow["ColoursPart1"]= "Matt Silver | Black | White";
    productRow["ColoursPart2"]= null;
    productRow["ColoursPart3"]= null;
    productRow["ItemPart2"]= null;
    productRow["ItemPart3"]= null;


    expect(mapProductParts(productRow)).toEqual(
        [
            {
                partName: null,
                colours: ["Matt Silver", "Black", "White"]
            }
        ]
    );
});

test('multiple parts', () => {

    productRow = Array();
    productRow["ItemPart1"]= "Transparent Case";
    productRow["ColoursPart1"] = "Matt Silver | Black | White";
    productRow["ItemPart2"]= "Pen";
    productRow["ColoursPart2"] = "Black | Silver";
    productRow["ItemPart3"]= "Bow";
    productRow["ColoursPart3"] = "Red | Blue";

    expect(mapProductParts(productRow)).toEqual(
        [
            {
                partName: "Transparent Case",
                colours: ["Matt Silver", "Black", "White"]
            },
            {
                partName: "Pen",
                colours: ["Black", "Silver"]
            },
            {
                partName: "Bow",
                colours: ["Red", "Blue"]
            }
        ]
    );
});

test('no part names but has colors', () => {

    productRow = Array();
    productRow["ItemPart1"]= null;
    productRow["ColoursPart1"] = "Matt Silver | Black | White";
    productRow["ItemPart2"]= "Pen";
    productRow["ColoursPart2"] = "Black | Silver";
    productRow["ItemPart3"]= "Bow";
    productRow["ColoursPart3"] = "Red | Blue";

    expect(() => { mapProductParts(productRow) }).toThrow();
});

test('no part names but has dimensions', () => {

    productRow = Array();
    productRow["ItemPart1"]= null;
    productRow["ColoursPart1"] = null;
    productRow["ItemHeight1"] = "50";    
    productRow["ItemLength1"] = null;    
    productRow["ItemWidth1"] = null;    

    expect(() => { mapProductParts(productRow) }).toThrow();
});

