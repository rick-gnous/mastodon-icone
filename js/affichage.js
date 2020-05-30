function transformName(name, url) {
    nameWithoutHttps = url.substring(8);
    indexOfSlash = nameWithoutHttps.indexOf("/");
    nameWithoutSlash = nameWithoutHttps.substring(0,indexOfSlash);
    ret = "@" + name.toLowerCase() + "@" + nameWithoutSlash;
    return ret;
}

function getProfile(url, id) {
    apiUrl = url + "/api/v1/accounts/" + id;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", apiUrl, false);
    xmlHttp.send();
    response = JSON.parse(xmlHttp.responseText);
    console.log(response);
    
    accountUrl = response['url'];
    accountName = response['display_name']
    accountPicture = response['avatar'];

    accountAtName = transformName(accountName, accountUrl);

    linkHTML = document.createElement("a");
    text = document.createTextNode("coucou");
    linkHTML.title = "link to mastodon profile";
    linkHTML.href = accountUrl;

    imageHtml = document.createElement("img");
    imageHtml.src = accountPicture
    imageHtml.height = 65;
    imageHtml.width = 65;
    imageHtml.id = "photoMasto";

    accountNameHtml = document.createElement("p");
    text = document.createTextNode(accountName);
    accountNameHtml.appendChild(text);
    accountNameHtml.id = "nomMasto";

    atAccountHtml = document.createElement("p");
    text = document.createTextNode(accountAtName);
    atAccountHtml.appendChild(text);
    atAccountHtml.value = accountName;
    atAccountHtml.id = "nomCompteMasto";

    divInfos = document.createElement("div");
    divInfos.id = "infoTextMasto";
    divInfos.appendChild(accountNameHtml);
    divInfos.appendChild(atAccountHtml);

    linkHTML.appendChild(imageHtml);
    linkHTML.appendChild(divInfos);

    document.getElementById("petitAffichage").appendChild(linkHTML);
}