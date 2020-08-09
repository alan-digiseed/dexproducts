const mapProductParts = require('./product_parts_mapper');

test('single part single colours', () => {

    productRow=Array();
    productRow["ColoursPart1"]= "Matt Silver";
    productRow["ColoursPart2"]=null;
    productRow["ColoursPart3"]=null;

    expect(mapProductParts(productRow)).toEqual(
        [
            {
                partName: null,
                colours: ["Matt Silver"]
            }
        ]
    );
});

test('single part multiple colours', () => {

    productRow = Array();
    productRow["ColoursPart1"]= "Matt Silver | Black | White";
    productRow["ColoursPart2"]= null;
    productRow["ColoursPart3"]= null;


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
    productRow["ColoursPart1"] = "Transparent Case: Matt Silver | Black | White";
    productRow["ColoursPart2"] = "Pen: Black | Silver";
    productRow["ColoursPart3"] = "Bow: Red | Blue";

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

test('multiple parts - no part names', () => {

    productRow = Array();
    productRow["ColoursPart1"] =  "Matt Silver | Black | White";
    productRow["ColoursPart2"] =  "Pen: Black | Silver";
    productRow["ColoursPart3"] =  "Bow: Red | Blue";


    expect(() => { mapProductParts(productRow) }).toThrow();
});

