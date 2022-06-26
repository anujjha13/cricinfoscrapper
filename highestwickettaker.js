const request= require("request");

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

const jsdom = require("jsdom");
const {JSDOM} = jsdom;


request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document =  dom.window.document;
        let mostWicket = 0;
        let nameOfHighestWicketTacker = "";
        let bowlersTable = document.querySelectorAll(".table.bowler");
        for(let i=0;i<bowlersTable.length;i++){
            let rows = bowlersTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    // console.log("Name of bowlet ---->",name," Wickets----> ",wicket,);
                    if(wicket>mostWicket){
                        mostWicket = wicket;
                        nameOfHighestWicketTaker=name;
                    }
                }
            }
        }
         console.log("Name of highestwicketTaker ---->",nameOfHighestWicketTaker," Wickets----> ",mostWicket);

    }
}


