const getPrice = (number:number, country:string, money: string) => {

  let n:Number = new Number(number)

  if (country == "es-CL"){ //Fixes Chrome issue with CLP currencty
    //@ts-ignore
    n = `$ ${n.toLocaleString('de-DE')}`
  }

  let numbObj = {
    style: "currency",
    currency: money
  }

  let x = n.toLocaleString(country, numbObj)

  return x
}

export { getPrice }