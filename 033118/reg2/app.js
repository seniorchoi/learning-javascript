let re;
// Literal characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;     // Must start with
re = /d$/i;     // Must end with
re = /h.llo/; // Matches any ONE character
re = /he*o/; // Matches any char 0 or more times
re = /ha?e?llo/; // Optional character
re = /ha?e?llo\?/; // Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/;     // Must be a G or F
re = /[^GF]ray/;     // Match anything except a G or F
re = /^[GF]ray/;     // Must start with G or F
re= /[A-Z]ray/;     //Match any uppercase letter
re= /[a-z]ray/;     //Match any lowercase letter
re= /[A-Za-z]ray/;     //Match any letter of both case
re = /[0-9]ray/;        //Match any digit
re = /[0-9][0-9]ray/;        //Match any 2digit

// Braces {} - Quanifiers
re = /Hel{2}o/i;        // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;        // Must occur exactly {2~4} amount of times
re = /Hel{2,}o/i;        // Must occur at least {m} amount of times

// Parentheses () - Grouping
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-word characters
re = /\d/; // Match any digit
re = /\d+/; // Match many digit
re =/\D/; // Match any non digit
re =/\s/; // Match whitespace
re =/\S/; // Match non-whitespace
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if NOT followed by y



// String to match
// const str = 'hello';
// const str = 'Gray';
const str = '3x3x4x';


// Log results
const result = re.exec(str);
console.log(result);


function reTest(re,str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    }else {
        console.log(`${str} does NOT matches ${re.source}`)
    }
}

reTest(re, str);