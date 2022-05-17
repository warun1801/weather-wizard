import { InputWrapper, Input, Title, Button, Space, Container, Center, Modal, Paper, Text, Image, Mark, Highlight, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
export default function WeatherInput() {
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<any>({});
    const [showWeather, setShowWeather] = useState<boolean>(false);
    const [newCity, setNewCity] = useState<any>('');
    const onCityChange = (e: any) => {
        setCity(e.target.value);
    }

    const showWeatherData = () => {
        setNewCity(<Mark>{city}</Mark>)
        setShowWeather(true);
    }

    const fetchWeather = async (city: string) => {
        const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeather(data.current);
        } catch(e) {
            console.log(e);
        }
    }


    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log(city);
        if (city === '') {
            alert('Please enter a city');
        } else {
            await fetchWeather(city);
            showWeatherData();
        }
    }

    return (
        <Center>
            <InputWrapper
            id="weather-input"
            label={<Title order={3}>Enter a city name</Title>}
            description="Please enter the name of the city you want to know the weather for."
            >
                <Input id="weather-input" placeholder="Khamgaon"  onChange={onCityChange} />
                <Space h="xs"/>
                <Button id="weather-input-button" type="submit" color="yellow" onClick={onSubmit}> Submit </Button>
            </InputWrapper>
            {showWeather && (
                <Modal
                    opened={showWeather}
                    onClose={() => setShowWeather(false)}
                    title={<Title><Highlight align='center' size="xl" highlight={city}>{`Weather for ${city}`}</Highlight> </Title>}
                >
                    <Paper shadow="xs" p="md">
                        <Title order={3}>Condition:</Title>
                        <Group>
                            <Text>{weather.condition.text}</Text>
                            <Image width="30px" src={weather.condition.icon} alt={weather.condition.text}/>
                        </Group>
                    </Paper>
                    <Paper shadow="xs" p="md">
                        <Title order={3}>Temperature:</Title>
                        <Text>{weather.temp_c}°C</Text>
                    </Paper>
                    <Paper shadow="xs" p="md">
                        <Title order={3}>Humidity:</Title>
                        <Text>{weather.humidity}%</Text>
                    </Paper>
                    <Paper shadow="xs" p="md">
                        <Title order={3}>Pressure:</Title>
                        <Text>{weather.pressure_mb} mb</Text>
                    </Paper>
                </Modal>
            )}
        </Center>
    );
}
