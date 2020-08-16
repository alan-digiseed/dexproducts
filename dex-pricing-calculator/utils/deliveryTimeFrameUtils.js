export const getDeliveryTimeFrameDisplayText = (deliveryTimeFrameDays) => {
    if (deliveryTimeFrameDays === 1)
        return '24 hours'
    else
        return deliveryTimeFrameDays + ' days';
}

