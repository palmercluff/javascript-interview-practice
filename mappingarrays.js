function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
	action(array[i]);
}

function map(func, array) {
    var result = [];
    forEach(array, function (element) {
	result.push(func(element));
    });
    return result;
}
