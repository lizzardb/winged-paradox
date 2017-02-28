function NextMeeting()
{
    var firstdate = new Date(document.getElementById("initialmeetingdate").value);
    var betweendays = Number(document.getElementById("betweenmeetings").value);
    
    var calculatemtg;
    
    calculatemtg = firstdate.toDateString(firstdate.setDate(firstdate.getDate() + betweendays));
    
    document.getElementById("meetingdisplay").innerHTML = calculatemtg;
    
    var meetingdates = Number(document.getElementById("meetingcount").value);
    
    var meetingnumber = 0;
    var count = 0;
    var result="<table><tr><th>Meeting Number</th><th>Meeting Date</th></tr>";
    
    for (count=0; count < meetingdates; count++)
    {
        meetingnumber = Math.floor(100+1) / 100;
        result += "<tr><td>" + (count+1) + "</td><td>" + meetingdates + "</td></tr>";
    }

    result += "</table";
    document.getElementById("meetingdisplay").innerHTML = result;
}