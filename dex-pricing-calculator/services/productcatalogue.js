const products = [
    {
        productCode: 'MTP027',
        productPriceLists: [
            {
                type: 'local',
                mindays: 0,
                maxdays: 27,
                productPrices: [
                    {qty: 100, unitPrice: 0.61},
                    {qty: 250, unitPrice: 0.58},
                    {qty: 500, unitPrice: 0.56},
                    {qty: 1000, unitPrice: 0.54},
                    {qty: 2500, unitPrice: 0.53},
                    {qty: 5000, unitPrice: 0.52}
                ],
                decorations: [
                    {days: 1, service: 'LE/1P', unitPrice: 0.20, newSetup: 50, repeatSetup: 30, qtyLimited: 2500},
                    {days: 1, service: '1C/1P', unitPrice: 0.17, newSetup: 50, repeatSetup: 30, qtyLimited: 2500},
                    {days: 1, service: 'UV/1P', unitPrice: 0.32, newSetup: 50, repeatSetup: 30, qtyLimited: 1000},
                    {days: 3, service: 'LE/1P', unitPrice: 0.16, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 3, service: '1C/1P', unitPrice: 0.14, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 3, service: 'UV/1P', unitPrice: 0.25, newSetup: 50, repeatSetup: 30, qtyLimited: 2500},
                    {days: 7, service: 'LE/1P', unitPrice: 0.12, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 7, service: '1C/1P', unitPrice: 0.10, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 7, service: 'UV/1P', unitPrice: 0.22, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 12, service: 'LE/1P', unitPrice: 0.10, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 12, service: '1C/1P', unitPrice: 0.08, newSetup: 50, repeatSetup: 30, qtyLimited: 5000},
                    {days: 12, service: 'UV/1P', unitPrice: 0.20, newSetup: 50, repeatSetup: 30, qtyLimited: 5000}
                ]
            },
            {
                type: 'offshore',
                mindays: 28,
                maxdays: 60,
                productPrices: [
                    {qty: 100, unitPrice: 0.48},
                    {qty: 250, unitPrice: 0.48},
                    {qty: 500, unitPrice: 0.48},
                    {qty: 100, unitPrice: 0.48},
                    {qty: 2500, unitPrice: 0.48},
                    {qty: 5000, unitPrice: 0.48}
                ],
                decorations: [
                    {days: 28, service: 'LE/1P', unitPrice: 0.05, newSetup: 50, repeatSetup: 30, qtyLimited: 2500},
                    {days: 28, service: '1C/1P', unitPrice: 0.05, newSetup: 50, repeatSetup: 30, qtyLimited: 2500},
                    {days: 28, service: 'UV/1P', unitPrice: 0.11, newSetup: 50, repeatSetup: 30, qtyLimited: 1000}
                ]

            }            
        ]
    }
];

export default products;