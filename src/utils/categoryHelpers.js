const getAliasedCategories = (categories) => [
    ...categories.filter(c => c.alias === null),
    ...categories.filter(c => c.alias).reduce((accumulator, currentValue) => {
        if (!accumulator.find( x => x.name === currentValue.alias)) {
        accumulator = [...accumulator, {name: currentValue.alias, title: currentValue.alias, imageUrl: currentValue.imageUrl, slug: camelize(currentValue.alias) }];
      }
      return accumulator;
    }, [] )
  ];

  const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

module.exports.getAliasedCategories = getAliasedCategories;