const getPlanet = () => {
    setTimeout(() => {
        const mars = {
            name: "Mars",
            distanceFromSun: {
                value: 227900000,
                measurementUnit: "kilometers",
            },
        };
        console.log("Returned planet: ", mars);
    }, 4000)

};

getPlanet(); // imprime Marte depois de 4 segundos

// ------------------------------------------------------

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    setTimeout(() => {
        const marsTemperature = `Mars temperature is: ${getMarsTemperature()} degree Celsius`
        console.log(marsTemperature)}, messageDelay);
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// ------------------------------------------------------