import { observable } from 'mobx';

class AppState {
    @observable message = 'Hello World!!';
}

const appState = new AppState();
export default appState;