import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getAllHouses() {
    const res = await api.get('api/houses')
    AppState.houses = res.data.map(h => new House(h))
  }
  async getHouseById(id) {
    const res = await api.get('api/houses/'+id)
    AppState.house = new House(res.data)
  }
  async editHouse(data) {
    const res = await api.put('api/houses/'+data.id, data)
    logger.log(res.data)
  }
  async createHouse(data) {
    const res = await api.post('api/houses', data)
    logger.log(res.data)
  }
}

export const housesService = new HousesService()