const mapProductPriceLists = require('./price_lists_mapper');

// test('overseas only', () => {

//     productRow = Array();
//     productRow["BlankPriceLocalDes1"] = "";
//     productRow["QtyLocal1_1"] = "";
//     productRow["QtyLocal1_2"] = "";
//     productRow["QtyLocal1_3"] = "";
//     productRow["QtyLocal1_4"] = "";
//     productRow["QtyLocal1_5"] = "";
//     productRow["QtyLocal1_6"] = "";
//     productRow["QtyLocal1_7"] = "";
//     productRow["QtyLocal1_8"] = "";
//     productRow["QtyLocal1_9"] = "";
//     productRow["BlankPriceLocalDes2"] = "";
//     productRow["QtyLocal2_1"] = "";
//     productRow["QtyLocal2_2"] = "";
//     productRow["QtyLocal2_3"] = "";
//     productRow["QtyLocal2_4"] = "";
//     productRow["QtyLocal2_5"] = "";
//     productRow["QtyLocal2_6"] = "";
//     productRow["QtyLocal2_7"] = "";
//     productRow["QtyLocal2_8"] = "";
//     productRow["QtyLocal2_9"] = "";
//     productRow["PriceLocal2_1"] = "";
//     productRow["PriceLocal2_2"] = "";
//     productRow["PriceLocal2_3"] = "";
//     productRow["PriceLocal2_4"] = "";
//     productRow["PriceLocal2_5"] = "";
//     productRow["PriceLocal2_6"] = "";
//     productRow["PriceLocal2_7"] = "";
//     productRow["PriceLocal2_8"] = "";
//     productRow["PriceLocal2_9"] = "";
//     productRow["BlankPriceLocalDes3"] = "";
//     productRow["QtyLocal3_1"] = "";
//     productRow["QtyLocal3_2"] = "";
//     productRow["QtyLocal3_3"] = "";
//     productRow["QtyLocal3_4"] = "";
//     productRow["QtyLocal3_5"] = "";
//     productRow["QtyLocal3_6"] = "";
//     productRow["QtyLocal3_7"] = "";
//     productRow["QtyLocal3_8"] = "";
//     productRow["QtyLocal3_9"] = "";
//     productRow["PriceLocal3_1"] = "";
//     productRow["PriceLocal3_2"] = "";
//     productRow["PriceLocal3_3"] = "";
//     productRow["PriceLocal3_4"] = "";
//     productRow["PriceLocal3_5"] = "";
//     productRow["PriceLocal3_6"] = "";
//     productRow["PriceLocal3_7"] = "";
//     productRow["PriceLocal3_8"] = "";
//     productRow["PriceLocal3_9"] = "";
//     productRow["Service1"] = "";
//     productRow["Service1Des1"] = "";
//     productRow["Service1Cost1"] = "";
//     productRow["Service1Setup1"] = "";
//     productRow["Service1MoQ1"] = "";
//     productRow["Service1MaxQty1"] = "";
//     productRow["Service1Desc2"] = "";
//     productRow["Service1Cost2"] = "";
//     productRow["Service1Setup2"] = "";
//     productRow["Service1MoQ2"] = "";
//     productRow["Service1MaxQty2"] = "";
//     productRow["Service1Desc3"] = "";
//     productRow["Service1Cost3"] = "";
//     productRow["Service1Setup3"] = "";
//     productRow["Service1MoQ3"] = "";
//     productRow["Service1MaxQty3"] = "";
//     productRow["Service1Desc4"] = "";
//     productRow["Service1Cost4"] = "";
//     productRow["Service1Setup4"] = "";
//     productRow["Service1MoQ4"] = "";
//     productRow["Service1MaxQty4"] = "";
//     productRow["Service1Desc5"] = "";
//     productRow["Service1Cost5"] = "";
//     productRow["Service1Setup5"] = "";
//     productRow["Service1MoQ5"] = "";
//     productRow["Service1MaxQty5"] = "";
//     productRow["Service2"] = "";
//     productRow["Service2Des1"] = "";
//     productRow["Service2Cost1"] = "";
//     productRow["Service2Setup1"] = "";
//     productRow["Service2MoQ1"] = "";
//     productRow["Service2MaxQty1"] = "";
//     productRow["Service2Desc2"] = "";
//     productRow["Service2Cost2"] = "";
//     productRow["Service2Setup2"] = "";
//     productRow["Service2MoQ2"] = "";
//     productRow["Service2MaxQty2"] = "";
//     productRow["Service2Desc3"] = "";
//     productRow["Service2Cost3"] = "";
//     productRow["Service2Setup3"] = "";
//     productRow["Service2MoQ3"] = "";
//     productRow["Service2MaxQty3"] = "";
//     productRow["Service2Desc4"] = "";
//     productRow["Service2Cost4"] = "";
//     productRow["Service2Setup4"] = "";
//     productRow["Service2MoQ4"] = "";
//     productRow["Service2MaxQty4"] = "";
//     productRow["Service2Desc5"] = "";
//     productRow["Service2Cost5"] = "";
//     productRow["Service2Setup5"] = "";
//     productRow["Service2MoQ5"] = "";
//     productRow["Service2MaxQty5"] = "";
//     productRow["Service3"] = "";
//     productRow["Service3Des1"] = "";
//     productRow["Service3Cost1"] = "";
//     productRow["Service3Setup1"] = "";
//     productRow["Service3MoQ1"] = "";
//     productRow["Service3MaxQty1"] = "";
//     productRow["Service3Desc2"] = "";
//     productRow["Service3Cost2"] = "";
//     productRow["Service3Setup2"] = "";
//     productRow["Service3MoQ2"] = "";
//     productRow["Service3MaxQty2"] = "";
//     productRow["Service3Desc3"] = "";
//     productRow["Service3Cost3"] = "";
//     productRow["Service3Setup3"] = "";
//     productRow["Service3MoQ3"] = "";
//     productRow["Service3MaxQty3"] = "";
//     productRow["Service3Desc4"] = "";
//     productRow["Service3Cost4"] = "";
//     productRow["Service3Setup4"] = "";
//     productRow["Service3MoQ4"] = "";
//     productRow["Service3MaxQty4"] = "";
//     productRow["Service3Desc5"] = "";
//     productRow["Service3Cost5"] = "";
//     productRow["Service3Setup5"] = "";
//     productRow["Service3MoQ5"] = "";
//     productRow["Service3MaxQty5"] = "";
//     productRow["Service4"] = "";
//     productRow["Service4Des1"] = "";
//     productRow["Service4Cost1"] = "";
//     productRow["Service4Setup1"] = "";
//     productRow["Service4MoQ1"] = "";
//     productRow["Service4MaxQty1"] = "";
//     productRow["Service4Desc2"] = "";
//     productRow["Service4Cost2"] = "";
//     productRow["Service4Setup2"] = "";
//     productRow["Service4MoQ2"] = "";
//     productRow["Service4MaxQty2"] = "";
//     productRow["Service4Desc3"] = "";
//     productRow["Service4Cost3"] = "";
//     productRow["Service4Setup3"] = "";
//     productRow["Service4MoQ3"] = "";
//     productRow["Service4MaxQty3"] = "";
//     productRow["Service4Desc4"] = "";
//     productRow["Service4Cost4"] = "";
//     productRow["Service4Setup4"] = "";
//     productRow["Service4MoQ4"] = "";
//     productRow["Service4MaxQty4"] = "";
//     productRow["Service4Desc5"] = "";
//     productRow["Service4Cost5"] = "";
//     productRow["Service4Setup5"] = "";
//     productRow["Service4MoQ5"] = "";
//     productRow["Service4MaxQty5"] = "";
//     productRow["Service5"] = "";
//     productRow["Service5Des1"] = "";
//     productRow["Service5Cost1"] = "";
//     productRow["Service5Setup1"] = "";
//     productRow["Service5MoQ1"] = "";
//     productRow["Service5MaxQty1"] = "";
//     productRow["Service5Desc2"] = "";
//     productRow["Service5Cost2"] = "";
//     productRow["Service5Setup2"] = "";
//     productRow["Service5MoQ2"] = "";
//     productRow["Service5MaxQty2"] = "";
//     productRow["Service5Desc3"] = "";
//     productRow["Service5Cost3"] = "";
//     productRow["Service5Setup3"] = "";
//     productRow["Service5MoQ3"] = "";
//     productRow["Service5MaxQty3"] = "";
//     productRow["Service5Desc4"] = "";
//     productRow["Service5Cost4"] = "";
//     productRow["Service5Setup4"] = "";
//     productRow["Service5MoQ4"] = "";
//     productRow["Service5MaxQty4"] = "";
//     productRow["Service5Desc5"] = "";
//     productRow["Service5Cost5"] = "";
//     productRow["Service5Setup5"] = "";
//     productRow["Service5MoQ5"] = "";
//     productRow["Service5MaxQty5"] = "";
//     productRow["Service6"] = "";
//     productRow["Service6Des1"] = "";
//     productRow["Service6Cost1"] = "";
//     productRow["Service6Setup1"] = "";
//     productRow["Service6MoQ1"] = "";
//     productRow["Service6MaxQty1"] = "";
//     productRow["Service6Desc2"] = "";
//     productRow["Service6Cost2"] = "";
//     productRow["Service6Setup2"] = "";
//     productRow["Service6MoQ2"] = "";
//     productRow["Service6MaxQty2"] = "";
//     productRow["Service6Desc3"] = "";
//     productRow["Service6Cost3"] = "";
//     productRow["Service6Setup3"] = "";
//     productRow["Service6MoQ3"] = "";
//     productRow["Service6MaxQty3"] = "";
//     productRow["Service6Desc4"] = "";
//     productRow["Service6Cost4"] = "";
//     productRow["Service6Setup4"] = "";
//     productRow["Service6MoQ4"] = "";
//     productRow["Service6MaxQty4"] = "";
//     productRow["Service6Desc5"] = "";
//     productRow["Service6Cost5"] = "";
//     productRow["Service6Setup5"] = "";
//     productRow["Service6MoQ5"] = "";
//     productRow["Service6MaxQty5"] = "";
//     productRow["Service7"] = "";
//     productRow["Service7Des1"] = "";
//     productRow["Service7Cost1"] = "";
//     productRow["Service7Setup1"] = "";
//     productRow["Service7MoQ1"] = "";
//     productRow["Service7MaxQty1"] = "";
//     productRow["Service7Desc2"] = "";
//     productRow["Service7Cost2"] = "";
//     productRow["Service7Setup2"] = "";
//     productRow["Service7MoQ2"] = "";
//     productRow["Service7MaxQty2"] = "";
//     productRow["Service7Desc3"] = "";
//     productRow["Service7Cost3"] = "";
//     productRow["Service7Setup3"] = "";
//     productRow["Service7MoQ3"] = "";
//     productRow["Service7MaxQty3"] = "";
//     productRow["Service7Desc4"] = "";
//     productRow["Service7Cost4"] = "";
//     productRow["Service7Setup4"] = "";
//     productRow["Service7MoQ4"] = "";
//     productRow["Service7MaxQty4"] = "";
//     productRow["Service7Desc5"] = "";
//     productRow["Service7Cost5"] = "";
//     productRow["Service7Setup5"] = "";
//     productRow["Service7MoQ5"] = "";
//     productRow["Service7MaxQty5"] = "";
//     productRow["BlankPriceOSDes1"] = "Indent Blank Stock";
//     productRow["QtyOS1_1"] = "2000";
//     productRow["QtyOS1_2"] = "5000";
//     productRow["QtyOS1_3"] = "10000";
//     productRow["QtyOS1_4"] = "25000";
//     productRow["QtyOS1_5"] = "50000";
//     productRow["QtyOS1_6"] = "100000";
//     productRow["QtyOS1_7"] = ""
//     productRow["QtyOS1_8"] = ""
//     productRow["QtyOS1_9"] = ""
//     productRow["PriceOS1_1"] = "3.53"
//     productRow["PriceOS1_2"] = "3.25"
//     productRow["PriceOS1_3"] = "3.16"
//     productRow["PriceOS1_4"] = "3.06"
//     productRow["PriceOS1_5"] = "2.97"
//     productRow["PriceOS1_6"] = "2.88"
//     productRow["PriceOS1_7"] = ""
//     productRow["PriceOS1_8"] = ""
//     productRow["PriceOS1_9"] = ""
//     productRow["BlankPriceOSDes2"] = ""
//     productRow["QtyOS2_1"] = ""
//     productRow["QtyOS2_2"] = ""
//     productRow["QtyOS2_3"] = ""
//     productRow["QtyOS2_4"] = ""
//     productRow["QtyOS2_5"] = ""
//     productRow["QtyOS2_6"] = ""
//     productRow["QtyOS2_7"] = ""
//     productRow["QtyOS2_8"] = ""
//     productRow["QtyOS2_9"] = ""
//     productRow["PriceOS2_1"] = ""
//     productRow["PriceOS2_2"] = ""
//     productRow["PriceOS2_3"] = ""
//     productRow["PriceOS2_4"] = ""
//     productRow["PriceOS2_5"] = ""
//     productRow["PriceOS2_6"] = ""
//     productRow["PriceOS2_7"] = ""
//     productRow["PriceOS2_8"] = ""
//     productRow["PriceOS2_9"] = ""
//     productRow["BlankPriceOSDes3"] = ""
//     productRow["QtyOS3_1"] = ""
//     productRow["QtyOS3_2"] = ""
//     productRow["QtyOS3_3"] = ""
//     productRow["QtyOS3_4"] = ""
//     productRow["QtyOS3_5"] = ""
//     productRow["QtyOS3_6"] = ""
//     productRow["QtyOS3_7"] = ""
//     productRow["QtyOS3_8"] = ""
//     productRow["QtyOS3_9"] = ""
//     productRow["PriceOS3_1"] = ""
//     productRow["PriceOS3_2"] = ""
//     productRow["PriceOS3_3"] = ""
//     productRow["PriceOS3_4"] = ""
//     productRow["PriceOS3_5"] = ""
//     productRow["PriceOS3_6"] = ""
//     productRow["PriceOS3_7"] = ""
//     productRow["PriceOS3_8"] = ""
//     productRow["PriceOS3_9"] = ""
//     productRow["Service8"] = "8 - 10 Weeks"
//     productRow["Service8Desc1"] = "8 - 10 Weeks Print Per Col/Pos"
//     productRow["Service8Cost1"] = "0.05"
//     productRow["Service8Setup1"] = "30"
//     productRow["Service8MoQ1"] = "2000"
//     productRow["Service8MaxQty1"] = "100000"
//     productRow["Service8Desc2"] = ""
//     productRow["Service8Cost2"] = ""
//     productRow["Service8Setup2"] = ""
//     productRow["Service8MoQ2"] = ""
//     productRow["Service8MaxQty2"] = ""
//     productRow["Service8Desc3"] = ""
//     productRow["Service8Cost3"] = ""
//     productRow["Service8Setup3"] = ""
//     productRow["Service8MoQ3"] = ""
//     productRow["Service8MaxQty3"] = ""
//     productRow["Service8Desc4"] = ""
//     productRow["Service8Cost4"] = ""
//     productRow["Service8Setup4"] = ""
//     productRow["Service8MoQ4"] = ""
//     productRow["Service8MaxQty4"] = ""
//     productRow["Service8Desc5"] = ""
//     productRow["Service8Cost5"] = ""
//     productRow["Service8Setup5"] = ""
//     productRow["Service8MoQ5"] = ""
//     productRow["Service8MaxQty5"] = ""
//     productRow["Service9"] = ""
//     productRow["Service9Desc2"] = ""
//     productRow["Service9Cost2"] = ""
//     productRow["Service9Setup2"] = ""
//     productRow["Service9MoQ2"] = ""
//     productRow["Service9MaxQty2"] = ""
//     productRow["Service9Desc3"] = ""
//     productRow["Service9Cost3"] = ""
//     productRow["Service9Setup3"] = ""
//     productRow["Service9MoQ3"] = ""
//     productRow["Service9MaxQty3"] = ""
//     productRow["Service9Desc4"] = ""
//     productRow["Service9Cost4"] = ""
//     productRow["Service9Setup4"] = ""
//     productRow["Service9MoQ4"] = ""
//     productRow["Service9MaxQty4"] = ""
//     productRow["Service10"] = ""
//     productRow["Service10Desc2"] = ""
//     productRow["Service10Cost2"] = ""
//     productRow["Service10Setup2"] = ""
//     productRow["Service10MoQ2"] = ""
//     productRow["Service10MaxQty2"] = ""
//     productRow["Service10Desc3"] = ""
//     productRow["Service10Cost3"] = ""
//     productRow["Service10Setup3"] = ""
//     productRow["Service10MoQ3"] = ""
//     productRow["Service10MaxQty3"] = ""
//     productRow["Service10Desc4"] = ""
//     productRow["Service10Cost4"] = ""
//     productRow["Service10Setup4"] = ""
//     productRow["Service10MoQ4"] = ""
//     productRow["Service10MaxQty4"] = ""
    



//     expect(mapProductPriceLists(productRow)).toEqual(
//         [
//             {
//                 type: "offshore",
//                 blankProducts: [
//                     {
//                         description: "Indent Blank Stock",
//                         prices: [
//                                 { qty: 2000,  unitPrice: 3.53},
//                                 { qty: 5000, unitPrice: 3.25},
//                                 { qty: 10000, unitPrice: 3.16},
//                                 { qty: 25000, unitPrice: 3.06},
//                                 { qty: 50000, unitPrice: 2.97},
//                                 { qty: 100000, unitPrice: 2.88}
//                         ]
//                     }                        
//                 ],
//                 services: [
//                     {
//                         days: 70,
//                         serviceName: "8 - 10 Weeks",
//                         description: "8 - 10 Weeks Print Per Col/Pos",
//                         unitPrice: 0.05,
//                         newSetup: 30,
//                         minimumQuantity: 2000,
//                         maxQty: 100000
//                     }
//                 ]
//             }
//         ]
//     );
// });

