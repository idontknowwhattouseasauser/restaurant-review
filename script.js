class Shop{
    constructor(reviewer,shop,type,rate,message){
        this.reviewer=reviewer;
        this.shop=shop;
        this.type=type;
        this.rate=rate;
        this.message=message;
    }
}


class UI{
    static addshoptolist(food){
        const list=document.getElementById("shop-list");
        const row=document.createElement("tr");
        row.innerHTML=`<td>${food.reviewer}</td>
        <td>${food.shop}</td>
        <td>${food.type}</td>
        <td>${food.rate}</td>
        <td>${food.message}</td>`;
        list.appendChild(row);
    }
    
    
}

document.querySelector("#shop-form").addEventListener("submit",addashop)
function addashop(e){
    console.log("formSubmitted");
    e.preventDefault()
    const yn=document.querySelector("#yn").value;
    const rn=document.querySelector("#rn").value;
    const type=document.querySelector("#type").value;
    const rate=document.querySelector("#rate").value;
    const mr=document.querySelector("#mr").value;
    const shop=new Shop(yn, rn, type, rate, mr);
    UI.addshoptolist(shop)
    
}
