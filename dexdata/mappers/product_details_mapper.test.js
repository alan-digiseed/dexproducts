const mapProductDetails = require('./product_details_mapper');

test('all categories have data', () => {

    productRow = Array();
    productRow["Code"] = "DS1072T";
    productRow["Name"] = "USB HUB";
    productRow["Category1"] = "Overseas Sourcing";
    productRow["Category2"] = "Technology";
    productRow["Category3"] = null;
    productRow["Category4"] = null;
    productRow["Category5"] = null;
    productRow["Category6"] = null;
    productRow["Description"] = "A 3 ports USB hub and mobile phone stand, it has a white panel which lights up the logo.";
    productRow["AdditionalInfo"] = "Indenting only";
    productRow["IsOnSale"] = null;
    productRow["IsOverSeasSourcing"] = "Y";
    productRow["IsFreightFree"] = "Y";
    productRow["ProductImageFile"] = "DS1072T_1.jpg | DS1072T_2.jpg";
    productRow["ProductDisclaimer"] = "GST additional. Other additional charges may apply. We reserve the right to change prices and charges without notice. Please supply or email logo in vectorised format in an EPS or PDF File. Current stocked item style may vary slightly from image shown. If item style is paramount then please request sample of current shipment prior to ordering. Delievery time from Dex Group to client is not included. Days stated means working days from artwork approval to dispatch";


    expect(mapProductDetails(productRow)).toEqual({
        productCode: "DS1072T",
        name: "USB HUB",
        category1: "Overseas Sourcing",
        category2: "Technology",
        category3: null,
        category4: null,
        category5: null,
        category6: null,
        description: "A 3 ports USB hub and mobile phone stand, it has a white panel which lights up the logo.",
        additionalInfo: "Indenting only",
        isOnSale: false,
        isFreightFree: true,
        isOverseasSourcing: true,
        images: ["DS1072T_1.jpg","DS1072T_2.jpg"],
        productDisclaimer: "GST additional. Other additional charges may apply. We reserve the right to change prices and charges without notice. Please supply or email logo in vectorised format in an EPS or PDF File. Current stocked item style may vary slightly from image shown. If item style is paramount then please request sample of current shipment prior to ordering. Delievery time from Dex Group to client is not included. Days stated means working days from artwork approval to dispatch"
    });
});

test('booleans with value of N and with no Value to be False', () => {

    productRow = Array();
    productRow["Code"] = "DS1072T";
    productRow["Name"] = "USB HUB";
    productRow["Category1"] = "Overseas Sourcing";
    productRow["Category2"] = "Technology";
    productRow["Category3"] = null;
    productRow["Category4"] = null;
    productRow["Category5"] = null;
    productRow["Category6"] = null;
    productRow["Description"] = "A 3 ports USB hub and mobile phone stand, it has a white panel which lights up the logo.";
    productRow["AdditionalInfo"] = "Indenting only";
    productRow["IsOnSale"] = null;
    productRow["IsOverSeasSourcing"] = "N";
    productRow["IsFreightFree"] = "n";
    productRow["ProductImageFile"] = "DS1072T_1.jpg | DS1072T_2.jpg";
    productRow["ProductDisclaimer"] = "GST additional. Other additional charges may apply. We reserve the right to change prices and charges without notice. Please supply or email logo in vectorised format in an EPS or PDF File. Current stocked item style may vary slightly from image shown. If item style is paramount then please request sample of current shipment prior to ordering. Delievery time from Dex Group to client is not included. Days stated means working days from artwork approval to dispatch";


    expect(mapProductDetails(productRow)).toEqual({
        productCode: "DS1072T",
        name: "USB HUB",
        category1: "Overseas Sourcing",
        category2: "Technology",
        category3: null,
        category4: null,
        category5: null,
        category6: null,
        description: "A 3 ports USB hub and mobile phone stand, it has a white panel which lights up the logo.",
        additionalInfo: "Indenting only",
        isOnSale: false,
        isFreightFree: false,
        isOverseasSourcing: false,
        images: ["DS1072T_1.jpg","DS1072T_2.jpg"],
        productDisclaimer: "GST additional. Other additional charges may apply. We reserve the right to change prices and charges without notice. Please supply or email logo in vectorised format in an EPS or PDF File. Current stocked item style may vary slightly from image shown. If item style is paramount then please request sample of current shipment prior to ordering. Delievery time from Dex Group to client is not included. Days stated means working days from artwork approval to dispatch"
    });
});

test('booleans with value of y to be true', () => {

    productRow = Array();
    productRow["Code"] = "DS1072T";
    productRow["Name"] = "USB HUB";
    productRow["Category1"] = "Overseas Sourcing";
    productRow["Category2"] = "Technology";
    productRow["Category3"] = null;
    productRow["Category4"] = null;
    productRow["Category5"] = null;
    productRow["Category6"] = null;
    productRow["Description"] = "A 3 ports USB hub and mobile phone stand, it has a white panel which lights up the logo.";
    productRow["AdditionalInfo"] = "Indenting only";
    productRow["IsOnSale"] = "blah";
    productRow["IsOverSeasSourcing"] = "Y";
    productRow["IsFreightFree"] = "y";
    productRow["ProductImageFile"] = "DS1072T_1.jpg | DS1072T_2.jpg";
    productRow["ProductDisclaimer"] = "GST additional. Other additional charges may apply. We reserve the right to change prices and charges without notice. Please supply or email logo in vectorised format in an EPS or PDF File. Current stocked item style may vary slightly from image shown. If item style is paramount then please request sample of current shipment prior to ordering. Delievery time from Dex Group to client is not included. Days stated means working days from artwork approval to dispatch";


    expect(mapProductDetails(productRow)).toEqual({
        productCode: "DS1072T",
        name: "USB HUB",
        category1: "Overseas Sourcing",
        category2: "Technology",
        category3: null,
        category4: null,
        category5: null,
        category6: null,
        description: "A 3 ports USB hub and mobile phone stand, it has a white panel which lights up the logo.",
        additionalInfo: "Indenting only",
        isOnSale: false,
        isFreightFree: true,
        isOverseasSourcing: true,
        images: ["DS1072T_1.jpg","DS1072T_2.jpg"],
        productDisclaimer: "GST additional. Other additional charges may apply. We reserve the right to change prices and charges without notice. Please supply or email logo in vectorised format in an EPS or PDF File. Current stocked item style may vary slightly from image shown. If item style is paramount then please request sample of current shipment prior to ordering. Delievery time from Dex Group to client is not included. Days stated means working days from artwork approval to dispatch"
    });
});
