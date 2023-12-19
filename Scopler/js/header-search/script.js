// Search bar varrible
let searchBtn = document.getElementById('search_btn')
let searchBar = document.querySelectorAll('.search_bar')[0]
let hideSearchBarBtn = document.getElementById('hide_seach_bar_btn')
let searchInput = document.getElementById('search_input_value')
let clearInputValueBtn = document.getElementById('clear_input_btn')
let close_mobile_menu_btn = document.getElementById('close_btn')
let headerLinkCon = document.getElementById('header_link_id')
let hamburMenu = document.getElementById('hamburger_menu_id')
let headerLogo = document.getElementById('header_logo_id')
let headerLeftConId = document.getElementById('header_left_con_id')
let apiSearchResultCon = document.querySelectorAll('.api_search_result_con')[0]
let apiSearchResulId = document.getElementById('api_search_result_id')
let foundText = document.getElementById('found_text')
let isSearchBarVisible = false
let isClearSearchValueVisible = false


close_mobile_menu_btn.addEventListener('click', () => {
    headerLinkCon.classList.toggle('show_mobile_menu')
})
hamburMenu.addEventListener('click', () => {
    headerLinkCon.classList.toggle('show_mobile_menu')
})
clearInputValueBtn.addEventListener('click', () => {
    if (searchInput.value.length > 0) {
        searchInput.value = ''
        searchInput.focus()
        clearInputValueBtn.classList.toggle('show_clear_button')
    }
})
searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0 && isClearSearchValueVisible == false) {
        isClearSearchValueVisible = true
        clearInputValueBtn.classList.toggle('show_clear_button')
        // console.log("lenth is 0 ");
    } else {
        if (searchInput.value.length == 0 && isClearSearchValueVisible == true) {
            isClearSearchValueVisible = false
            clearInputValueBtn.classList.toggle('show_clear_button')


        }
    }

    if (searchInput.value.length > 0) {
        searchByApi()
    }
    // if (searchInput.value.length != 0) {
    //     searchByApi()
    // }

    // if (searchInput.value.length == 1) {
    //     clearInputValueBtn.classList.toggle('show_clear_button')
    // } else {
    //     if (searchInput.value.length == 0) {
    //         clearInputValueBtn.classList.toggle('show_clear_button')
    //     }
    // }
})

searchBtn.addEventListener('click', (event) => {
    if (isSearchBarVisible == false) {
        event.preventDefault()
        showHideSearch_bar()
        searchInput.focus()
        isSearchBarVisible = true
    } else {
        if (searchInput.value.length == 0) {
            event.preventDefault()
        } else {

        }
    }

})
hideSearchBarBtn.addEventListener('click', (event) => {
    if (isSearchBarVisible == true) {
        isSearchBarVisible = false
        showHideSearch_bar()
    }
})
function showHideSearch_bar() {
    // console.log("You click on the Search Button")
    apiSearchResultCon.classList.toggle('hide_api_search_result_con')
    headerLeftConId.classList.toggle('hide_header_left_con')
    hamburMenu.classList.toggle('hide_hamburger_menu')
    headerLogo.classList.toggle('hide_header_logo')
    clearInputValueBtn.classList.toggle('clear_input_button_hide')
    searchBar.classList.toggle('hide_search_bar')
    hideSearchBarBtn.classList.toggle('hide_search_bar_button_hide')
    searchInput.classList.toggle('search_input_hide')
}

function searchByApi() {
    const apiKey = 'AIzaSyDaMvZAwlAbJZKhOpwikhSHfUUEW8rmfKI';
    const blogId = '8695350722128024733';
    let query = searchInput.value;
    let searchThumSize = /s100/

    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/search?key=${apiKey}&q=${query}`;

    fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`Error: ${response.status}`);
            }
        })
        .then((data) => {
            // Process and display the search results
            // console.log(data.items)
            let apiResult = '';
            const items = data.items || [];

            // console.log(items.length)
            if (items.length != 0) {
                if ((items.length) == 10) {
                    foundText.innerHTML = `Showing ${items.length} post`
                } else {

                    foundText.innerHTML = `0${items.length}  post found`

                }
                items.forEach((post) => {
                    let changeImgUrl = `https:${post.content.match(/\/\/(\S+?(?:jpe?g|png|gif|webp|heif|heic|psd))/)[0]}`
                    let searchResultImgUrl = changeImgUrl.replace(/\/s\d+\//, searchThumSize)
                    // console.log(changeImgUrl.replace(/\/s\d+\//, searchThumSize));

                    apiResult += `<a href="${post.url}"><div class="search_result_card_con">
                           <div class="search_result_card_img_con">
                                <img src="${searchResultImgUrl}" alt="${post.title}">
                           </div>
                           <h3 class="search_result_card_title">${post.title}</h3>
                       </div></a>`

                    // apiResult = `<a href="${post.url}"><h1 style="color:white;">${post.title}</h1></a>`
                    //   console.log(`Title: ${post.title}`);
                    //   console.log(`Published Date: ${post.published}`);
                    //   console.log(`URL: ${post.url}`);
                    //   console.log(`URL: ${post.content.length}`);
                    //   console.log(`https:${post.content.match(/\/\/(\S+?(?:jpe?g|png|gif|webp))/)[0]}`);
                    // let changeImgUrl = `https:${post.content.match(/\/\/(\S+?(?:jpe?g|png|gif|webp|heif|heic|psd))/)[0]}`
                    // console.log(changeImgUrl.replace(/\/s\d+\//, searchThumSize));

                    // console.log('------');
                });
            } else {
                foundText.innerHTML = `No post found`
                apiSearchResulId.innerHTML = `<div class="content_status">
                <span>No post found, please start typing</span>
            </div>`
            }
            if (items.length != 0) {
                apiSearchResulId.innerHTML = apiResult
            }

        })
        .catch((error) => {
            // console.error(error);
        });

}
