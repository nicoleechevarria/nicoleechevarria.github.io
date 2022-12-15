const polygons = () => 
{
    let number = prompt("The Noble Elk requests a number from 0 to 10...")
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
        case 1:
            polygon = "henagon";
            break;
        case 2:
            polygon = "digon";
            break;
        case 3:
            polygon = "trigon";
            break;
        case 4:
            polygon = "tetragon"
            break;
        case 5:
            polygon = "pentagon"
            break;
        case 6:
            polygon = "hexagon"
            break;
        case 7:
            polygon = "heptagon"
            break;
        case 8:
            polygon = "octagon"
            break;
        case 9:
            polygon = "enneagon"
            break;
        case 10:
            polygon = "decagon"
            break;
    }
    return polygon;
}
