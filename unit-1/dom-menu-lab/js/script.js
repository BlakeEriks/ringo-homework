// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" }
      ]
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" }
      ]
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" }
      ]
    }
  ];
  
  let mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  mainEl.classList.add("flex-ctr");
  
  let topMenuEl = document.querySelector("#top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (let menu of menuLinks) {
    let aEl = document.createElement("a");
    aEl.setAttribute("href", menu.href);
    aEl.textContent = menu.text;
    topMenuEl.append(aEl);
  }
  
  let subMenuEl = document.querySelector("#sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  const buildSubMenu = (subLinks) => {
    subMenuEl.innerHTML = "";
    for (let subLink of subLinks) {
      let aEl = document.createElement("a");
      aEl.setAttribute("href", subLink.href);
      aEl.textContent = subLink.text;
      subMenuEl.append(aEl);
    }
  };
  
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "A") return;
  
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      subMenuEl.style.top = "0";
      return;
    }
    for (let aEl of topMenuEl.children) {
      aEl.classList.remove("active");
    }
    if (event.target.innerText === "ABOUT") {
      mainEl.innerHTML = "<h1>" + event.target.innerText + "</h1>";
      subMenuEl.style.top = "0";
      return;
    }
    event.target.classList.add("active");
    let menuLink = menuLinks.filter(
      (menuLink) => menuLink.text === event.target.textContent
    )[0];
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  });
  
  subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "A") return;
    subMenuEl.style.top = "0";
    for (let aEl of topMenuEl.children) {
      aEl.classList.remove("active");
    }
    mainEl.innerHTML = "<h1>" + event.target.innerText + "</h1>";
  });
  