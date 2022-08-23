class Weather {
   constructor(city) {
      this.apiKey = "39780ac1c16f4476a7d115653220505";
      this.city = city;
   }

   // Fetch weather from API
   async getWeather() {
      const response = await fetch(
         `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=yes`
      );

      const responseData = await response.json();

      return responseData;
   }

   // Change weather location
   changeLocation(city) {
      this.city = city;
   }
}
