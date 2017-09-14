import { createStore, applyMiddleware, Store } from 'redux';
import { logger } from '../middleware';
import rootReducer, { RootState } from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/main';

export function configureStore(initialState?: RootState): Store<RootState> {
    const create = window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore;

    const sagaMiddleware = createSagaMiddleware();
    const createStoreWithMiddleware = applyMiddleware(logger, sagaMiddleware)(create);

    const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
