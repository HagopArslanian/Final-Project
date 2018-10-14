const f = function(x){
    return "*".repeat(x);
};
const z = function(y){
	return " ".repeat(y);
};
const triangleStars = function(a){
	    q = 0;
	    let stars = 2*a - 1; 
        while(stars > 0){
                    console.log(z(a - (a - q)) + f(stars));
                    stars = stars - 2;
                    q = q + 1;
        };
};
triangleStars(5);
const arr = function(x){
	     w = 0;
         while(w < x[1].length){
         x[0][x[0].length] = x[1][w];
         w = w + 1;
         };
         return x[0];
};
console.log(arr([[1, 2, 3, 4], [5, 6, 7, 8, 9, 10]]));
const FindMinMax = function(a, b){
              if(b === true){
              	let i = 0;
              	let max = 0;
                     while(i < a.length){
                     	if(a[i] > max){
                     		max = a[i];
                     	};
                     	i = i + 1;
                     };
                     console.log(max);
              }else{
              	let j = 0;
              	let min = a[0];
                     while(j < a.length){
                        if(a[j] < min){
                        	a[j] = min;
                        };
                        j = j + 1;
                     };
                     console.log(min);
              };
};
FindMinMax([10, 50 , 100, 200], false);
const ForEach = function(x, y){
	       e = 0;
           while(e < x.length){
           	console.log(x[e]);
           	e = e + 1;
           };
};
ForEach([4, 3, 2, 1], function(val){
                console.log(val);
});
const sum = function(x){
           let r = 0;
           let t = 0;
           while(t < x.length){
           	 r = r + x[t];
           	 t = t + 1;
           };
           return console.log(r);
};
sum([5, 4, 3, 2, 1]);
const reverse = function(x){
	      let w = 1;
	      let q = "";
	      while(w <= x.length){
	      	q = q + x[x.length - w];
	      	w = w + 1;
	      };
	      return q;
};
console.log(reverse("abcdef"));
const checkers = function(x){
	let i = 0;
	let stars = "";
	while(i < x){
		stars = stars + "* ";
		i = i + 1;
	};
	return stars;
};
const checkerboard = function(y){
	let j = 0;
	let s = "";
	while(j < y){
		if(j%2 !== 0){
			s = " " + checkers(y);
		}else{
			s = checkers(y);
		};
		j = j + 1;
		console.log(s);
	};
};
checkerboard(6);