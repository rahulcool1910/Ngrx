//ngrx courses

1) npm install @ngrx/schematics --save-dev

2) npm install @ngrx/{store,effects,entity,store-devtools} --save

3) ng config cli.defaultCollection @ngrx/schematics

4) ng generate store AppState --root --module app.module.ts

5) constructor(private store<StoreType>){}


        * store.subscribe() //store is an observable
        *store.dispatch() //since store is an observable don't change the data in main copy



6) ng generate  action  path


7) type AuthState = {
  isLoggedIn: boolean;
  user: User;
}; 

8) change the state of the app

    * create a action with few types

    * add a constructor and pass some values to the action

    *:NameX: (AuthReducer -> 
          function which takes 2 arguments ( (state -> current) : typeX , (action -> new state)):typeX)

    *  NameX === name in interface     


9) ng g reducer ReducersName --flat=false --module modle.name;
  //flat =new directory

10) Selectors can b used instead of subscription  since they have memory



