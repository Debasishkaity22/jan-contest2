console.log("hi");
const menuData = [];
function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        else{
            let data= response.json();
            console.log(data);
            return data;
        }
        
      })
      .catch(error => {
        throw new Error(`Fetch error: ${error.message}`);
      });
  }
  
function TakeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let selectorder = menuData;
            let order = { items: selectorder, order_status: false, paid: false };
            resolve(order);
            let menuContain=document.querySelector(".menu-contain");
            menuContain.innerHTML=`
            <div class="item flex" id="${selectorder[0].id}">
                        <div class="item-img flex">
                            <img src="${selectorder[0].imgSrc}" >
                        </div>
                        <div class="item-text-icon flex">
                            <div class="name-price-text flex">
                                <div class="name">${selectorder[0].name}</div>
                                <div class="price">$${selectorder[0].price}/-</div>
                            </div>
                            <div class="plus-icon flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6.66663V25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.66663 16H25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                            </div>
                        </div>
                    </div>
                    <div class="item flex" id="${selectorder[1].id}">
                        <div class="item-img flex">
                            <img src="${selectorder[1].imgSrc}" >
                        </div>
                        <div class="item-text-icon flex">
                            <div class="name-price-text flex">
                                <div class="name">${selectorder[1].name}</div>
                                <div class="price">$${selectorder[1].price}/-</div>
                            </div>
                            <div class="plus-icon flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6.66663V25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.66663 16H25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                            </div>
                        </div>
                    </div> 
                    <div class="item flex" id="${selectorder[2].id}">
                    <div class="item-img flex">
                        <img src="${selectorder[2].imgSrc}" >
                    </div>
                    <div class="item-text-icon flex">
                        <div class="name-price-text flex">
                            <div class="name">${selectorder[2].name}</div>
                            <div class="price">$${selectorder[2].price}/-</div>
                        </div>
                        <div class="plus-icon flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 6.66663V25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66663 16H25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                        </div>
                    </div>
                </div>
            `
            console.log(menuContain);
        }, 2500);
    })
}
function orderPrep(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.order_status = true;
            resolve(order);
        }, 1500);
    })
}
function payOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.paid = true;
            resolve(order);
        },1000);
    })
}
function thankyouFnc() {
    // alert("thankyou for eating with us today!");
}
getMenu().then((menu) => {
    console.log(menu);
    randomArray(menu);
    return TakeOrder();
}).then((order) => {
    console.log(order);
    return orderPrep(order);
}).then((order) => {
    console.log(order);
    return payOrder(order);
}).then((order) => {
    console.log(order);
    thankyouFnc();
}).catch((error) => {
    console.log("Error", error);
})
function randomArray( arr){
    let index=0;
  while (index<3) {
    let randomIndex=Math.floor(Math.random()*arr.length);
   menuData.push(arr[randomIndex]);
    index++;
  }
  
}