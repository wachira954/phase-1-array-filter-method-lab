function findMatching(driver, driver2){
   const result = driver.filter(passedDriver=> passedDriver.toUpperCase() === driver2.toUpperCase());
   if (result){
    return result;
   }
}


function fuzzyMatch(driver, driver7){
    const result = driver.filter(passedDriver=> passedDriver.toLowerCase().indexof(driver7.toLowerCase() ===0));
    if (result){
        return result
    }
}

function matchName(driver, driver2){
 const result = driverfilter(passedDriver=> passedDriver.name === driver2);
if (result){
    return result;
}
}