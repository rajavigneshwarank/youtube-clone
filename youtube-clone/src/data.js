export const API_KEY = 'AIzaSyDBBhb-Z68iu06KGI6Arzbi0K59t3pmZrA';

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}