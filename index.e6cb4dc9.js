document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),t=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),l=document.querySelector(".field"),o=function(){var o=l.rows.length,i=l.rows[0].cells.length;e.disabled=o>=10,r.disabled=o<=2,t.disabled=i>=10,n.disabled=i<=2};e.addEventListener("click",function(){if(l.rows.length<10){for(var e=l.rows[0].cells.length,r=l.insertRow(),t=0;t<e;t++)r.insertCell();o()}}),r.addEventListener("click",function(){l.rows.length>2&&(l.deleteRow(-1),o())}),t.addEventListener("click",function(){if(l.rows[0].cells.length<10){var e=l.rows,r=!0,t=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)i.value.insertCell()}catch(e){t=!0,n=e}finally{try{r||null==c.return||c.return()}finally{if(t)throw n}}o()}}),n.addEventListener("click",function(){var e=l.rows;if(e[0].cells.length>2){var r=!0,t=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)i.value.deleteCell(-1)}catch(e){t=!0,n=e}finally{try{r||null==c.return||c.return()}finally{if(t)throw n}}o()}})});
//# sourceMappingURL=index.e6cb4dc9.js.map