

document.getElementById("j_submit").addEventListener("click", function(event) {

    event.preventDefault();
    const textarea = document.getElementById("j_entry");
    const itemText = textarea.value.trim();

    if (itemText !== '') {
        const li = document.createElement("li");

        const date = new Date();
        const formattedDate = date.toLocaleDateString([], {
            year: "numeric", 
            month: "long", 
            day: "numeric"
        });

        const datespan = document.createElement("span");
        datespan.textContent = formattedDate
        datespan.classList.add("entry-date");

        const textP = document.createElement("p");
        textP.textContent = itemText;

        li.appendChild(datespan);
        li.appendChild(textP)

        document.getElementById("item_list").appendChild(li);

        textarea.value = "";
        textarea.focus();
    }

});
