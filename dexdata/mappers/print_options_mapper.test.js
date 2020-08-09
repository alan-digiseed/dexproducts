const mapPrintOptions = require('./print_options_mapper');

test('no print options', () => {

    productRow=Array();
    productRow["PrintType1"]=null
    productRow["PrintDes1"]=null
    productRow["PrintType2"]=null
    productRow["PrintDes2"]=null
    productRow["PrintType3"]=null
    productRow["PrintDes3"]=null
    productRow["PrintType4"]=null
    productRow["PrintDes4"]=null
    productRow["PrintType5"]=null
    productRow["PrintDes5"]=null
    productRow["PrintType6"]=null
    productRow["PrintDes6"]=null
    productRow["PrintType7"]=null
    productRow["PrintDes7"]=null
    productRow["PrintType8"]=null
    productRow["PrintDes8"]=null

    expect(mapPrintOptions(productRow)).toEqual(
        [
        ]
    );
});

test('single print option', () => {

    productRow = Array();
    productRow["PrintType1"]="Print Type 1"
    productRow["PrintDes1"]="Print Description 1"
    productRow["PrintType2"]=null
    productRow["PrintDes2"]=null
    productRow["PrintType3"]=null
    productRow["PrintDes3"]=null
    productRow["PrintType4"]=null
    productRow["PrintDes4"]=null
    productRow["PrintType5"]=null
    productRow["PrintDes5"]=null
    productRow["PrintType6"]=null
    productRow["PrintDes6"]=null
    productRow["PrintType7"]=null
    productRow["PrintDes7"]=null
    productRow["PrintType8"]=null
    productRow["PrintDes8"]=null


    expect(mapPrintOptions(productRow)).toEqual(
        [
            {
                printType: "Print Type 1",
                description: "Print Description 1"
            }
        ]
    );
});

test('multiple print option', () => {

    productRow = Array();
    productRow["PrintType1"]="Print Type 1"
    productRow["PrintDes1"]="Print Description 1"
    productRow["PrintType2"]="Print Type 2"
    productRow["PrintDes2"]="Print Description 2"
    productRow["PrintType3"]="Print Type 3"
    productRow["PrintDes3"]="Print Description 3"
    productRow["PrintType4"]="Print Type 4"
    productRow["PrintDes4"]="Print Description 4"
    productRow["PrintType5"]="Print Type 5"
    productRow["PrintDes5"]="Print Description 5"
    productRow["PrintType6"]="Print Type 6"
    productRow["PrintDes6"]="Print Description 6"
    productRow["PrintType7"]="Print Type 7"
    productRow["PrintDes7"]="Print Description 7"
    productRow["PrintType8"]="Print Type 8"
    productRow["PrintDes8"]="Print Description 8"


    expect(mapPrintOptions(productRow)).toEqual(
        [
            {
                printType: "Print Type 1",
                description: "Print Description 1"
            },
            {
                printType: "Print Type 2",
                description: "Print Description 2"
            },
            {
                printType: "Print Type 3",
                description: "Print Description 3"
            },
            {
                printType: "Print Type 4",
                description: "Print Description 4"
            },
            {
                printType: "Print Type 5",
                description: "Print Description 5"
            },
            {
                printType: "Print Type 6",
                description: "Print Description 6"
            },
            {
                printType: "Print Type 7",
                description: "Print Description 7"
            },
            {
                printType: "Print Type 8",
                description: "Print Description 8"
            }
        ]
    );
});

