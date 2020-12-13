//ngrx courses


npm install @ngrx/schematics --save-dev

npm install @ngrx/{store,effects,entity,store-devtools} --save

ng config cli.defaultCollection @ngrx/schematics

ng generate store AppState --root --module app.module.ts
