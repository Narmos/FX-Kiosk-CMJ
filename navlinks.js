// Create global DIV
homepageLinks = document.createElement("div");
homepageLinks.id = "homepageLinks";
homepageLinks.style.position = "fixed";
homepageLinks.style.bottom = "40px";
homepageLinks.style.right = "20px";
homepageLinks.style.zIndex = "1000";

// Create previous link
previousButton = document.createElement("img");
previousButton.id = "previousButton";
previousButton.src = browser.runtime.getURL("icons/previous.png");
previousButton.style.width = "90px";
previousButton.style.height = "90px";
previousButton.style.display = "inline";
previousButton.onclick = () => {
    history.back();
};

// Create homepage link
homepageButton = document.createElement("img");
homepageButton.id = "homepageButton";
homepageButton.src = browser.runtime.getURL("icons/home.png");
homepageButton.style.width = "90px";
homepageButton.style.height = "90px";
homepageButton.style.marginLeft = "20px";
homepageButton.style.display = "inline";
homepageButton.onclick = () => {
    window.location.href = "https://collection.museejenisch.ch";
};

document.body.appendChild(homepageLinks);
document.getElementById("homepageLinks").appendChild(previousButton);
document.getElementById("homepageLinks").appendChild(homepageButton);

// Delete target _blank attributes (use No Target Blank extension : https://addons.mozilla.org/fr/firefox/addon/no-target-blank/)
//Array.from(document.querySelectorAll('a[target="_blank"]')).forEach(link => link.removeAttribute('target'));
//document.addEventListener('click', e => e.target.removeAttribute('target'));