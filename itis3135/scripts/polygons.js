const polygons = () => 
{
    let number = prompt("The Noble Elk requests a number from 1 to 10...")
        if (validateEntry(number) === true) 
        {
            entered_number = Math.round(Math.abs(number))
            let output = getShape(entered_number)
            alert(output)
        }
}

const getShape = (entered_number) => 
{
    switch (entered_number) 
    {
        case 0:
            polygon = "that's not a polygon"
            break;
        case 1:
            polygon = "that's a henagon"
            break;
        case 2:
            polygon = "that's a digon"
            break;
        case 3:
            polygon = "that's a trigon"
            break;
        case 4:
            polygon = "that's a tetragon"
            break;
        case 5:
            polygon = "that's a pentagon"
            break;
        case 6:
            polygon = "that's a hexagon"
            break;
        case 7:
            polygon = "that's a heptagon"
            break;
        case 8:
            polygon = "that's a octagon"
            break;
        case 9:
            polygon = "that's a enneagon"
            break;
        case 10:
            polygon = "that's a decagon"
            break;
    }
    return polygon;
}
const validateEntry = (number) => {
    if (isNaN(number)) {
        alert("Thats not a number silly")
        return false
    } else if (number > 10 || number < -10) {
        alert("Thats not within 1 to 10")
        return false
    } else {
        return true
    }
}
