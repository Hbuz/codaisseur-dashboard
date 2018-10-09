import React, { Component } from 'react'
import StickyFooter from 'react-sticky-footer';

const timerID = null;
const timerRunning = false;
var id,pause=0,position=0;

function ticker() {
        var i,k,msg="YOUR MESSAGE GOES HERE"; // {funny staff and hire anouncments}
        k=(75/msg.length)+1;
        for(i=0;i<=k;i++) msg+=" "+msg;
        document.form2.ticker.value=msg.substring(position,position+75);
        if(position++==38) position=0;
        id=setTimeout("ticker()",1000/10); 
      }

function action() {
        if(!pause) {
                clearTimeout(id);
                pause=1; 
              }

        else{
                ticker();
                pause=0; 
            } 
        }

class Footer extends Component {
  render() {
    return (
      <div>
        <StickyFooter bottomThreshold={0} 
                      normalStyles={{
                        backgroundColor: "#999999",
                        padding: "2rem"
                      }}
                      stickyStyles={{
                        backgroundColor: "rgba(255,255,255,.8)",
                        padding: "2rem"
                      }}
        >
          <div>
            {/* <input className="footer__input--first">
              <form className="footer__form--first"></form>
            </input>
            <input className="footer__input--second">
              <form className="footer__form--second"></form>
            </input> */}
          </div>     
        </StickyFooter>
        
      </div>
    )
  }
}

export default Footer