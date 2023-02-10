<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>quadratic frontend</title>
        <style>
            .title{
                font-family:"Arial";
            }
        </style>
    </head>
    <body>
<h1 class="title">quadratic formula calculator</h1>
      <script>
        var a = -1;
var b = 3;
var c = -3;

var insqrt = (b*b) - (4*a*c);
var dvdnd = 2*a;

var by = 100;

fill(255, 0, 0);
textSize(20);
text(dvdnd,75,by+215);
text(dvdnd,300,by+215);

fill(0, 26, 255);
text(insqrt,260,by+175);

fill(17, 255, 0);
text(b,50,by+175);

// square root
line(250,by+150,350,by+150);
line(250,by+180,250,by+150);
line(240,by+190,360,by+190);
line(250,by+180,245,by+165);


//division line
line(40,by+190,110,by+190);

//addition/subtraction sign
line (180,by+200,220,by+200);
line (180,by+220,220,by+220);
line(200,by+180,200,by+220);

    </script>
    <h4></h4>
    </body>
</html>
