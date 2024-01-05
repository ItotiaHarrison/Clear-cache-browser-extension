document.addEventListener("DOMContentLoaded", function() {
    // convert date and time into human-readable format
    function convertDate(date) {
        let newDate = new Date(date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return newDate.toLocaleDateString("en-US", options);
    }

    // add successfully cleared cache into paragraph with id "lastCleared"
    function addCleared() {
        const p = document.getElementById("lastCleared");
        let date = new Date();
        p.innerHTML = "Successfully cleared cache " + convertDate(date);
    }

    // clear all cache history
    document.getElementById("allHistory").addEventListener("click", function() {
        chrome.browsingData.removeCache({ "since": 0 }, function() {
            addCleared();
            alert("I am clicked")
        });
    });

    // clear cache history from the past month
    document.getElementById("pastMonth").addEventListener("click", function() {
        let date = new Date();
        date.setMonth(date.getMonth() - 1);
        chrome.browsingData.removeCache({ "since": date.getTime() }, function() {
            addCleared();
        });
    });

    // clear cache history from the past week
    document.getElementById("pastWeek").addEventListener("click", function() {
        let date = new Date();
        date.setDate(date.getDate() - 7);
        chrome.browsingData.removeCache({ "since": date.getTime() }, function() {
            addCleared();
        });
    });

    // clear cache history from the past hour
    document.getElementById("pastHour").addEventListener("click", function() {
        let date = new Date();
        date.setHours(date.getHours() - 1);
        chrome.browsingData.removeCache({ "since": date.getTime() }, function() {
            addCleared();
        });
    });
});
