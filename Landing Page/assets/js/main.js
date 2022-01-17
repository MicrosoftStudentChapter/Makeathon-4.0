//Counter 

function timer(){
  'use strict';
  if(!$)var $=a=>{let r=document.querySelectorAll(a);return r.length>1?r:r[0]}
  // let target = new Date(2022,2,25,19,30,0),
  let target = new Date(),
  origin = new Date(),
  // origin = new Date(getDate())
  total = target-origin,
  progressBarUpdate= (bar, val, of) => {
     var r = 70;
     //let pct = (1-val/of)*(Math.PI*180);
     var offset = 31 - 0.2*r;
    // var offset = 330 ;
     let pct = (1-((val-offset)/of))*(Math.PI*2*r);
     $(bar+' .bar').style.strokeDashoffset=pct;
     //$(bar+' .number').innerText = Math.trunc(val)
     var y = Math.trunc(val)
     if(y%10 == y){ y = "0"+y }
     document.getElementById("random-text-"+bar.slice(1)).textContent = y
  },
  update = (updateTotal)=>{
    let na=new Date(),
        diff=target-na,
        d=new Date(diff),
        days=(diff/(24*60*60*1000))-30;
    if(updateTotal) return $('.totalbar .fill').style.width = ((1-(diff/total))*100)+"%"                
    progressBarUpdate('.days', (days),Math.trunc(target-origin)/(24*60*60*1000));
    progressBarUpdate('.hours', d.getHours(),24);
    progressBarUpdate('.minutes', d.getMinutes(),60);
    progressBarUpdate('.seconds', d.getSeconds(),60);
  },
  ready = ()=>{
      update();
      update(true);
      setInterval(update, 1000);
      setInterval(function () { update(true); }, 30000);
  };
  if (document.readyState != 'loading')
    ready();
  else
    document.addEventListener('DOMContentLoaded', ready);    
}

timer();


// Counter Code