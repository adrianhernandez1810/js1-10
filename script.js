function sleep_in(weekday, vacation){
    if(weekday == false || vacation == true){
        return true;
    }else{
        return false;
    }
}

function monkey_trouble(a_smile, b_smile ){
    if(a_smile == false && b_smile == false || a_smile == true && b_smile == true){
        return true;
    }else{
        return false;
    }
}

function  string_times(Hi, n){
    var answer = "";
    for (var i=0; i< n; i++){
        answer += Hi
    }
    return answer;
}

function front_times(string, n){
    if(string.length > 3){
        string = string.substring(0,3)
    }
    var answer = "";
    for (var i=0; i< n; i++){
        answer += string
    }
    return answer;
}

function string_bits(string, n){
    var hello = "";
    for(var i = 0; i < string.length; i+=2){
        hello = hello += string[i];
    }
    return hello;
}

function caughtSpeeding(speed, birthday){
    var noTicket = 0;
    var smallTicket = 1;
    var bigTicket = 2;
    if(birthday == true){
        speed = speed -5;
    }
    if(speed <= 60){
        return 0;
    }
    if(speed >= 61, speed <= 80){
        return 1;
    }
    if(speed >= 81){
        return 2;
    }
}

function fizz_buzz(n){
    if(n % 3 == 0){
        return "Fizz";
    }
    if(n % 5 == 0){
        return "Buzz";
    }
    if(n % 3 == 0 && n % 5 == 0){
        return "FizzBuzz";
    }
    return n + "!";
}

function teaParty(tea, candy){

    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= candy*2 || candy >= tea*2){
        return 2;
    }

    if(tea  >= 5 && candy >= 5){
        return 1;
    }
}

function blackjack(x, y){
    var checkX = x <= 21;
    var checkY = y <= 21;

    if(!checkX && !checkY){
        return 0;
    }else{
        if(!checkX){
            return y;
        }else if(!checkY){
            return x;
        }else if(x > y){
            return x;
        }else if(y > x){
            return y;
        }
    }
}
function loneSum(a, b, c){
    var sum = 0;
    var sum = a + b + c;
    if(a == b && b == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(a == c){
        return b;
    }
    if(b == c){
        return a;
    }
    return sum;
}
