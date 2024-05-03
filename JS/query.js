function calculateOrder() {
}
       
function selectedApizza()
{
    let selectedOption = document.querySelector("input[name='pizza']:checked").value;

    if(selectedOption == "1") {
        alert("Why did you choose hawai?!");
    }
    else if(selectedOption == "2") {
        alert("Why did you choose peperroni?!");
    }
    else if(selectedOption == "3") {
        alert("Why did you choose steak?");
    }
    else {
        alert("Unknown pizza option selected");
    }
}
