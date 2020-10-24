function check(){
    var nam = document.getElementsByTagName('input');
    var year = nam[0].value;
    if(year==''){
        alert('ko đc để trống!!!');
        return;
    }
     if (year%400==0) {
        alert('nam nhuan');
        return;
    }
    else if (year%4==0&&year%100==1) {
        alert('nam nhuan');
        return;
    }
    else{
        alert('nam ko nhuan');
        return;
    }
}
