/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

//router.on('/').render('pages/home')
router.get('/', async () => {
  return 'Hello world'
})

//Two ways for returning a view file: using '.on' or '.get'
router.get('/news',({view}) => {
    return view.render("news/view");
 }).as("news_view")

// router.on('/news').render('news/view'); 

// router.post('/news',({request})=>{
//     const {email,password} = request.body();
//     return {email,password};
// })

//REDIRECTING USER
router.post('/news',({response})=>{
    return response.redirect('/news');
}).as("news_create")

router.patch('/news/:id',({params})=>{
    return {params};
}).where('id', {
    match: /^[0-9]+$/,
    cast:(id)=> Number(id)
  }).as("news_update")
