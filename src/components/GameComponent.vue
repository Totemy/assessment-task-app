<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field v-model.number="sizeX" label="Size X" type="number" />
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field v-model.number="sizeY" label="Size Y" type="number" />
      </v-col>
    </v-row>
      <v-col class="game__grid">
        <v-row v-for="row in grid" :key="row.id" >
          <v-col
            v-for="cell in row"
            :key="cell.id"
            cols="auto"
            :style="{backgroundColor: cell.color }"
            class="game__cell"
            @mouseover="cell.color = cell.color === 'white' ? 'blue' : 'white'"
          />
        </v-row>
      </v-col>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'

const sizeX = ref(32)
const sizeY = ref(32)
const grid = ref([])

const generateGrid = () => {
  grid.value = []
  for (let y = 0; y < sizeY.value; y++) {
    let row = []
    for (let x = 0; x < sizeX.value; x++) {
      row.push({
        id: `${x}-${y}`,
        color: 'white'
      })
    }
    grid.value.push(row)
  }
}

generateGrid()

watch([sizeX, sizeY], () => generateGrid())
</script>