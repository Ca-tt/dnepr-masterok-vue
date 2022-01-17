function createTelLink(number) {
    return 'tel:+38' + number.replaceAll('-','').replaceAll(' ', '').split().join('');
}

const phoneNumbers = {
    vodafone: '066 172-03-52',
    kievstar: '097 753-34-60',
};

const phoneNumbersLinks = {
    vodafone: createTelLink(phoneNumbers.vodafone),
    kievstar: createTelLink(phoneNumbers.kievstar),
}

export { phoneNumbers, phoneNumbersLinks };



