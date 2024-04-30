import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '43ffd2491dmsh415142f0db4aec1p1b9cefjsnb883494b853c',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 


  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://all-cars-names-image-and-variants-info.p.rapidapi.com/motororchestrator/api/v1/mmv');
  const { make, model, year } = car;

  url.searchParams.append('customer', '43ffd2491dmsh415142f0db4aec1p1b9cefjsnb883494b853c');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 