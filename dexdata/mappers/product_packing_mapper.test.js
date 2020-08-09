const mapProductPacking = require('./product_packing_mapper');

test('all packing have data', () => {

    productRow = Array();
    productRow["Packing"] = "Polybag",
    productRow["CartonHeight"] = "35",
    productRow["CartonWidth"] = "33",
    productRow["CartonLength"] = "38",
    productRow["CartonQuantity"] = "200",
    productRow["CartonWeight"] = "10"


    expect(mapProductPacking(productRow)).toEqual({
        description: "Polybag",
        cartonHeight: 35,
        cartonWidth: 33,
        cartonLength: 38,
        cartonQuantity: 200,
        cartonWeight: 10,    
    });
});

test('null dimensions', () => {

    productRow = Array();
    productRow["Packing"] = "Polybag",
    productRow["CartonHeight"] = null,
    productRow["CartonWidth"] = null,
    productRow["CartonLength"] = null,
    productRow["CartonQuantity"] = null,
    productRow["CartonWeight"] = null


    expect(mapProductPacking(productRow)).toEqual({
        description: "Polybag",
        cartonHeight: null,
        cartonWidth: null,
        cartonLength: null,
        cartonQuantity: null,
        cartonWeight: null    
    });
});

test('dimensions containing string', () => {

    productRow = Array();
    productRow["Packing"] = "Polybag",
    productRow["CartonHeight"] = "blah",
    productRow["CartonWidth"] = null,
    productRow["CartonLength"] = null,
    productRow["CartonQuantity"] = null,
    productRow["CartonWeight"] = null


    expect(mapProductPacking(productRow)).toEqual({
        description: "Polybag",
        cartonHeight: NaN,
        cartonWidth: null,
        cartonLength: null,
        cartonQuantity: null,
        cartonWeight: null    
    });
});
