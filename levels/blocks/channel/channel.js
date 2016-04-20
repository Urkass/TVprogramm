var today;
var broadcastDate = new Date();
var content, arr, timeArray;
var channels = document.querySelectorAll('.channel');
checkChanges();
setInterval(checkChanges, 60000);
function checkChanges(){
    today = new Date();
    for (y = 0; y < channels.length; y++) {
        timeArray = channels[y].querySelectorAll('.broadcast');
        for (i = 0; i < timeArray.length; i++) {
            content = timeArray[i].querySelector('.broadcast__time').innerHTML;
            arr = content.split(':');
            broadcastDate.setHours(arr[0]);
            broadcastDate.setMinutes(arr[1]);
            if (broadcastDate > today) {
                timeArray[i - 1].className += " broadcast_now-playing_true";
                break;
            }
        }
    }
}