const xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send(null);

// console.log(xhr);
xhr.onload=function(){
    //解析成JSON格式
    const str =JSON.parse(xhr.responseText);
    // console.log(str);
    const strLength = str.result.records.length;
    // console.log(strLength);
    
    
    let selectItem = document.querySelector('#areaId');
    let btnSelect = document.querySelector('.hot-btn')
    let listTitle = document.querySelector('.showTitle');
    let list = document.querySelector('#showList');

   
    //監聽下拉選項
    selectItem.addEventListener('change', selectData, true)
    // console.log(selectItem);
    //監聽按鈕
    btnSelect.addEventListener('click', selectData, true)

    function selectData(e) {
        let selectList = e.target.value; //選取的值
        let itemData = '';

        for (let i = 0; i < strLength; i++) {

            let itemAdd = str.result.records[i];

            if (selectList == itemAdd.Zone) {
               

                itemData += `
                <div class="col-6">
                    <div class="item mt-4">
                        <div class="area-img ">
                            <img src="${itemAdd.Picture1}" alt="" class="img-fluid d-block" />
                            <h2 class="sub-title">${itemAdd.Name}</h2>
                            <p class="area">${itemAdd.Zone}</p>
                            <ul class="list-unstyled">
                                <li class="time"><img src="image/icons_clock.png" class="mr-2">${itemAdd.Opentime}</li>
                                <li class="pin"><img src="image/icons_pin.png" class="mr-2">${itemAdd.Add}</li>
                                <li class="phone"><img src="image/icons_phone.png" class="mr-2">${itemAdd.Tel}</li>
                                <li class="tag"><img src="image/icons_tag.png" class="mr-2">${itemAdd.Ticketinfo}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
                // itemData += `
                // <div className="col-lg-6">
                //     <div class="item">
                //         <div class="area-img">
                //             <img src="${itemAdd.Picture1}" alt="" class="img-fluid d-block" />
                //             <h2 class="sub-title">${itemAdd.Name}</h2>
                //             <p class="area">${itemAdd.Zone}</p>
                //             <ul class="list-unstyled">
                //                 <li class="time">${itemAdd.Opentime}</li>
                //                 <li class="pin">${itemAdd.Add}</li>
                //                 <li class="phone">${itemAdd.Tel}</li>
                //                 <li class="tag">${itemAdd.Ticketinfo}</li>
                //             </ul>
                //         </div>
                //     </div>
                // </div>
                // `
                
            }

        }
        listTitle.innerHTML = selectList; //選擇的標題
        list.innerHTML = itemData;



    }

    


    

}


