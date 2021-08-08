import PouchDB from 'pouchdb';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  config,
  getModule
} from 'vuex-module-decorators';
import store from '@/store'

const db = new PouchDB('gascdb');


config.rawError = true;
@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: 'games'
})
class GameStore extends VuexModule {
  gamesItems: [] | undefined
  gamesQuantity: 0 | undefined

  @Mutation
  UPDATE_GAMES_ITEMS(state, payload: any) {
    state.gamesItems = payload;
  }

  @Mutation
  UPDATE_GAMES_QUANTITY(state, payload: any) {
    state.gamesQuantity = payload;
  }

  @Action({commit: 'UPDATE_GAMES_ITEMS'})
  async getGamesItems() {
    db.allDocs({
      include_docs: true,
      attachments: false
    })
    .then(function (result) {      
      
      return result.rows;
    })
    .catch(function (err) {
      console.error(err);
    });    
  }
}

export default getModule(GameStore);