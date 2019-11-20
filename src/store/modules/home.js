import { observable,action} from "mobx";
class HomeStore {
  @observable homeNum = '这是我的moBx'
  @action addNum(reset) {
    console.log(reset)
      this.homeNum = '不,这是你的';
  }
}
export default HomeStore;