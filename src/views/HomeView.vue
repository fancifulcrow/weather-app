<template>
  <main class="container max-w-2xl">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Search for a city or state" class="py-2 px-1 w-full bg-transparent border-b border-secondary border-opacity-40 focus:border-opacity-100 focus:outline-none focus:shadow-sm placeholder:text-secondary placeholder:text-opacity-40"/>

      <ul class="absolute w-full shadow-md py-2 px-1 top-16 bg-primary" v-if="mapboxSearchResults">

        <p v-if="searchError" class="py-2">Sorry, something went wrong. Please try again.</p>

        <p v-if="!serverError && mapboxSearchResults.length === 0" class="py-2">No results match your query, try a different term.</p>

        <template v-else>
          <li v-for="searchResult in mapboxSearchResults" :key="searchResult.id" class="py-2 cursor-pointer hover:text-tertiary duration-150" @click="previewCity(searchResult)">
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList>
          <template #fallbacl>
            <p>Loading</p>
          </template>
        </CityList>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import CityList from "../components/CityList.vue";

const mapboxAPIKey ="pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";

const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try{
        const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`);

        mapboxSearchResults.value = result.data.features;
      } catch{
        searchError.value = true;
      }

      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};

const router = useRouter();

const previewCity = (searchResult) => {
  const [city, state, country] = searchResult.place_name.split(",");

  /** const isCitySaved = () => {
    const savedCities = JSON.parse(localStorage.getItem("savedCities"));
    savedCities.forEach(city => {
      console.log(city)
    });
    return savedCities.some(city => city.coords.lat == searchResult.geometry.coordinates[1] && city.coords.long == searchResult.geometry.coordinates[0]);
  }

  const previewEnabled = !isCitySaved(); **/

  router.push({
    name: 'cityView',
    params: { state: state.replace(" ", ""), city: city},
    query: {
      long: searchResult.geometry.coordinates[0],
      lat: searchResult.geometry.coordinates[1],
      country: country,
      // ...(previewEnabled && { preview: true })
      preview: true,
    }
  });
};
</script>
