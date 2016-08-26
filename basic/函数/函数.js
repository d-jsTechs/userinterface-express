/**
 * Created by Shadow on 2016/8/26.
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");