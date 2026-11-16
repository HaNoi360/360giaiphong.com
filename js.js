function UniqueArray(OrinalArray) {
  return OrinalArray.filter((elem, position, arr) => {
    return arr.indexOf(elem) == position;
  });
}

function RandomIntFromInterval(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

function ShuffleArray(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function CompareArrays(A,B,Type) {
    switch (Type) {
        case "AxB": return A.filter(x => B.includes(x));
        case "A:B": return A.filter(x => !B.includes(x)).concat(B.filter(x => !A.includes(x)));
        default: return A.filter(x => !B.includes(x));
    }
}

function AddCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

$(document).ready(function(){
	$("body").css({"background":"url("+Background.Dark+")"});
	$("#Note").height($("#Inputs").height());
	$("#CusInfo").on("submit",function(e){
		e.preventDefault();
    var data = $('form#CusInfo').serialize();
    $.ajax({
              type : 'GET', 
              url : 'https://script.google.com/macros/s/AKfycbxjB-DOcwHobeucCP81bdZYyza9N2zE4pX07mlZbRqddHHm7VUV9jrTWtLg7Zt4sh62/exec',
              dataType:'json',
              crossDomain : true,
              data : data,
              success : function(data)
            {
            if(data == 'false'){alert('Error!');}else{top.location.href="https://ThamMy.top"}
            }
      });

	});
});