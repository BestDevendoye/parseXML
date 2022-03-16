 const Donnes = `<gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
<gesmes:subject>Reference rates</gesmes:subject>
<gesmes:Sender>
<gesmes:name>European Central Bank</gesmes:name>
</gesmes:Sender>
<Cube>
<Cube time="2022-03-15">
<Cube currency="USD" rate="1.0991"/>
<Cube currency="JPY" rate="129.67"/>
<Cube currency="BGN" rate="1.9558"/>
<Cube currency="CZK" rate="24.867"/>
<Cube currency="DKK" rate="7.4410"/>
<Cube currency="GBP" rate="0.84053"/>
<Cube currency="HUF" rate="371.41"/>
<Cube currency="PLN" rate="4.7355"/>
<Cube currency="RON" rate="4.9482"/>
<Cube currency="SEK" rate="10.5260"/>
<Cube currency="CHF" rate="1.0322"/>
<Cube currency="ISK" rate="144.90"/>
<Cube currency="NOK" rate="9.8490"/>
<Cube currency="HRK" rate="7.5750"/>
<Cube currency="TRY" rate="16.0968"/>
<Cube currency="AUD" rate="1.5234"/>
<Cube currency="BRL" rate="5.6385"/>
<Cube currency="CAD" rate="1.4099"/>
<Cube currency="CNY" rate="7.0117"/>
<Cube currency="HKD" rate="8.6026"/>
<Cube currency="IDR" rate="15710.44"/>
<Cube currency="ILS" rate="3.6088"/>
<Cube currency="INR" rate="83.9555"/>
<Cube currency="KRW" rate="1366.05"/>
<Cube currency="MXN" rate="22.9352"/>
<Cube currency="MYR" rate="4.6239"/>
<Cube currency="NZD" rate="1.6216"/>
<Cube currency="PHP" rate="57.536"/>
<Cube currency="SGD" rate="1.4993"/>
<Cube currency="THB" rate="36.842"/>
<Cube currency="ZAR" rate="16.6249"/>
</Cube>
</Cube>
</gesmes:Envelope>`



export default  chargement =>
{
    const DEVISES = {}
    const BALISE_CUBE= '<Cube>'
    const BALISE_CUBEFIN = '</Cube>'
    const BALISE_FIN = BALISE_CUBEFIN.length
    const PositionBalise = Donnes.indexOf(BALISE_CUBE)
    const PositionBalisefin = Donnes.lastIndexOf(BALISE_CUBEFIN)
     const resultatXML =   Donnes.substring(PositionBalise,PositionBalisefin + BALISE_FIN)
     //console.log(resultatXML);

     const parser = new DOMParser();
     const doc1 = parser.parseFromString(resultatXML,'text/xml')
     //console.log(doc1)
     const cube1 = doc1.firstElementChild
    // console.log(cube1);
     const cube2 = cube1.firstElementChild
    const attrtime = cube2.attributes
    const attrtime1 = attrtime.getNamedItem('time')
    const time = attrtime1.value
    console.log(time)
    const time2 = document.getElementById('time')
    time2.textContent = `la date du jour ${time}`
    const elements = cube2.children

    for (const element of elements)
    {

        const attributes = element.attributes
        const currencytest = attributes.getNamedItem('currency').value
        const tauxtest = attributes.getNamedItem('rate').value
        const  taux = parseFloat(tauxtest)
        const currency = currencytest.toLowerCase()
  
        DEVISES[currency] = taux

    }
  

return DEVISES

}

