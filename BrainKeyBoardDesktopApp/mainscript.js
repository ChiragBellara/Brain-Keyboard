var internal = null;
var secInternal = null;
var thirdInternal = null;
let divrow = "firstrow";
let old = "fifthrow";
var firstRowChild = [];
var secRowChild = [];
// var current = null;
// var second = null;
var eachButton = []
// var accept = 0;
// var data = null

<<<<<<< HEAD
function reset(){
    internal = null;
    secInternal = null;
    thirdInternal = null;
    divrow = "firstrow";
    old = "fifthrow";
    firstRowChild = []
    current = null;
    second = null;
    eachButton = []
    accept = 0;
    data= null
}
function myFunction(){
    if(accept===1){
        clearInterval( internal );
        document.getElementById(old).style.backgroundColor=null;
        document.getElementById(old).style.boxShadow=null;
        var children =document.getElementById(old).children;
        for(i=0; i<children.length;i++ ){
            firstRowChild.push(children[i].id);
        }
        firstChild();
    }
    else if(accept===2){
        clearInterval( secInternal );
        document.getElementById(second).style.backgroundColor=null;
        document.getElementById(second).style.boxShadow=null;
        var children =document.getElementById(second).children;
        for(i=0; i<children.length;i++ ){
            eachButton.push(children[i].id);
        }
        console.log(eachButton);
        eachBtn();
=======
// function reset(){
//     clearInterval(thirdInternal);
//     document.getElementById(data).style.backgroundColor=null;
//     document.getElementById(data).style.boxShadow=null;
//     accept = 1;
//     document.getElementById("textscreen").value+=data
//     reset();
//     first_opt();
//     internal = null;
//     secInternal = null;
//     thirdInternal = null;
//     divrow = "firstrow";
//     old = "fifthrow";
//     firstRowChild = []
//     current = null;
//     second = null;
//     eachButton = []
//     accept = 0;
//     data= null
// }
// // function myFunction(){
// //     if(accept===1){
        
// //         firstChild();
// //     }
// //     else if(accept===2){
        
// //         eachBtn();

// //     }
// //     else if(accept===3){
        
// //     }
// // }

// //Button selection
// function eachBtn(){
//     clearInterval( secInternal );
//     document.getElementById(second).style.backgroundColor=null;
//     document.getElementById(second).style.boxShadow=null;
//     var children =document.getElementById(second).children;
//     for(i=0; i<children.length;i++ ){
//         eachButton.push(children[i].id);
//     }
//     console.log(eachButton);
//     if (! thirdInternal){
//         accept =3
//         var count =0
//         var btn = null
//         data = eachButton[0]
//         thirdInternal = setInterval(function(){
//             document.getElementById(data).style.backgroundColor=null;
//             document.getElementById(data).style.boxShadow=null;
//             btn= count%3
//             count= count+1;
//             data = eachButton[btn]
//             console.log(data)
//             document.getElementById(data).style.backgroundColor="green";
//             document.getElementById(data).style.boxShadow="0 15px 8px -6px #666";
//         },2000);
//     }
// }

// // Two row selection
// function firstChild(){
//     clearInterval( internal );
//     document.getElementById(old).style.backgroundColor=null;
//     document.getElementById(old).style.boxShadow=null;
//     var children =document.getElementById(old).children;
//     for(i=0; i<children.length;i++ ){
//         firstRowChild.push(children[i].id);
//     }
//     current = firstRowChild[0];
//     second = firstRowChild[1];
//     if(! secInternal){
//         accept=2
//         secInternal = setInterval(function(){
//             document.getElementById(second).style.backgroundColor=null;
//             document.getElementById(current).style.backgroundColor="blue";
//             document.getElementById(second).style.boxShadow=null
//             document.getElementById(current).style.boxShadow="0 15px 8px -6px #666";
>>>>>>> e19f03da165d842a12cb494a9f4208adefbe8e28

//             if(true){
//                 var n = current
//                 current = second
//                 second = n
//             }
//         }, 3000);
//     }
    
// }


function callFromPython(){
    clearInterval(internal)
    document.getElementById(old).style.backgroundColor=null;
    document.getElementById(old).style.boxShadow=null;
    var children =document.getElementById(old).children;
    for(i=0; i<children.length;i++ ){
        firstRowChild.push(children[i].id);
    }
<<<<<<< HEAD
    else if(accept===3){
        clearInterval(thirdInternal);
        document.getElementById(data).style.backgroundColor=null;
        document.getElementById(data).style.boxShadow=null;
        accept = 1;
        document.getElementById("textscreen").value+=data
        reset();
        first_opt();
=======

    old = firstRowChild[0];
    divrow = firstRowChild[1];
    if(! secInternal){
        accept=2
        secInternal = setInterval(function(){
            document.getElementById(old).style.backgroundColor=null;
            document.getElementById(divrow).style.backgroundColor="blue";
            document.getElementById(old).style.boxShadow=null
            document.getElementById(divrow).style.boxShadow="0 15px 8px -6px #666";

            if(true){
                var n = divrow
                divrow = old
                old = n
            }
            
        }, 2000);
>>>>>>> e19f03da165d842a12cb494a9f4208adefbe8e28
    }

}

function callFromPython2(){
    clearInterval( secInternal );
    document.getElementById(old).style.backgroundColor=null;
    document.getElementById(old).style.boxShadow=null;
    var children =document.getElementById(old).children;
    for(i=0; i<children.length;i++ ){
        eachButton.push(children[i].id);
    }
    if (! thirdInternal){
        accept =3
        var count =0
        var btn = null
        data = eachButton[0]
        thirdInternal = setInterval(function(){
            document.getElementById(data).style.backgroundColor=null;
            document.getElementById(data).style.boxShadow=null;
            btn= count%3
            count= count+1;
            data = eachButton[btn]
           
            document.getElementById(data).style.backgroundColor="green";
            document.getElementById(data).style.boxShadow="0 15px 8px -6px #666";
        },2000);
    }

<<<<<<< HEAD
// Two row selection
function firstChild(){
    current = firstRowChild[0];
    second = firstRowChild[1];
    if(! secInternal){
        accept=2
        secInternal = setInterval(function(){
            document.getElementById(second).style.backgroundColor=null;
            document.getElementById(current).style.backgroundColor="blue";
            document.getElementById(second).style.boxShadow=null
            document.getElementById(current).style.boxShadow="0 15px 8px -6px #666";
            console.log(document.getElementById(second).value)
            if(true){
                var n = current
                current = second
                second = n
            }
        }, 3000);
    }
    
=======
}

function callFromPython3(){
    clearInterval(thirdInternal);
    document.getElementById(data).style.backgroundColor=null;
    document.getElementById(data).style.boxShadow=null;
    document.getElementById("textscreen").value+=data
    internal = null;
    secInternal = null;
    thirdInternal = null;
    divrow = "firstrow";
    old = "fifthrow";
    firstRowChild = []
    eachButton = []
    data= null
    first_opt();
>>>>>>> e19f03da165d842a12cb494a9f4208adefbe8e28
}



function first_opt(){
    if (! internal){
        accept =1
        internal = setInterval(function(){ 
            document.getElementById(old).style.backgroundColor=null;
            document.getElementById(divrow).style.backgroundColor="blue";
            document.getElementById(old).style.boxShadow=null
            document.getElementById(divrow).style.boxShadow="0 15px 8px -6px #666";
            
            
            if(divrow === "firstrow"){
                old =  "firstrow"
                divrow = "secondrow"
                
            }
            else if(divrow === "secondrow"){
                old =  "secondrow"
                divrow = "thirdrow"
            }
            else if(divrow === "thirdrow"){
                old = "thirdrow"
                divrow = "forthrow"
            }
            else if(divrow === "forthrow"){
                old =  "forthrow"
                divrow = "fifthrow"
            }
            else if(divrow === "fifthrow"){
                old =  "fifthrow"
                divrow = "firstrow"
            }
<<<<<<< HEAD
            console.log("mainscript")
        }, 3000);
=======
        }, 2000);
>>>>>>> e19f03da165d842a12cb494a9f4208adefbe8e28
    }
}