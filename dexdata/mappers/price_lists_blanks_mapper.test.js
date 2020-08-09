const mapPriceListBlanks = require('./price_lists_blanks_mapper');

test('overseas only', () => {

    productRow = Array();
    productRow["BlankPriceLocalDes1"] = null;
    productRow["QtyLocal1_1"] = null;
    productRow["QtyLocal1_2"] = null;
    productRow["QtyLocal1_3"] = null;
    productRow["QtyLocal1_4"] = null;
    productRow["QtyLocal1_5"] = null;
    productRow["QtyLocal1_6"] = null;
    productRow["QtyLocal1_7"] = null;
    productRow["QtyLocal1_8"] = null;
    productRow["QtyLocal1_9"] = null;
    productRow["BlankPriceLocalDes2"] = null;
    productRow["QtyLocal2_1"] = null;
    productRow["QtyLocal2_2"] = null;
    productRow["QtyLocal2_3"] = null;
    productRow["QtyLocal2_4"] = null;
    productRow["QtyLocal2_5"] = null;
    productRow["QtyLocal2_6"] = null;
    productRow["QtyLocal2_7"] = null;
    productRow["QtyLocal2_8"] = null;
    productRow["QtyLocal2_9"] = null;
    productRow["PriceLocal2_1"] = null;
    productRow["PriceLocal2_2"] = null;
    productRow["PriceLocal2_3"] = null;
    productRow["PriceLocal2_4"] = null;
    productRow["PriceLocal2_5"] = null;
    productRow["PriceLocal2_6"] = null;
    productRow["PriceLocal2_7"] = null;
    productRow["PriceLocal2_8"] = null;
    productRow["PriceLocal2_9"] = null;
    productRow["BlankPriceLocalDes3"] = null;
    productRow["QtyLocal3_1"] = null;
    productRow["QtyLocal3_2"] = null;
    productRow["QtyLocal3_3"] = null;
    productRow["QtyLocal3_4"] = null;
    productRow["QtyLocal3_5"] = null;
    productRow["QtyLocal3_6"] = null;
    productRow["QtyLocal3_7"] = null;
    productRow["QtyLocal3_8"] = null;
    productRow["QtyLocal3_9"] = null;
    productRow["PriceLocal3_1"] = null;
    productRow["PriceLocal3_2"] = null;
    productRow["PriceLocal3_3"] = null;
    productRow["PriceLocal3_4"] = null;
    productRow["PriceLocal3_5"] = null;
    productRow["PriceLocal3_6"] = null;
    productRow["PriceLocal3_7"] = null;
    productRow["PriceLocal3_8"] = null;
    productRow["PriceLocal3_9"] = null;
    productRow["BlankPriceOSDes1"] = "Indent Blank Stock";
    productRow["QtyOS1_1"] = "2000";
    productRow["QtyOS1_2"] = "5000";
    productRow["QtyOS1_3"] = "10000";
    productRow["QtyOS1_4"] = "25000";
    productRow["QtyOS1_5"] = "50000";
    productRow["QtyOS1_6"] = "100000";
    productRow["QtyOS1_7"] = null
    productRow["QtyOS1_8"] = null
    productRow["QtyOS1_9"] = null
    productRow["PriceOS1_1"] = "3.53"
    productRow["PriceOS1_2"] = "3.25"
    productRow["PriceOS1_3"] = "3.16"
    productRow["PriceOS1_4"] = "3.06"
    productRow["PriceOS1_5"] = "2.97"
    productRow["PriceOS1_6"] = "2.88"
    productRow["PriceOS1_7"] = null
    productRow["PriceOS1_8"] = null
    productRow["PriceOS1_9"] = null
    productRow["BlankPriceOSDes2"] = null
    productRow["QtyOS2_1"] = null
    productRow["QtyOS2_2"] = null
    productRow["QtyOS2_3"] = null
    productRow["QtyOS2_4"] = null
    productRow["QtyOS2_5"] = null
    productRow["QtyOS2_6"] = null
    productRow["QtyOS2_7"] = null
    productRow["QtyOS2_8"] = null
    productRow["QtyOS2_9"] = null
    productRow["PriceOS2_1"] = null
    productRow["PriceOS2_2"] = null
    productRow["PriceOS2_3"] = null
    productRow["PriceOS2_4"] = null
    productRow["PriceOS2_5"] = null
    productRow["PriceOS2_6"] = null
    productRow["PriceOS2_7"] = null
    productRow["PriceOS2_8"] = null
    productRow["PriceOS2_9"] = null
    productRow["BlankPriceOSDes3"] = null
    productRow["QtyOS3_1"] = null
    productRow["QtyOS3_2"] = null
    productRow["QtyOS3_3"] = null
    productRow["QtyOS3_4"] = null
    productRow["QtyOS3_5"] = null
    productRow["QtyOS3_6"] = null
    productRow["QtyOS3_7"] = null
    productRow["QtyOS3_8"] = null
    productRow["QtyOS3_9"] = null
    productRow["PriceOS3_1"] = null
    productRow["PriceOS3_2"] = null
    productRow["PriceOS3_3"] = null
    productRow["PriceOS3_4"] = null
    productRow["PriceOS3_5"] = null
    productRow["PriceOS3_6"] = null
    productRow["PriceOS3_7"] = null
    productRow["PriceOS3_8"] = null
    productRow["PriceOS3_9"] = null




    expect(mapPriceListBlanks(productRow)).toEqual(
        [
            {
                type: "offshore",
                description: "Indent Blank Stock",
                prices: [
                    { qty: 2000, unitPrice: 3.53 },
                    { qty: 5000, unitPrice: 3.25 },
                    { qty: 10000, unitPrice: 3.16 },
                    { qty: 25000, unitPrice: 3.06 },
                    { qty: 50000, unitPrice: 2.97 },
                    { qty: 100000, unitPrice: 2.88 }
                ]
            }
        ]
    );
});

test('local and overseas only', () => {

    productRow = Array();
    productRow["BlankPriceLocalDes1"] = "local indent";
    productRow["QtyLocal1_1"] = "5";
    productRow["QtyLocal1_2"] = "10";
    productRow["QtyLocal1_3"] = null;
    productRow["QtyLocal1_4"] = null;
    productRow["QtyLocal1_5"] = null;
    productRow["QtyLocal1_6"] = null;
    productRow["QtyLocal1_7"] = null;
    productRow["QtyLocal1_8"] = null;
    productRow["QtyLocal1_9"] = null;
    productRow["PriceLocal1_1"] = "15";
    productRow["PriceLocal1_2"] = "7";
    productRow["PriceLocal1_3"] = null;
    productRow["PriceLocal1_4"] = null;
    productRow["PriceLocal1_5"] = null;
    productRow["PriceLocal1_6"] = null;
    productRow["PriceLocal1_7"] = null;
    productRow["PriceLocal1_8"] = null;
    productRow["PriceLocal1_9"] = null;
    productRow["BlankPriceLocalDes2"] = null;
    productRow["QtyLocal2_1"] = null;
    productRow["QtyLocal2_2"] = null;
    productRow["QtyLocal2_3"] = null;
    productRow["QtyLocal2_4"] = null;
    productRow["QtyLocal2_5"] = null;
    productRow["QtyLocal2_6"] = null;
    productRow["QtyLocal2_7"] = null;
    productRow["QtyLocal2_8"] = null;
    productRow["QtyLocal2_9"] = null;
    productRow["PriceLocal2_1"] = null;
    productRow["PriceLocal2_2"] = null;
    productRow["PriceLocal2_3"] = null;
    productRow["PriceLocal2_4"] = null;
    productRow["PriceLocal2_5"] = null;
    productRow["PriceLocal2_6"] = null;
    productRow["PriceLocal2_7"] = null;
    productRow["PriceLocal2_8"] = null;
    productRow["PriceLocal2_9"] = null;
    productRow["BlankPriceLocalDes3"] = null;
    productRow["QtyLocal3_1"] = null;
    productRow["QtyLocal3_2"] = null;
    productRow["QtyLocal3_3"] = null;
    productRow["QtyLocal3_4"] = null;
    productRow["QtyLocal3_5"] = null;
    productRow["QtyLocal3_6"] = null;
    productRow["QtyLocal3_7"] = null;
    productRow["QtyLocal3_8"] = null;
    productRow["QtyLocal3_9"] = null;
    productRow["PriceLocal3_1"] = null;
    productRow["PriceLocal3_2"] = null;
    productRow["PriceLocal3_3"] = null;
    productRow["PriceLocal3_4"] = null;
    productRow["PriceLocal3_5"] = null;
    productRow["PriceLocal3_6"] = null;
    productRow["PriceLocal3_7"] = null;
    productRow["PriceLocal3_8"] = null;
    productRow["PriceLocal3_9"] = null;
    productRow["BlankPriceOSDes1"] = "Indent Blank Stock";
    productRow["QtyOS1_1"] = "2000";
    productRow["QtyOS1_2"] = "5000";
    productRow["QtyOS1_3"] = "10000";
    productRow["QtyOS1_4"] = "25000";
    productRow["QtyOS1_5"] = "50000";
    productRow["QtyOS1_6"] = "100000";
    productRow["QtyOS1_7"] = null
    productRow["QtyOS1_8"] = null
    productRow["QtyOS1_9"] = null
    productRow["PriceOS1_1"] = "3.53"
    productRow["PriceOS1_2"] = "3.25"
    productRow["PriceOS1_3"] = "3.16"
    productRow["PriceOS1_4"] = "3.06"
    productRow["PriceOS1_5"] = "2.97"
    productRow["PriceOS1_6"] = "2.88"
    productRow["PriceOS1_7"] = null
    productRow["PriceOS1_8"] = null
    productRow["PriceOS1_9"] = null
    productRow["BlankPriceOSDes2"] = null
    productRow["QtyOS2_1"] = null
    productRow["QtyOS2_2"] = null
    productRow["QtyOS2_3"] = null
    productRow["QtyOS2_4"] = null
    productRow["QtyOS2_5"] = null
    productRow["QtyOS2_6"] = null
    productRow["QtyOS2_7"] = null
    productRow["QtyOS2_8"] = null
    productRow["QtyOS2_9"] = null
    productRow["PriceOS2_1"] = null
    productRow["PriceOS2_2"] = null
    productRow["PriceOS2_3"] = null
    productRow["PriceOS2_4"] = null
    productRow["PriceOS2_5"] = null
    productRow["PriceOS2_6"] = null
    productRow["PriceOS2_7"] = null
    productRow["PriceOS2_8"] = null
    productRow["PriceOS2_9"] = null
    productRow["BlankPriceOSDes3"] = null
    productRow["QtyOS3_1"] = null
    productRow["QtyOS3_2"] = null
    productRow["QtyOS3_3"] = null
    productRow["QtyOS3_4"] = null
    productRow["QtyOS3_5"] = null
    productRow["QtyOS3_6"] = null
    productRow["QtyOS3_7"] = null
    productRow["QtyOS3_8"] = null
    productRow["QtyOS3_9"] = null
    productRow["PriceOS3_1"] = null
    productRow["PriceOS3_2"] = null
    productRow["PriceOS3_3"] = null
    productRow["PriceOS3_4"] = null
    productRow["PriceOS3_5"] = null
    productRow["PriceOS3_6"] = null
    productRow["PriceOS3_7"] = null
    productRow["PriceOS3_8"] = null
    productRow["PriceOS3_9"] = null




    expect(mapPriceListBlanks(productRow)).toEqual(
        [
            {
                type: "local",
                description: "local indent",
                prices: [
                    {qty: 5, unitPrice: 15 },
                    {qty: 10, unitPrice: 7 }
                ]
            },
            {
                type: "offshore",
                description: "Indent Blank Stock",
                prices: [
                    { qty: 2000, unitPrice: 3.53 },
                    { qty: 5000, unitPrice: 3.25 },
                    { qty: 10000, unitPrice: 3.16 },
                    { qty: 25000, unitPrice: 3.06 },
                    { qty: 50000, unitPrice: 2.97 },
                    { qty: 100000, unitPrice: 2.88 }
                ]
            }
        ]
    );
});

