const buttons = document.querySelectorAll(".button");

const menu = [[{
    text: 'Beer',
    href: 'beer.html'
},
{
    text: 'Vodka',
    href: 'vodka.html'
}],
[{
    text: 'Chips',
    href: 'chips.html'
},
{
    text: 'Fish',
    href: 'fish.html'
}]];

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        if (button.classList.contains("button--without-links")) {
            const items = button.nextElementSibling.querySelectorAll("li");
            const linksContent = menu[index];
            items.forEach((item, index) => {
                const link = document.createElement("a");
                link.href = linksContent[index].href;
                link.textContent = linksContent[index].text;
                item.append(link);
            })
            button.classList.remove("button--without-links");
        }
    })
})